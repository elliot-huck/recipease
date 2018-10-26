using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecipEaseAPI.Models
{
	public class Ingredient
	{
		[Key]
		public int IngredientId { get; set; }

		[Required]
		public string Quantity { get; set; }

		[Required]
		public string Food { get; set; }

		public int RecipeId { get; set; }

		public Recipe Recipe { get; set; }
	}
}
