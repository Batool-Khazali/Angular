using Angular.Server.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Angular.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class ServicesController : ControllerBase
    {
        private readonly MyDbContext _db;

        public ServicesController( MyDbContext db)
        {
            _db = db;
        }

        [HttpGet("getAllServices")]
        public IActionResult getAllServices()
        {
            var services = _db.Services.ToList();

            if (services == null) return NotFound();

            return Ok(services);
        }












    }
}
