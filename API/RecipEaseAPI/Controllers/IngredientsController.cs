using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecipEaseAPI.Data;
using RecipEaseAPI.Models;

namespace RecipEaseAPI.Controllers
{
    [Route("/[controller]")]
    [ApiController]
    public class IngredientsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public IngredientsController(ApplicationDbContext context)
        {
            _context = context;
        }

		// GET: /Ingredients (doesn't show all ingredients yet)
		// GET: /Ingredints?recipeId=5
		[HttpGet]
		public IEnumerable<Ingredient> GetIngredients([FromQuery] int? recipeId)
		{
			if (recipeId != null)
			{
				var recipeIngredients = _context.Ingredient.Where(i => i.RecipeId == recipeId);
				return recipeIngredients;
			}
			else
			{
				var allIngredients = _context.Ingredient;
				return allIngredients;
			}
		}

		// This method doesn't work, but I'd like to pass an array of recipe ids and have the api spit out all the ingredients, sorted
		//[HttpGet]
		//public IEnumerable<Ingredient> GetIngredients([FromQuery] int[] recipeId)
		//{
		//		var ingredientList = new List<Ingredient>();
		//		foreach (int i in recipeId)
		//		{
		//			var recipeIngredients = _context.Ingredient.Where(ing => ing.RecipeId == i).ToList();
		//			ingredientList = recipeIngredients.Union(ingredientList).ToList();
		//		}
		//		return ingredientList;
		//		//var recipeIngredients = _context.Ingredient.Where(i => i.RecipeId == recipeId);
		//		//return recipeIngredients;
		//}

		// GET: /Ingredients/5
		[HttpGet("{id}")]
        public async Task<IActionResult> GetIngredient([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var ingredient = await _context.Ingredient.FindAsync(id);

            if (ingredient == null)
            {
                return NotFound();
            }

            return Ok(ingredient);
        }

        // PUT: /Ingredients/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIngredient([FromRoute] int id, [FromBody] Ingredient ingredient)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != ingredient.IngredientId)
            {
                return BadRequest();
            }

            _context.Entry(ingredient).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IngredientExists(id))
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

        // POST: /Ingredients
        [HttpPost]
        public async Task<IActionResult> PostIngredient([FromBody] Ingredient ingredient)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Ingredient.Add(ingredient);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIngredient", new { id = ingredient.IngredientId }, ingredient);
        }

        // DELETE: /Ingredients/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteIngredient([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var ingredient = await _context.Ingredient.FindAsync(id);
            if (ingredient == null)
            {
                return NotFound();
            }

            _context.Ingredient.Remove(ingredient);
            await _context.SaveChangesAsync();

            return Ok(ingredient);
        }

        private bool IngredientExists(int id)
        {
            return _context.Ingredient.Any(e => e.IngredientId == id);
        }
    }
}