import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { Icon, Badge } from "@material-ui/core";
import { FavoritoContext } from "../Context/favoritoContext";
import { CarritoContext } from "../Context/carritoContext";

const Header = () => {
    const { cantidadFav } = useContext(FavoritoContext);
    const { cantidadCarrito } = useContext(CarritoContext);

    return (
        <header>
            <h1>Películas</h1>
            <br />
            <Link to="/favoritos">
                <Icon color="action" fontSize="large">
                    favorite
                </Icon>
            </Link>
            <Badge
                badgeContent={cantidadFav}
                color="secondary"
                overlap="rectangular"
            ></Badge>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/carrito">
                <Icon color="action" fontSize="large">
                    shopping_cart
                </Icon>
            </Link>
            <Badge
                badgeContent={cantidadCarrito}
                color="primary"
                overlap="rectangular"
            ></Badge>
        </header>
    );
};

export default Header;
