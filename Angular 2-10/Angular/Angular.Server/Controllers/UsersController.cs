using Angular.Server.DTO;
using Angular.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Angular.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly MyDbContext _db;

        public UsersController(MyDbContext db)
        {
            _db = db;
        }


        [HttpPost("regustration")]
        public IActionResult registration([FromForm] registerDTO r)
        {
            var user = _db.UsersWithHashes.Where(a => a.Email == r.Email).FirstOrDefault();

            if (user != null) return BadRequest("user already exists");

            var newUser = new UsersWithHash
            {
                Email = r.Email,
                Password = r.Password,
                Username = r.Username,
            };

            _db.UsersWithHashes.Add(newUser);
            _db.SaveChanges();
            return Ok(newUser);

        }



        [HttpPost("login")]
        public IActionResult login([FromForm] loginDTO l)
        {
            var user = _db.UsersWithHashes.Where(a => a.Email == l.Email).FirstOrDefault();

            if (user == null) return BadRequest("user doesn't exist. please register first");

            if (user.Password != l.Password) return BadRequest("password do not match");

            return Ok(user.UserId);


        }








    }
}
