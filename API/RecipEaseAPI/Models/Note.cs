using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RecipEaseAPI.Models
{
	public class Note
	{
		[Key]
		public int NoteId { get; set; }

		[Required]
		public string Text { get; set; }

		public int RecipeId { get; set; }

		[JsonIgnore]
		public Recipe Recipe { get; set; }

	}
}
