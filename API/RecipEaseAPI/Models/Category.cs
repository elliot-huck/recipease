using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RecipEaseAPI.Models
{
	public class Category
	{
		[Key]
		public int CategoryId { get; set; }

		[Required]
		public string Name { get; set; }

		public virtual ICollection<Recipe> Recipes { get; set; }

	}
}
