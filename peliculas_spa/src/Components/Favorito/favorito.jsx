import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { FavoritoContext } from "../Context/favoritoContext";
import FavoritoItem from "./favoritoItem";

const Favorito = () => {
    const { itemsFav } = useContext(FavoritoContext);

    return (
        <>
            <h2>
                Mis Favoritos{" "}
                {itemsFav.length === 0 &&
                    "(No tienes películas favoritas en tu lista)"}
            </h2>
            <Grid container spacing={2}>
                {itemsFav.map((pelicula) => (
                    <FavoritoItem
                        pelicula={pelicula}
                        key={pelicula.idPelicula}
                    ></FavoritoItem>
                ))}
            </Grid>
        </>
    );
};

export default Favorito;
