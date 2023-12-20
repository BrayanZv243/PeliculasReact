import servicio from "./axiosServices.js";

export function registrarUsuario(usuario) {
    return servicio.post("Usuario/", usuario);
}

export function loginUsuario(usuario) {
    return servicio.post("Login/", usuario);
}
