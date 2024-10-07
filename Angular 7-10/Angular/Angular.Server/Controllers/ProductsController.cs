using Angular.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

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

        [HttpGet("getAllProducts/{catId}")]
        public IActionResult getProByCat(int catId)
        {
            if (catId <= 0) return BadRequest();

            var pro = _db.Products.Where(a => a.CategoryId == catId).ToList();

            if (pro.IsNullOrEmpty()) return NotFound();

            return Ok(pro);
        }








    }
}
