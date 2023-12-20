import React, { useContext, useRef, useState } from "react";
import { Button, Paper, Grid, Icon } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { FavoritoContext } from "../Context/favoritoContext";
import { CarritoContext } from "../Context/carritoContext";

const Pelicula = (props) => {
    const {
        titulo,
        genero,
        director,
        anio,
        portada,
        estrellas,
        sinopsis,
        precio,
        estaEnCarrito,
    } = props.datos;

    const favorito = useRef();
    const [esFavorita, setEsFavorita] = useState(
        props.datos.favorito.length > 0
    );
    const [seleccionado, setSeleccionado] = useState(false);

    const { handleAgregarFavorito, handleEliminarFavorito } =
        useContext(FavoritoContext);

    const { handleAgregarPeliculaAlCarrito, handleAgregarCompra } =
        useContext(CarritoContext);

    const setFavorito = () => {
        if (!esFavorita) {
            handleAgregarFavorito(props.datos);
        } else {
            handleEliminarFavorito(props.datos);
        }
        setEsFavorita(!esFavorita);
    };

    return (
        <>
            <Grid container item xs={12} sm={4} lg={3}>
                <Paper style={{ padding: 5, textAlign: "center" }}>
                    <h2>{titulo}</h2>
                    <Icon
                        color={
                            estaEnCarrito
                                ? "disabled"
                                : esFavorita
                                ? "secondary"
                                : "primary"
                        }
                        ref={favorito}
                        style={{
                            cursor: estaEnCarrito ? "default" : "pointer",
                        }}
                        onClick={estaEnCarrito ? null : setFavorito}
                    >
                        favorite
                    </Icon>
                    <div>
                        <img width={200} src={portada} alt="imagen-portada" />
                    </div>
                    <br />
                    <div>
                        <Rating value={estrellas} readOnly></Rating>
                    </div>
                    <br />
                    <div>{sinopsis}</div>
                    <br />
                    <div>{`Género: ${genero}`}</div>
                    <div>{`Director: ${director}`}</div>
                    <div>{`Año: ${anio}`}</div>

                    <div>
                        <b>{`Precio: $${precio}`}</b>
                    </div>
                    <br />
                    <hr />
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                handleAgregarCompra([props.datos]);
                                handleEliminarFavorito(props.datos);
                                setSeleccionado(true);
                                alert(
                                    `Has comprado la película ${titulo} con un precio de $${precio}`
                                );
                            }}
                            // Desactivar el clic si estaEnCarrito es false
                            disabled={estaEnCarrito || seleccionado}
                        >
                            Comprar
                        </Button>
                        &nbsp;
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => {
                                handleEliminarFavorito(props.datos);
                                handleAgregarPeliculaAlCarrito(props.datos);
                                setSeleccionado(true);
                            }}
                            // Desactivar el clic si estaEnCarrito es false
                            disabled={estaEnCarrito || seleccionado}
                        >
                            Agregar al carrito
                        </Button>
                    </div>
                </Paper>
            </Grid>
        </>
    );
};

export default Pelicula;
