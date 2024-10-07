using Angular.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Angular.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        private readonly MyDbContext _db;

        public ImagesController(MyDbContext db)
        {
            _db = db;
        }


        [HttpGet("getImages/{imageName}")]
        public IActionResult getImage(string imageName)
        {
            var pathImage = Path.Combine(Directory.GetCurrentDirectory(), "images", "img", imageName);

            if(System.IO.File.Exists(pathImage))
            {
                return PhysicalFile(pathImage, "image/*");
            }

            return NotFound();




        }













    }
}
