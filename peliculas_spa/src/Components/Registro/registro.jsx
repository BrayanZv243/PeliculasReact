import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Icon, TextField, Button } from "@material-ui/core";
import { registrarUsuario } from "../Services/usuariosServices";
import sha1 from "sha1";

const Registro = () => {
    const [usuario, setUsuario] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]:
                e.target.name === "password"
                    ? sha1(e.target.value)
                    : e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        await registrarUsuario(usuario);
    };

    const history = useHistory();

    return (
        <>
            <Container>
                <form onSubmit={handleSubmit}>
                    <h2 style={{ color: "grey" }}>Venta de Películas</h2>
                    <h2>Regístrate Ahora</h2>
                    <Icon color="action">account_circle</Icon>&nbsp;
                    <TextField
                        name="nombre"
                        onChange={(e) => handleChange(e)}
                        required
                        placeholder="Ingresa tu nombre"
                        style={{ width: 300 }}
                    ></TextField>
                    &nbsp;
                    <TextField
                        name="apellido"
                        onChange={(e) => handleChange(e)}
                        required
                        placeholder="Ingresa tu apellido"
                        style={{ width: 300 }}
                    ></TextField>
                    <br />
                    <br />
                    <Icon color="action">mail_outline</Icon>&nbsp;
                    <TextField
                        name="email"
                        onChange={(e) => handleChange(e)}
                        type="email"
                        required
                        placeholder="Ingresa tu email"
                        style={{ width: 300 }}
                    ></TextField>
                    <br />
                    <br />
                    <Icon color="action">vpn_key</Icon>&nbsp;
                    <TextField
                        name="password"
                        onChange={(e) => handleChange(e)}
                        type="password"
                        required
                        placeholder="Ingresa tu contraseña"
                        style={{ width: 300 }}
                    ></TextField>
                    <br />
                    <br />
                    <hr />
                    <Button
                        variant="contained"
                        color="default"
                        onClick={() => history.push({ pathname: "/" })}
                    >
                        Volver
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button type="submit" variant="contained" color="secondary">
                        Regístrate
                    </Button>
                </form>
            </Container>
        </>
    );
};

export default Registro;
