// This module creates an object to represent the API and its endpoints by hitting the root URL of a RESTful API to receive information on available endpoints

const serverUrl = "http://localhost:5000/"

class API {
	constructor(rootUrl) {
		fetch(rootUrl)
			.then(e => e.json())
			.then((endpoints) => {
				for (const prop in endpoints) {
					this[prop] = rootUrl + endpoints[prop];
				}
			});
	}
}

export default new API(serverUrl);

