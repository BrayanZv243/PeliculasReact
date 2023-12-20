import React, { useContext } from "react";
import { CarritoContext } from "../Context/carritoContext";
import { Button, Paper, Grid } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

const CarritoItem = ({ pelicula }) => {
    const { handleEliminarPeliculaDeCarrito, handleAgregarCompra } =
        useContext(CarritoContext);

    return (
        <>
            <Grid container item xs={12} sm={12} lg={12}>
                <Paper
                    style={{ padding: 5, textAlign: "center", width: "100%" }}
                >
                    <table style={{ width: "100%" }}>
                        <tbody>
                            <tr>
                                <td>
                                    <img
                                        width={60}
                                        src={pelicula.portada}
                                        alt="imagenFavorito"
                                    />
                                </td>
                                <td>
                                    <h2>{pelicula.titulo}</h2>
                                    <Rating
                                        value={pelicula.estrellas}
                                        readOnly
                                    ></Rating>
                                </td>
                                <td>{`Año: ${pelicula.anio}`}</td>
                                <td>{`Precio: $${pelicula.precio}`}</td>
                                <td>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() =>
                                            handleEliminarPeliculaDeCarrito(
                                                pelicula
                                            )
                                        }
                                    >
                                        Quitar
                                    </Button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => {
                                            handleAgregarCompra([pelicula]);
                                            alert(
                                                `Has comprado la película ${pelicula.titulo} con un precio de $${pelicula.precio}`
                                            );
                                        }}
                                    >
                                        Comprar está película
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Paper>
            </Grid>
        </>
    );
};

export default CarritoItem;
