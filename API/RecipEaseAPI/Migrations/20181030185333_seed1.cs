using Microsoft.EntityFrameworkCore.Migrations;

namespace RecipEaseAPI.Migrations
{
    public partial class seed1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Discriminator", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName", "FirstName" },
                values: new object[,]
                {
                    { "b8aefdfe-6b8d-4dcf-adf1-b490353daedd", 0, "6775822c-5109-4df4-8662-6e6afe594fea", "User", "test@test.com", true, false, null, "TEST@TEST.COM", "TESTUSER", "AQAAAAEAACcQAAAAEH6sg/hFcAZ80yuhIsjMND3RneV4k4WxLAA6sIV1Og5hPLCLV9G0LufdvRzioFHtsg==", null, false, "f399e8da-17a1-4d70-998a-32f24e420f60", false, "testUser", "Test" },
                    { "2a1c1185-c926-4a93-9777-ec859a34e474", 0, "a7abc265-8adc-4512-826b-132cf7271ef4", "User", "test2@test.com", true, false, null, "TEST2@TEST.COM", "TESTUSER2", "AQAAAAEAACcQAAAAEFbWRCru+Vjbz9WvSxFYsMxyIaWn2AiPsPlBm3YOFUBp8AVVqsZKkzS0NpdxGPCJrw==", null, false, "b2ab8b0b-3d6a-4b94-9301-2dac8eb6684a", false, "testUser2", "Test2" }
                });

            migrationBuilder.InsertData(
                table: "Category",
                columns: new[] { "CategoryId", "Name" },
                values: new object[,]
                {
                    { 1, "Breakfast" },
                    { 2, "Lunch" },
                    { 3, "Dinner" },
                    { 4, "Dessert" },
                    { 5, "Snack" },
                    { 6, "Drink" },
                    { 7, "Other" }
                });

            migrationBuilder.InsertData(
                table: "Recipe",
                columns: new[] { "RecipeId", "CategoryId", "IsActive", "IsFavorite", "Name", "Source", "UserId" },
                values: new object[] { 1, 2, false, false, "Peanut Butter and Jelly Sandwich", "Cookbook", "b8aefdfe-6b8d-4dcf-adf1-b490353daedd" });

            migrationBuilder.InsertData(
                table: "Recipe",
                columns: new[] { "RecipeId", "CategoryId", "IsActive", "IsFavorite", "Name", "Source", "UserId" },
                values: new object[] { 2, 1, false, false, "Cereal", "Website", "b8aefdfe-6b8d-4dcf-adf1-b490353daedd" });

            migrationBuilder.InsertData(
                table: "Recipe",
                columns: new[] { "RecipeId", "CategoryId", "IsActive", "IsFavorite", "Name", "Source", "UserId" },
                values: new object[] { 3, 3, false, false, "Frozen Pizza", "", "2a1c1185-c926-4a93-9777-ec859a34e474" });

            migrationBuilder.InsertData(
                table: "Ingredient",
                columns: new[] { "IngredientId", "Food", "Quantity", "RecipeId" },
                values: new object[,]
                {
                    { 1, "peanut butter", "2 Tbs", 1 },
                    { 2, "jelly", "2 Tbs", 1 },
                    { 3, "bread", "2 slices", 1 },
                    { 4, "cereal", "1 bowl", 2 },
                    { 5, "milk", "Some", 2 },
                    { 6, "frozen pizza", "1", 3 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Category",
                keyColumn: "CategoryId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Category",
                keyColumn: "CategoryId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Category",
                keyColumn: "CategoryId",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Category",
                keyColumn: "CategoryId",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Ingredient",
                keyColumn: "IngredientId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Ingredient",
                keyColumn: "IngredientId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Ingredient",
                keyColumn: "IngredientId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Ingredient",
                keyColumn: "IngredientId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Ingredient",
                keyColumn: "IngredientId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Ingredient",
                keyColumn: "IngredientId",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Recipe",
                keyColumn: "RecipeId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Recipe",
                keyColumn: "RecipeId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Recipe",
                keyColumn: "RecipeId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumns: new[] { "Id", "ConcurrencyStamp" },
                keyValues: new object[] { "2a1c1185-c926-4a93-9777-ec859a34e474", "a7abc265-8adc-4512-826b-132cf7271ef4" });

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumns: new[] { "Id", "ConcurrencyStamp" },
                keyValues: new object[] { "b8aefdfe-6b8d-4dcf-adf1-b490353daedd", "6775822c-5109-4df4-8662-6e6afe594fea" });

            migrationBuilder.DeleteData(
                table: "Category",
                keyColumn: "CategoryId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Category",
                keyColumn: "CategoryId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Category",
                keyColumn: "CategoryId",
                keyValue: 3);
        }
    }
}
