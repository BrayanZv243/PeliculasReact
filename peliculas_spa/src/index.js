import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./Components/Body/body.jsx";
import Footer from "./Components/Footer/footer.jsx";
import Header from "./Components/Header/header.jsx";
import Menu from "./Components/Menu/menu.jsx";
import { FavoritoProvider } from "./Components/Context/favoritoContext.js";
import { CarritoProvider } from "./Components/Context/carritoContext.js";
import { LoginProvider } from "./Components/Context/loginContext.js";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <FavoritoProvider>
                <CarritoProvider>
                    <LoginProvider>
                        {localStorage.getItem("idUsuario") && <Header></Header>}
                        {localStorage.getItem("idUsuario") && <Menu></Menu>}
                        <Body></Body>
                        <Footer></Footer>
                    </LoginProvider>
                </CarritoProvider>
            </FavoritoProvider>
        </Router>
    </React.StrictMode>
);
