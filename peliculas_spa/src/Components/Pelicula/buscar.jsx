import React, { useState, useEffect } from "react";
import { buscarPor } from "../Services/peliculasServices";
import { Grid } from "@material-ui/core";
import Pelicula from "./pelicula";

const Buscar = (props) => {
    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        handleBuscar(props.match.params.valor);
    }, [props.match.params.valor]);

    const handleBuscar = async (buscar) => {
        const { data: peliculas } = await buscarPor(
            localStorage.getItem("idUsuario"),
            buscar
        );
        setPeliculas(peliculas);
    };

    return (
        <>
            <h2>Resultados de la búsqueda</h2>
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

export default Buscar;
