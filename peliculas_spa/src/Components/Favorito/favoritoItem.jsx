import React, { useContext } from "react";
import { FavoritoContext } from "../Context/favoritoContext";
import { CarritoContext } from "../Context/carritoContext";
import { Button, Paper, Grid } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

const FavoritoItem = ({ pelicula }) => {
    const { handleEliminarFavorito } = useContext(FavoritoContext);
    const { handleAgregarPeliculaAlCarrito } = useContext(CarritoContext);

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
                                            handleEliminarFavorito(pelicula)
                                        }
                                    >
                                        Quitar
                                    </Button>
                                    &nbsp;
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        onClick={() => {
                                            handleEliminarFavorito(pelicula);
                                            handleAgregarPeliculaAlCarrito(
                                                pelicula
                                            );
                                        }}
                                    >
                                        Agregar al carrito
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

export default FavoritoItem;
