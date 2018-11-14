using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecipEaseAPI.Data;
using RecipEaseAPI.Models;

namespace RecipEaseAPI.Controllers
{
    [Route("/[controller]")]
    [ApiController]
	[EnableCors("RecipEasePolicy")]
	public class IngredientsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public IngredientsController(ApplicationDbContext context)
        {
            _context = context;
        }

		[Authorize]
		[HttpGet(Name = "GetShoppingList")]
		public IEnumerable<Ingredient> GetShoppingList()
		{
			// Gets the current user and all their active recipes
			User currentUser = _context.User.Single(u => u.UserName == User.Identity.Name);
			var userActiveRecipes = _context.Recipe.Where(r => r.UserId == currentUser.Id && r.IsActive);

			// Creates a shopping list with all the ingredients from the active recipes and then alphabetizes it
			var shoppingList = new List<Ingredient>();
			foreach (Recipe r in userActiveRecipes)
			{
				var recipeIngredients = _context.Ingredient.Where(ing => ing.RecipeId == r.RecipeId);
				shoppingList = recipeIngredients.Union(shoppingList).ToList();
			}
			var abcShoppingList = shoppingList.OrderBy(item => item.Food, new CaseInsensitiveComparer());

			return abcShoppingList;
		}

		

		private bool IngredientExists(int id)
		{
			return _context.Ingredient.Any(e => e.IngredientId == id);
		}

		private class CaseInsensitiveComparer : IComparer<string>
		{
			public int Compare(string x, string y)
			{
				return string.Compare(x, y, StringComparison.OrdinalIgnoreCase);
			}
		}



		// Scaffolded methods to use when expanding the project:

		//GET: /Ingredients
		//[HttpGet]
		//[Authorize]
		//public List<Ingredient> GetIngredients()
		//{

		//	var allIngredients = _context.Ingredient.ToList();
		//	return allIngredients;
		//}

		// GET: /Ingredients?recipeList=1,2,4
		// This method accepts a string of integers from the query and returns a case-insensitive, alphabetized shopping list of ingredients 
		/*
		[HttpGet]
		[Authorize]
		public List<Ingredient> GetIngredients([FromQuery] string recipeList)
		{
			List<int> recipeIds = recipeList.Split(',').Select(int.Parse).ToList();
			List<Ingredient> shoppingList = new List<Ingredient>();
			foreach (int i in recipeIds)
			{
				var recipeIngredients = _context.Ingredient.Where(ing => ing.RecipeId == i).ToList();
				shoppingList = recipeIngredients.Union(shoppingList).ToList();
			}

			List<Ingredient> abcShoppingList = shoppingList.OrderBy(item => item.Food, new CaseInsensitiveComparer()).ToList();
			return abcShoppingList;
		}
		*/

		// GET: /Ingredients/5
		/*
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
		*/

		// PUT: /Ingredients/5
		/*
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
		*/

		// POST: /Ingredients
		/*
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
		*/

		// DELETE: /Ingredients/5
		/*
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
		*/



		// GET: /Ingredients/1
		// This method accepts a string of integers from the query and returns a case-insensitive, alphabetized shopping list of ingredients 
		/*
		[HttpGet(Name = "GetRecipeIngredients")]
		[Authorize]
		public List<Ingredient> GetRecipeIngredients([FromRoute] int recipeId)
		{
			var recipeIngredients = _context.Ingredient.Where(ing => ing.RecipeId == recipeId);
			return recipeIngredients.ToList();
		}
		*/

	}
}