import ApiEndpoints from './ApiEndpoints';

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
			}
			);
		}
	}

});

export default ApiMethods;