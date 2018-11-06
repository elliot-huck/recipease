// import ApiEndpoints from './ApiEndpoints';
// I commented out this import and am hardcoding an override to the ApiEndpoints variable because trying to get all the async stuff to happen at the right time is a headache that I don't have time to prioritize right now. Maybe I'll try to figure it out later.

const rootUrl = "http://localhost:5000/";

const ApiEndpoints = {
	tokens: rootUrl + "token/",
	recipes: rootUrl + "recipes/",
	ingredients: rootUrl + "ingredients/",
	categories: rootUrl + "categories/",
	notes: rootUrl + "notes/"
}

// This module imports the ApiEndpoints object and uses it to generate all the necessary methods when calling the Api
const ApiMethods = Object.create(null, {

	attemptLogin: {
		value: (user) => {
			return fetch(`${ApiEndpoints.tokens}?method=login`, {
        method: "POST",
        headers: {
					"Content-Type": "application/json",
					"Accept": "text/plain",
					// 'Access-Control': 'Access-Control-Allow-Origin'
        },
        body: JSON.stringify(user)
			}).then(e => {
				if(e.ok) {
					return e.text();
				} else {
					return e;
				}
			});
		}
	},

	attemptRegister: {
		value: (user) => {
			return fetch(`${ApiEndpoints.tokens}?method=register`, {
        method: "POST",
        headers: {
					"Content-Type": "application/json",
					"Accept": "text/plain",
					// 'Access-Control': 'Access-Control-Allow-Origin'
        },
        body: JSON.stringify(user)
			}).then(e => {
				if(e.ok) {
					return e.text();
				} else {
					return e;
				}
			});
		}
	},

	getUserRecipes: {
		value: () => {
			return fetch(`${ApiEndpoints.recipes}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Accept": "text/plain",
					"Authorization": `Bearer ${sessionStorage.getItem("AuthToken")}`
				}
			}).then(e => e.json())
		}
	},

	addNewRecipe: {
		value: (newRecipe) => {
			return fetch(`${ApiEndpoints.recipes}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Accept": "text/plain",
					"Authorization": `Bearer ${sessionStorage.getItem("AuthToken")}`
				},
				body: JSON.stringify(newRecipe)
			}).then(e => e.json())
		}
	}

});

export default ApiMethods;