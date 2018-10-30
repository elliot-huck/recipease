using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using RecipEaseAPI.Models;

namespace RecipEaseAPI.Data
{
	public class ApplicationDbContext : IdentityDbContext
	{
		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

		public DbSet<User> User { get; set; }
		public DbSet<Recipe> Recipe { get; set; }
		public DbSet<Ingredient> Ingredient { get; set; }
		public DbSet<Category> Category { get; set; }
		public DbSet<Note> Note { get; set; }

	}
}