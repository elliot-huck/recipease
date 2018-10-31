using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecipEaseAPI.Data;
using RecipEaseAPI.Models;

namespace RecipEaseAPI.Controllers
{
    [Route("/[controller]")]
    [ApiController]
    public class RecipesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RecipesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: /Recipes
        [HttpGet]
        public IEnumerable<Recipe> GetRecipe()
        {
            return _context.Recipe;
        }

        // GET: /Recipes/5
		/*
        [HttpGet("{id}")]
        public async Task<IActionResult> GetRecipe([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var recipe = await _context.Recipe.FindAsync(id);

            if (recipe == null)
            {
                return NotFound();
            }

            return Ok(recipe);
        }
		*/

        // PUT: /Recipes/5
		/*
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecipe([FromRoute] int id, [FromBody] Recipe recipe)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != recipe.RecipeId)
            {
                return BadRequest();
            }

            _context.Entry(recipe).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RecipeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
		*/

		// PUT: /Recipes/5
		/*
		[HttpPut("{id}")]
		public async Task<IActionResult> ToggleActive([FromRoute] int id)
		{
			Recipe toggledRecipe = _context.Recipe.SingleOrDefault(r => r.RecipeId == id);
			toggledRecipe.IsActive = !(toggledRecipe.IsActive);

			_context.Entry(toggledRecipe).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!RecipeExists(id))
				{
					return NotFound();
				}
				else
				{
					throw;
				}
			}

			return NoContent();
		}
		*/


		// POST: /Recipes
		[HttpPost]
        public async Task<IActionResult> PostRecipe([FromBody] Recipe newRecipe)
        {
            if (!ModelState.IsValid)
            {
                return NotFound(ModelState);
            }

            _context.Recipe.Add(newRecipe);
            await _context.SaveChangesAsync();

			foreach (Ingredient newIngredient in newRecipe.Ingredients) 
			{
				newIngredient.RecipeId = newRecipe.RecipeId;
				_context.Ingredient.Add(newIngredient);
			}

			await _context.SaveChangesAsync();

            return CreatedAtAction("GetRecipe", new { id = newRecipe.RecipeId }, newRecipe);
        }

        // DELETE: /Recipes/5
        /*
		[HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecipe([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var recipe = await _context.Recipe.FindAsync(id);
            if (recipe == null)
            {
                return NotFound();
            }

            _context.Recipe.Remove(recipe);
            await _context.SaveChangesAsync();

            return Ok(recipe);
        } 
		*/

        private bool RecipeExists(int id)
        {
            return _context.Recipe.Any(e => e.RecipeId == id);
        }
    }
}