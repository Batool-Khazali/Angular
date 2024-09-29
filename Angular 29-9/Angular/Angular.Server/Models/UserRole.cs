using System;
using System.Collections.Generic;

namespace Angular.Server.Models;

public partial class UserRole
{
    public int UserId { get; set; }

    public string Role { get; set; } = null!;

    public virtual UsersWithHash User { get; set; } = null!;
}
