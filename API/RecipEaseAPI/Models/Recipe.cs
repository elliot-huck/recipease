﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RecipEaseAPI.Models
{
	public class Recipe
	{
		[Key]
		public int RecipeId { get; set; }

		[Required]
		public string Name { get; set; }

		public string Source { get; set; }

		public bool IsActive { get; set; }

		public bool IsFavorite { get; set; }

		public string UserId { get; set; }

		public int CategoryId { get; set; }

		[JsonIgnore]
		public User User { get; set; }
		
		[JsonIgnore]
		public Category Category { get; set; }

		//[JsonRequired]
		public virtual ICollection<Ingredient> Ingredients { get; set; }
		
		/*
		[Required]
		[JsonIgnore]
		public int ArtistId { get; set; }
		public Artist Artist { get; set; } 
		*/


	}
}
