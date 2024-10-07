using Angular.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Angular.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscriptionController : ControllerBase
    {
        private readonly MyDbContext _db;

        public SubscriptionController(MyDbContext db)
        {
            _db = db;
        }



        [HttpGet("getSubscription")]
        public IActionResult getSubscription()
        {
            var getAll = _db.Subscriptions.ToList();

            return Ok(getAll);
        }





    }
}
