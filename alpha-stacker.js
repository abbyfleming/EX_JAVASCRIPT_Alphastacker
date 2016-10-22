
// Create an array that contains the letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
  
	var alphaString = "";

	for(i=0; i < alphabet.length; i++) {
		//console.log(typeof(alphabet[i]));

		//modify alphaString += alphabet[i], add to alphaString
		alphaString += alphabet[i];

		//console log each time the loop runs
		console.log(alphaString);

		if(([i] +1) % 3 === 0) {
			alphaString += " ";

		}

	}

		console.log("Entire loop: " + alphaString);
}

// Invoke the function and pass in the array
stackLetters(alphabet)