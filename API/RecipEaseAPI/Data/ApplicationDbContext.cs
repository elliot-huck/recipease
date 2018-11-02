using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;
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




		User user2 = new User
		{
			FirstName = "Test",
			UserName = "testUser",
			NormalizedUserName = "testUser",
			Email = "test@test.com",
			NormalizedEmail = "TEST@TEST.COM",
			EmailConfirmed = true,
			LockoutEnabled = false,
			SecurityStamp = Guid.NewGuid().ToString("D")
		};
		/*
		PasswordHasher<User> passwordHash2 = new PasswordHasher<User>();
		user2.PasswordHash = passwordHash2.HashPassword(user2, "Test1!");
        modelBuilder.Entity<User>().HasData(user2); */

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			base.OnModelCreating(modelBuilder);
			// Customize the ASP.NET Identity model and override the defaults if needed.
			// For example, you can rename the ASP.NET Identity table names and more.
			// Add your customizations after calling base.OnModelCreating(builder);
			


			User user1 = new User
			{
				FirstName = "Test",
				UserName = "testUser",
				NormalizedUserName = "TESTUSER",
				Email = "test@test.com",
				NormalizedEmail = "TEST@TEST.COM",
				EmailConfirmed = true,
				LockoutEnabled = false,
				SecurityStamp = Guid.NewGuid().ToString("D")
			};
			var passwordHash1 = new PasswordHasher<User>();
			user1.PasswordHash = passwordHash1.HashPassword(user1, "Test1!");
			modelBuilder.Entity<User>().HasData(user1);

			User user2 = new User
			{
				FirstName = "Test2",
				UserName = "testUser2",
				NormalizedUserName = "TESTUSER2",
				Email = "test2@test.com",
				NormalizedEmail = "TEST2@TEST.COM",
				EmailConfirmed = true,
				LockoutEnabled = false,
				SecurityStamp = Guid.NewGuid().ToString("D")
			};
			var passwordHash2 = new PasswordHasher<User>();
			user2.PasswordHash = passwordHash2.HashPassword(user2, "Test2@");
			modelBuilder.Entity<User>().HasData(user2);

			modelBuilder.Entity<Category>().HasData(
				new Category()
				{
					CategoryId = 1,
					Name = "Breakfast"
				},
				new Category()
				{
					CategoryId = 2,
					Name = "Lunch"
				},
				new Category()
				{
					CategoryId = 3,
					Name = "Dinner"
				},
				new Category()
				{
					CategoryId = 4,
					Name = "Dessert"
				},
				new Category()
				{
					CategoryId = 5,
					Name = "Snack"
				},
				new Category()
				{
					CategoryId = 6,
					Name = "Drink"
				},
				new Category()
				{
					CategoryId = 7,
					Name = "Other"
				}
			);

			modelBuilder.Entity<Recipe>().HasData(
				new Recipe()
				{
					RecipeId = 1,
					Name = "Peanut Butter and Jelly Sandwich",
					Source = "Cookbook",
					IsActive = false,
					IsFavorite = false,
					UserId = user1.Id,
					CategoryId = 2
				},
				new Recipe()
				{
					RecipeId = 2,
					Name = "Cereal",
					Source = "Website",
					IsActive = false,
					IsFavorite = false,
					UserId = user1.Id,
					CategoryId = 1
				},
				new Recipe()
				{
					RecipeId = 3,
					Name = "Frozen Pizza",
					Source = "",
					IsActive = false,
					IsFavorite = false,
					UserId = user2.Id,
					CategoryId = 3
				}
			);

			modelBuilder.Entity<Ingredient>().HasData(
				new Ingredient()
				{
					IngredientId = 1,
					Quantity = "2 Tbs",
					Food = "peanut butter",
					RecipeId = 1
				},
				new Ingredient()
				{
					IngredientId = 2,
					Quantity = "2 Tbs",
					Food = "jelly",
					RecipeId = 1
				},
				new Ingredient()
				{
					IngredientId = 3,
					Quantity = "2 slices",
					Food = "bread",
					RecipeId = 1
				},
				new Ingredient()
				{
					IngredientId = 4,
					Quantity = "1 bowl",
					Food = "cereal",
					RecipeId = 2
				},
				new Ingredient()
				{
					IngredientId = 5,
					Quantity = "Some",
					Food = "milk",
					RecipeId = 2
				},
				new Ingredient()
				{
					IngredientId = 6,
					Quantity = "1",
					Food = "frozen pizza",
					RecipeId = 3
				}
			);
			
		}
	}
}