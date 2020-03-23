// Google Excersice Interview:
// Create a function that find the firstRecurring character with a given string

const firstRecurring = givenString => {

    //If the given string is empty, return  null
    if (givenString === '') {
        return console.log(null);
    }

    stringToArray = givenString.split(''); // <= Convert the string into an array to work with it
    const counter = {}; // <= Create a hash table to save the letters

    // If the array length is 1, return the letter perse
    if (stringToArray.length === 1) {
        return console.log(`there is just one letter: ${stringToArray[0]}`)
    }

    // Here comes the magic
    // First we go through the array 
    for (let i = 0; i <= stringToArray.length - 1; i++) {
        if (stringToArray[i] in counter) {
            // if the letter at [i] exist or in this case repeat, return the letter[i]
            // We just found our first recurring letter 
            return console.log(`The first recurring character is: ${stringToArray[i]}`);
        }
        // If not exist add it into oir Hash Table
        counter[stringToArray[i]] = 1;

    }
}

// The time complexity is O(n) == Linear time
firstRecurring('FCAJHLKOPIJA');