import React, { useContext } from "react";
import { Grid, Button } from "@material-ui/core";
import { CarritoContext } from "../Context/carritoContext";
import CarritoItem from "./carritoItem";

const Carrito = () => {
    const { itemsCarrito } = useContext(CarritoContext);
    const { handleAgregarCompra } = useContext(CarritoContext);

    return (
        <>
            <Grid container alignItems="center" spacing={2}>
                <Grid item xs={6}>
                    <h2>
                        Mi Carrito{" "}
                        {itemsCarrito.length === 0 &&
                            "(No tienes películas en tu carrito aún)"}
                    </h2>
                </Grid>
                {itemsCarrito.length > 0 && (
                    <Grid item xs={6} style={{ textAlign: "right" }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => {
                                handleAgregarCompra(itemsCarrito);
                                alert(
                                    `¡Gracias por su compra de ${itemsCarrito.length} películas!`
                                );
                            }}
                        >
                            Comprar
                        </Button>
                    </Grid>
                )}
            </Grid>
            <Grid container spacing={2}>
                {itemsCarrito.map((pelicula) => (
                    <CarritoItem
                        pelicula={pelicula}
                        key={pelicula.idPelicula}
                    ></CarritoItem>
                ))}
            </Grid>
        </>
    );
};

export default Carrito;
