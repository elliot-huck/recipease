using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RecipEaseAPI.Models
{
	public class NewUser
	{

		public string FirstName { get; set; }

		[Required]
		public string Username { get; set; }

		[Required]
		public string Password { get; set; }

		public string Email { get; set; }

	}
}
