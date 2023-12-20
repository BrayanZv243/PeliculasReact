import React from "react";
import Favorito from "../Favorito/favorito.jsx";
import { Route, Switch } from "react-router-dom";
import Carrito from "../Carrito/carrito.jsx";
import Destacadas from "../Pelicula/destacadas.jsx";
import Buscar from "../Pelicula/buscar.jsx";
import Peliculas from "../Pelicula/peliculas.jsx";
import Registro from "../Registro/registro.jsx";
import Login from "../Login/login.jsx";

const Body = () => {
    return (
        <section>
            <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/peliculas" component={Peliculas}></Route>
                <Route path="/favoritos" component={Favorito}></Route>
                <Route path="/carrito" component={Carrito}></Route>
                <Route path="/destacadas" component={Destacadas}></Route>
                <Route path="/buscar/:valor" component={Buscar}></Route>
                <Route path="/buscar/" component={Peliculas}></Route>
                <Route path="/registro" component={Registro}></Route>
            </Switch>
        </section>
    );
};

export default Body;
