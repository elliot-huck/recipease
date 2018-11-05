using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace RecipEaseAPI.Controllers
{
    //[Authorize]
    [Route("/")]
    [ApiController]
	[EnableCors("RecipEasePolicy")]
	public class ValuesController : ControllerBase
    {
        // GET api/values 
        [HttpGet]
        public Dictionary<string, string> Get()
        {
            return new Dictionary<string, string>() {
				{ "tokens", "token" },
				{ "recipes", "recipes" },
				{ "ingredients", "ingredients" },
				{ "categories", "categories" },
				{ "notes", "notes" }
			};
        }

		/*
		// These methods are commented out because I may need them for expanding the project later

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
		*/
    }
}
