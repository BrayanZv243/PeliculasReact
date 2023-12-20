using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using peliculas_api.Context;
using peliculas_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace peliculas_api.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class CarritoController : Controller
    {
        private readonly PeliculasDbContext context;
        public CarritoController(PeliculasDbContext context)
        {
            this.context = context;
        }

        [Route("{idUsuario}")]
        [HttpGet]
        public ActionResult Get(int idUsuario)
        {
            try
            {
                return Ok(context.Carrito.Where(f => f.IdUsuario == idUsuario).Select(p => p.Pelicula));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("[action]")]
        [HttpPost]
        public ActionResult Comprar([FromBody] List<Carrito> carrito)
        {
            try
            {
                foreach(var item in carrito)
                {
                    context.Carrito.Add(item);
                    context.SaveChanges();
                }

                return Ok(carrito);
                
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
