using Angular.Server.DTO;
using Angular.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Angular.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserSubscriptionController : ControllerBase
    {
        private readonly MyDbContext _db;

        public UserSubscriptionController(MyDbContext db)
        {
            _db = db;
        }


        [HttpPost("addSubscriptionUser")]
        public IActionResult addSubscriptionUser([FromBody] usersubscriptionDTO us)
        {
            var subscription = _db.Subscriptions.Where(a => a.SubscriptionId == us.SubscriptionId).FirstOrDefault();

            var amount = subscription.SubscriptionAmount;

            var startDate = DateTime.Now;

            var endDate = DateTime.Now;

            switch(amount)
            {
                case "7":
                    endDate = startDate.AddDays(7); break;
                case "90":
                    endDate = endDate.AddMonths(3); break;
                case "365":
                    endDate = endDate.AddYears(1); break;
            }


            var newUser = new UserSubscription
            {
                UserId = us.UserId,
                SubscriptionId = us.SubscriptionId,
                SubServiceId = us.SubServiceId,
                StartDate = startDate,
                EndDate = endDate,
            };

            _db.UserSubscriptions.Add(newUser);
            _db.SaveChanges();


            return Ok(newUser);
        }

















    }
}
