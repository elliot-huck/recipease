﻿using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.AzureADB2C.UI;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using RecipEaseAPI.Data;
using RecipEaseAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RecipEaseAPI
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddDbContext<ApplicationDbContext>(options =>
				   options.UseSqlServer(
					   Configuration.GetConnectionString("DefaultConnection")));

			services.AddAuthentication(AzureADB2CDefaults.BearerAuthenticationScheme)
				.AddAzureADB2CBearer(options => Configuration.Bind("AzureAdB2C", options));

			services.AddDefaultIdentity<User>()
				.AddRoles<IdentityRole>()
				.AddEntityFrameworkStores<ApplicationDbContext>();

			services.AddMvc()
				.SetCompatibilityVersion(CompatibilityVersion.Version_2_1)
				.AddJsonOptions(x =>
				   x.SerializerSettings.ReferenceLoopHandling =
				   Newtonsoft.Json.ReferenceLoopHandling.Ignore);

			services.AddCors(o => o.AddPolicy("RecipEasePolicy", builder =>
			{
				builder.AllowAnyOrigin()
					.AllowAnyMethod()
					.AllowAnyHeader();
			}));

			// Set up JWT authentication service
			services.AddAuthentication(options =>
				{
					options.DefaultAuthenticateScheme = "Jwt";
					options.DefaultChallengeScheme = "Jwt";
				}).AddJwtBearer("Jwt", options =>
				{
					options.TokenValidationParameters = new TokenValidationParameters
					{
						ValidateAudience = false,
						ValidateIssuer = false,
						ValidateIssuerSigningKey = true,
						IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("7A735D7B-1A19-4D8A-9CFA-99F55483013F")),
						ValidateLifetime = true, //validate the expiration and not before values in the token
						ClockSkew = TimeSpan.FromMinutes(5) //5 minute tolerance for the expiration date
					};
				});

		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}
			else
			{
				app.UseHsts();
			}
			app.UseCors();
			app.UseHttpsRedirection();
			app.UseAuthentication();
			app.UseMvc();
		}
	}
}
