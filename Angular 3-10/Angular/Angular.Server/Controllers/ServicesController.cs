using Angular.Server.DTO;
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


        [HttpPost("addService")]
        public async Task<ActionResult> addService([FromForm] AddServiceDTO s)
        {

            var folder = Path.Combine(Directory.GetCurrentDirectory(), "images", "img");

            if (!Directory.Exists(folder)) Directory.CreateDirectory(folder);

            var fileImage = Path.Combine(folder, s.ServiceImage.FileName);

            using (var stream = new FileStream(fileImage , FileMode.Create))
            {
                await s.ServiceImage.CopyToAsync(stream);
            }

            var checkSer = _db.Services.Where(a => a.ServiceName == s.ServiceName).ToList();

            if (checkSer.Any()) return BadRequest("service already exists");

            var service = new Service
            {
                ServiceDescription = s.ServiceDescription,
                ServiceName = s.ServiceName,
                ServiceImage = s.ServiceImage.FileName,
            };

            _db.Services.Add(service);
            _db.SaveChanges();
            return Ok(service);
        }


        [HttpPut("updateServices/{seviceId}")]
        public async Task<IActionResult> updateServices (int seviceId, [FromForm] AddServiceDTO s)
        {
            if (seviceId <= 0) return BadRequest();

            var service = _db.Services.FirstOrDefault(a => a.ServiceId == seviceId);

            var folder = Path.Combine(Directory.GetCurrentDirectory(), "images", "img");

            if (!Directory.Exists(folder)) Directory.CreateDirectory(folder);

            var fileImage = Path.Combine(folder, s.ServiceImage.FileName);

            using (var stream = new FileStream(fileImage, FileMode.Create))
            {
                await s.ServiceImage.CopyToAsync(stream);
            }

            service.ServiceName = s.ServiceName;
            service.ServiceImage = fileImage;
            service.ServiceDescription = s.ServiceDescription;

            _db.Services.Update(service);
            _db.SaveChangesAsync();
            return Ok(service);

        }






    }
}
