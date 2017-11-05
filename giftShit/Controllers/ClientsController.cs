using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using giftShit;
using giftShit.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using giftShit.Data;

//Para usar caso o SQLite funcione daqui

namespace giftShit.Controllers
{
    [Route("api/[controller]")]
    public class ClientsController : Controller
    {

       public ClientsController(giftShitContext dbContext)
        {
            DbContext = dbContext;
        }

        public giftShitContext DbContext { get; }

        // GET api/values
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await DbContext.Client.ToListAsync());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(Guid id) //read
        {
            return Ok(await DbContext.Client.SingleOrDefaultAsync(m => m.Id == id));

        }

        [HttpPost()]
        public async Task<IActionResult> Post([FromBody]Client value) // CREATE
        {
            if (value != null)
            {
                await DbContext.Client.AddAsync(value);
                await DbContext.SaveChangesAsync();
                return new NoContentResult();
            }
            else
            {
                return BadRequest();
            }

        }


        [HttpPut("{id}")]
        public async Task<IActionResult> Put(Guid id, [FromBody]Client value) // UPDATE
        {
            if (value == null || value.Id != id)
            {
                return BadRequest();
            }

            var updateValue = await DbContext.Client.FirstOrDefaultAsync(t => t.Id == id);

            if (updateValue == null)
            {
                return NotFound();
            }

            updateValue.Name = value.Name;
            updateValue.Address = value.Address;
            updateValue.Birthday = value.Birthday;

            DbContext.Client.Update(updateValue);
            await DbContext.SaveChangesAsync();
            return new NoContentResult();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var client = await DbContext.Client.SingleOrDefaultAsync(m => m.Id == id);
            DbContext.Client.Remove(client);
            await DbContext.SaveChangesAsync();
            return NoContent();
        }



    }
}