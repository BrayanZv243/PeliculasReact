import servicio from "./axiosServices.js";

export function obtenerFavorito(idUsuario) {
    return servicio.get("Favorito/" + idUsuario);
}

export function agregarFavorito(favorito) {
    return servicio.post("Favorito/Agregar/", favorito);
}

export function eliminarFavorito(favorito) {
    return servicio.delete("Favorito/Eliminar/", { data: favorito });
}
