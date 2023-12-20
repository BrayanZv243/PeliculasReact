using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace peliculas_api.Models
{
    public class Favorito
    {
        public int IdUsuario { get; set; }
        public int IdPelicula { get; set; }
        public Usuario Usuario { get; set; }
        public Pelicula Pelicula { get; set; }
    }
}
