using System;
using System.Collections.Generic;

namespace giftShit.Models
{
    public class Client
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Name { get; set; } = "";
        public string Address {get; set; } = "";
        public DateTime Birthday {get; set; }= DateTime.Now;

       public List<Product> wishList = new List<Product>();

    }
}