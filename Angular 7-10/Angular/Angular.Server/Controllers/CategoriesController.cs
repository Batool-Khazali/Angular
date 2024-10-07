using Angular.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace Angular.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly MyDbContext _db;

        public CategoriesController(MyDbContext db)
        {
            _db = db;
        }



        [HttpGet("getAllCategories")]
        public IActionResult getAllCategories()
        {
            var categories = _db.Categories.ToList();

            if (categories.IsNullOrEmpty()) return NotFound();  

            return Ok(categories);
        }



    }
}
