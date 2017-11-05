using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server;
using Server.Data;
using Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace GiftShit.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {

        public ProductsController(ServerContext dbContext, IOptions<AppSettings> options)
        {
            DbContext = dbContext;
            AppSettings = options.Value;
        }

        private AppSettings AppSettings { get; }
        public ServerContext DbContext { get; }

        // GET api/values
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await DbContext.Product.ToListAsync());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(Guid id) //read
        {
            return Ok(await DbContext.Product.SingleOrDefaultAsync(m => m.Id == id));

        }
        
        [HttpPost()]
        public async Task<IActionResult> Post([FromBody]Product value) // CREATE
        {
            if (value != null)
            {
                await DbContext.Product.AddAsync(value);
                await DbContext.SaveChangesAsync();
                return new NoContentResult();
            }
            else
            {
                return BadRequest();
            }

        }

        
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(Guid id,[FromBody]Product value) // UPDATE
        {
            if (value == null || value.Id != id)
            {
                return BadRequest();
            }

            var updateValue = await DbContext.Product.FirstOrDefaultAsync(t => t.Id == id);

            if (updateValue == null)
            {
                return NotFound();
            }

            updateValue.Name = value.Name;
            updateValue.Description = value.Description; 
            updateValue.Price = value.Price;          

            DbContext.Product.Update(updateValue);
            await DbContext.SaveChangesAsync();
            return new NoContentResult();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var product = await DbContext.Product.SingleOrDefaultAsync(m => m.Id == id);
            DbContext.Product.Remove(product);
            await DbContext.SaveChangesAsync();
            return NoContent();
        }



    }
}