import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Container, TextField, Icon, Button } from "@material-ui/core";
import { loginUsuario } from "../Services/usuariosServices";
import { LoginContext } from "../Context/loginContext";
import { FavoritoContext } from "../Context/favoritoContext";
import sha1 from "sha1";

const Login = () => {
    const [usuario, setUsuario] = useState({ email: "", password: "" });
    const [msg, setMsg] = useState("");
    const history = useHistory();

    const { handleLogin } = useContext(LoginContext);
    const { handleObtenerFavorito } = useContext(FavoritoContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { data: usuarioValido } = await loginUsuario(usuario);

        if (usuarioValido) {
            handleLogin(usuarioValido.idUsuario, usuarioValido.token);
            handleObtenerFavorito();
            history.push({ pathname: "/peliculas" });
            window.location.reload();
        } else {
            setMsg("Las credenciales son incorrectas, Intente nuevamente");
        }
    };

    const handleChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]:
                e.target.name === "password"
                    ? sha1(e.target.value)
                    : e.target.value,
        });
    };

    return (
        <>
            <Container>
                <form onSubmit={handleSubmit}>
                    <h2 style={{ color: "grey" }}>Venta de Películas</h2>
                    <h2>Bienvenido</h2>
                    <Icon color="action">mail_outline</Icon>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        type="email"
                        name="email"
                        onChange={(e) => handleChange(e)}
                        placeholder="Ingresa tu email"
                        required
                        style={{ width: 300 }}
                    ></TextField>
                    <br />
                    <br />
                    <Icon color="action">vpn_key</Icon>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        type="password"
                        name="password"
                        onChange={(e) => handleChange(e)}
                        placeholder="Ingresa tu contraseña"
                        required
                        style={{ width: 300 }}
                    ></TextField>
                    <br />
                    <br />
                    <h4 style={{ color: "red" }}>{msg}</h4>
                    <hr />
                    <Button type="submit" variant="contained" color="primary">
                        Login
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={(e) => history.push({ pathname: "/registro" })}
                    >
                        Regístrate
                    </Button>
                </form>
            </Container>
        </>
    );
};

export default Login;
