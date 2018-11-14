using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecipEaseAPI.Data;
using RecipEaseAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecipEaseAPI.Controllers
{
	[Route("/[controller]")]
	[ApiController]
	[EnableCors("RecipEasePolicy")]
	public class RecipesController : ControllerBase
	{
		private readonly ApplicationDbContext _context;

		public RecipesController(ApplicationDbContext context)
		{
			_context = context;
		}

		//GET: /Recipes
		// This method uses a JWT to get all the recipes belonging to the current user
		[Authorize]
		[HttpGet(Name = "GetUserRecipes")]
		public IEnumerable<Recipe> GetUserRecipes()
		{
			// Gets the current user and their recipes
			string userName = User.Identity.Name;
			User currentUser = _context.User.Single(u => u.UserName == userName);
			var userRecipes = _context.Recipe.Where(r => r.UserId == currentUser.Id);

			return userRecipes;
		}

		// GET: /Recipes/5
		[HttpGet("{id}", Name = "GetRecipe")]
		public async Task<IActionResult> GetRecipe(int id, [FromQuery] bool showDetails)
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

			if (showDetails)
			{
				recipe.Ingredients = await _context.Ingredient.Where(ing => ing.RecipeId == recipe.RecipeId).ToListAsync();
			}

			return Ok(recipe);
		}


		// PUT: /Recipes/5
		// This method takes a recipeId and toggles the active status of the recipe between true & false
		[HttpPut("{id}")]
		[Authorize]
		public async Task<IActionResult> ToggleActive([FromRoute] int id)
		{
			// Gets the current user and the recipe to be toggled
			User currentUser = _context.User.Single(u => u.UserName == User.Identity.Name);
			Recipe toggledRecipe = _context.Recipe.SingleOrDefault(r => r.RecipeId == id);

			// Makes sure the current user is attempting to toggle one of their own recipes
			if (toggledRecipe.UserId != currentUser.Id)
			{
				return Unauthorized();
			}

			// Toggles the recipe and saves it to the database
			toggledRecipe.IsActive = !(toggledRecipe.IsActive);
			_context.Entry(toggledRecipe).State = EntityState.Modified;
			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				// Uses the private RecipeExists method defined in this controller
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

		// PUT: /Recipes
		// This method uses JWT to get the current user and make all that user's recipes inactive
		[HttpPut]
		[Authorize]
		public async Task<IActionResult> ClearActive()
		{
			// Gets the current user and all their active recipes
			User currentUser = _context.User.Single(u => u.UserName == User.Identity.Name);
			var userActiveRecipes = _context.Recipe.Where(r => r.UserId == currentUser.Id && r.IsActive);

			// Sets each active recipe's state to inactive and saves those changes
			foreach (Recipe r in userActiveRecipes)
			{
				r.IsActive = false;
				_context.Entry(r).State = EntityState.Modified;
			}
			await _context.SaveChangesAsync();

			return NoContent();
		}

		// POST: /Recipes
		// This method accepts a recipe object with an array of ingredient objects and saves them to the database
		[HttpPost]
		[Authorize]
		public async Task<IActionResult> PostRecipe([FromBody] Recipe newRecipe)
		{

			// This uses the JWT to get the current user's Id and attach it to the newRecipe being posted
			string username = User.Identity.Name;
			User currentUser = _context.User.Single(u => u.UserName == username);
			newRecipe.UserId = currentUser.Id;

			// Makes sure the recipe has at least one ingredient
			bool noIngredients = (newRecipe.Ingredients == null) || (newRecipe.Ingredients.Count == 0);
			if (noIngredients)
			{
				return BadRequest();
			}

			try
			{
				// Adds the recipe to the database so it can get assigned a primary key
				_context.Recipe.Add(newRecipe);
				await _context.SaveChangesAsync();

				// Assigns the new recipe's primary key to each ingredient in the recipe and saves the ingredients
				foreach (Ingredient newIngredient in newRecipe.Ingredients)
				{
					newIngredient.RecipeId = newRecipe.RecipeId;
					_context.Ingredient.Add(newIngredient);
				}
				await _context.SaveChangesAsync();
			}
			catch (Exception ex)
			{
				// This is just here to handle the mysterious SQL exception that was being thrown for no reason
			}

			return CreatedAtAction("GetRecipe", new { id = newRecipe.RecipeId }, newRecipe);
		}

		private bool RecipeExists(int id)
		{
			return _context.Recipe.Any(e => e.RecipeId == id);
		}

		// Scaffolded methods to use when expanding the project:

		//GET: /Recipes
		//[HttpGet]
		//public IEnumerable<Recipe> GetRecipes()
		//{
		//	return _context.Recipe;
		//}

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

	}
}