using System;

namespace Server.Models
{
    public class Product
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Name { get; set; } = "";
        public string Description { get; set; } = "";
        public float Price {get; set; } = 0;
        public string Image { get; set; }=" ";

       

    }
}