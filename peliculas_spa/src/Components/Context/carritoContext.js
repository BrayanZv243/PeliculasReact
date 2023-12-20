import React, { createContext, useState } from "react";
import { obtenerCompras, agregarCompra } from "../Services/carritoServices";

export const CarritoContext = createContext();

export const CarritoProvider = (props) => {
    const [itemsCarrito, setItemsCarrito] = useState([]);
    const [cantidadCarrito, setCantidadCarrito] = useState(0);

    const handleObtenerCarrito = async () => {
        const { data: carrito } = await obtenerCompras(
            localStorage.getItem("idUsuario")
        );
        setItemsCarrito(carrito);
        setCantidadCarrito(carrito.length);
    };

    const handleObtenerCarritoYDevolver = async () => {
        const { data: carrito } = await obtenerCompras(
            localStorage.getItem("idUsuario")
        );
        const carritoCompleto = [...carrito, ...itemsCarrito];
        return carritoCompleto;
    };

    const handleAgregarCompra = async (peliculas) => {
        const arrayNuevo = peliculas.map(({ idPelicula }) => ({
            idUsuario: localStorage.getItem("idUsuario"),
            idPelicula,
        }));

        await agregarCompra(arrayNuevo);

        // Filtra las películas que no están en la compra
        const nuevasPeliculasEnCarrito = itemsCarrito.filter(
            (item) =>
                !peliculas.some(
                    (pelicula) => pelicula.idPelicula === item.idPelicula
                )
        );

        setItemsCarrito(nuevasPeliculasEnCarrito);
        if (cantidadCarrito > 0) {
            setCantidadCarrito(cantidadCarrito - peliculas.length);
        }
    };

    const handleAgregarPeliculaAlCarrito = async (pelicula) => {
        setCantidadCarrito(cantidadCarrito + 1);
        setItemsCarrito([...itemsCarrito, pelicula]);
    };

    const handleEliminarPeliculaDeCarrito = async (pelicula) => {
        const newItems = itemsCarrito.filter(
            (item) => item.idPelicula !== pelicula.idPelicula
        );
        setItemsCarrito(newItems);
        setCantidadCarrito(cantidadCarrito - 1);
    };

    return (
        <CarritoContext.Provider
            value={{
                itemsCarrito,
                cantidadCarrito,
                handleAgregarPeliculaAlCarrito,
                handleAgregarCompra,
                handleEliminarPeliculaDeCarrito,
                handleObtenerCarrito,
                handleObtenerCarritoYDevolver,
            }}
        >
            {props.children}
        </CarritoContext.Provider>
    );
};
