import React, { useState, useEffect, useContext } from "react";
import Pelicula from "./pelicula";
import { obtenerPeliculas } from "../Services/peliculasServices.js";
import { Grid } from "@material-ui/core";
import { CarritoContext } from "../Context/carritoContext";

const Peliculas = () => {
    const [peliculas, setPeliculas] = useState([]);
    const { handleObtenerCarritoYDevolver } = useContext(CarritoContext);

    useEffect(() => {
        const cargarPeliculas = async () => {
            const { data: peliculas } = await obtenerPeliculas(
                localStorage.getItem("idUsuario")
            );
            const itemsCarrito = await handleObtenerCarritoYDevolver();
            // Agregar la propiedad 'estaEnCarrito' a cada película
            const peliculasConEstado = peliculas.map((pelicula) => ({
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
            <div>
                <h2>Peliculas</h2>
            </div>

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

export default Peliculas;
