import servicio from "./axiosServices.js";

export function obtenerCompras(idUsuario) {
    return servicio.get("Carrito/" + idUsuario);
}

export function agregarCompra(pelicula) {
    return servicio.post("Carrito/comprar/", pelicula);
}
