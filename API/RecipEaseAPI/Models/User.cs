using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace RecipEaseAPI.Models
{
	public class User : IdentityUser
	{
		[Required]
		public string FirstName { get; set; }

		//[Required]
		//public string UserName { get; set; }
	}
}