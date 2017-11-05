using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using giftShit.Models;

//Pra usar caso o SQLite não funcione daqui

namespace giftShit.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController2 : Controller
    {
        private List<Product> productData = new List<Product>();

        [HttpGet("[action]")]
        public List<Product> get()
        {
            return productData;
        }

        [HttpPost()]
        public async Task<IActionResult> Post(Product value) // CREATE
        {
            if (value != null)
            {
                productData.Add(value);
                return new NoContentResult();
            }
            else
            {
                return BadRequest();
            }

        }

    }
}
