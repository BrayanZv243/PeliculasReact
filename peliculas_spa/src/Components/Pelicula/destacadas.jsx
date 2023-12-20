import React, { useState, useEffect, useContext } from "react";
import { getDestacadas } from "../Services/peliculasServices";
import Pelicula from "./pelicula";
import { Grid } from "@material-ui/core";
import { CarritoContext } from "../Context/carritoContext";

const Destacadas = () => {
    const [peliculas, setPeliculas] = useState([]);
    const { handleObtenerCarritoYDevolver } = useContext(CarritoContext);

    useEffect(() => {
        const cargarPeliculas = async () => {
            const { data: destacadas } = await getDestacadas(
                localStorage.getItem("idUsuario"),
                4
            );
            const itemsCarrito = await handleObtenerCarritoYDevolver();
            // Agregar la propiedad 'estaEnCarrito' a cada película
            const peliculasConEstado = destacadas.map((pelicula) => ({
                ...pelicula,
                estaEnCarrito: itemsCarrito.some(
                    (item) => item.idPelicula === pelicula.idPelicula
                ),
            }));
            setPeliculas(peliculasConEstado);
        };

        cargarPeliculas();
    }, [handleObtenerCarritoYDevolver]);

    return (
        <>
            <h2>Películas Destacadas</h2>
            <Grid container spacing={2}>
                {peliculas.map((pelicula) => (
                    <Pelicula
                        datos={pelicula}
                        key={pelicula.idPelicula}
                    ></Pelicula>
                ))}
            </Grid>
        </>
    );
};

export default Destacadas;
