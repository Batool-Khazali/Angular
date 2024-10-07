using System;
using System.Collections.Generic;

namespace Angular.Server.Models;

public partial class CartItem
{
    public int CartItemId { get; set; }

    public int? CartId { get; set; }

    public int? ProductId { get; set; }

    public int Quantity { get; set; }

    public int? UserId { get; set; }

    public virtual Cart? Cart { get; set; }

    public virtual Product? Product { get; set; }

    public virtual UsersWithHash? User { get; set; }
}
