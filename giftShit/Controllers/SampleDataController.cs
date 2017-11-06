using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace giftShit.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
 
        [HttpGet("[action]")]
        public IEnumerable<Product> ProductsData()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Product
            {
                productName = null,
                productDescription =null,
                price = 0
            });
        }

        public class Product
        {
            public string productName { get; set; }
            public string productDescription { get; set; }
            public float price { get; set; }
        }
    }
}
