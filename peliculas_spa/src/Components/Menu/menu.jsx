import React, { useState } from "react";
import { TextField, Icon, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Menu = () => {
    const history = useHistory();
    const [buscar, setBuscar] = useState("");

    const handleBuscar = (e) => {
        setBuscar(e.target.value);
    };

    return (
        <nav>
            <TextField
                name="buscar"
                value={buscar}
                onChange={(e) => handleBuscar(e)}
                placeholder="Busca por género, título, actores..."
                style={{ width: 300 }}
            />
            <Icon
                color="action"
                onClick={() => setBuscar("")}
                style={{ cursor: "pointer" }}
            >
                close
            </Icon>
            <Button
                variant="contained"
                onClick={() => history.push({ pathname: "/buscar/" + buscar })}
            >
                <Icon color="action">search</Icon>
                Buscar
            </Button>
            &nbsp;
            <Button
                variant="contained"
                onClick={() => history.push({ pathname: "/destacadas" })}
            >
                <Icon color="action">star</Icon>
                Destacadas
            </Button>
            &nbsp;
            <Button
                variant="contained"
                onClick={() => history.push({ pathname: "/peliculas" })}
            >
                <Icon color="action">apps</Icon>
                Todas
            </Button>
            <Button
                variant="contained"
                onClick={() => {
                    localStorage.clear();
                    history.push({ pathname: "/" });
                    window.location.reload();
                }}
            >
                <Icon color="action">logout</Icon>
                Salir
            </Button>
        </nav>
    );
};

export default Menu;
