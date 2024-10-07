using Angular.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Angular.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly MyDbContext _db;

        public ProductsController(MyDbContext db)
        {
            _db = db;
        }

        [HttpGet("getAllProducts")]
        public IActionResult getAllProducts()
        {
            var pro = _db.Products.ToList();

            return Ok(pro);
        }










    }
}
