
/**
 * Get HTML asynchronously
 * @param  {String}   url      The URL to get HTML from
 * @param  {Function} callback A callback funtion. Pass in "response" variable to use returned HTML.
 */
const getHTML = (url, callback) => {

	// Feature detection
	if (!window.XMLHttpRequest) return;

	// Create new request
	var xhr = new XMLHttpRequest();

	// Setup callback
	xhr.onload = function () {
		if (callback && typeof (callback) === 'function') {
			callback(this.responseXML);
		}
	}

	// Get the HTML
	xhr.open('GET', url);
	xhr.responseType = 'document';
	xhr.send();
}

const RecipeFetcher = Object.create(null, {

	// Recipe example with strong tags https://pinchofyum.com/feel-good-zucchini-muffins
	// Recipe example without strong tags https://pinchofyum.com/korean-bbq-burrito
	getPinchOfYumRecipe: {
		value: (recipeUrl) => {
			return new Promise((resolve, reject) => {
				getHTML(recipeUrl, (response) => {
					const responseHTML = response.documentElement;
	
					const newRecipe = {
						name: "",
						source: recipeUrl,
						isActive: false,
						isFavorite: false,
						categoryId: 7,
						ingredients: [
							{
								// food: "string",
								// quantity: "string"
							}
						]
					}

					const recipeName = responseHTML.querySelector('header.tasty-recipes-entry-header > h2').textContent;
					newRecipe.name = recipeName;

					const ingredientNodeList = responseHTML.querySelectorAll('.tasty-recipes-ingredients > ul > li');
					ingredientNodeList.forEach((ingred, i) => {
						const childText = Array.prototype.reduce.call(ingred.childNodes, (returnString, child) => {
							const isTextNode = child.nodeType === 3;
							return returnString + ( isTextNode ? child.textContent : '')
					}, '');
						console.log();
						newRecipe.ingredients[i] = {
							food: `${ingred.querySelector('strong') ? ingred.querySelector('strong').textContent : childText}`,
							quantity: `${ingred.querySelector('span') ? ingred.querySelector('span').textContent : 'some'}`
						}
					});
					resolve(newRecipe);
				});
			})
		}
	}
});

export default RecipeFetcher;