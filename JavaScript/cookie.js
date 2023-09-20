// A function to get a cookie

// Taking a cookie name as parameter instead
function getCookie(cname) {
	// A variable name with the text to search for (cname + "=")
	let name = cname + "=";
	// Decode the cookie string to handle special characters like "$"
	let decodedCookie = decodeURLComponent(document.cookie);
	// Splitting the document.cookie on semicolons into an array 
	let ca = decodedCookie.split(';');
	// loop through the array and read out each value of c
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		// if the cookie is found 
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	// if the cookie is not found
	return "";
}