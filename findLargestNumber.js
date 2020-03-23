// Define a functions that find the largest number in array of numbers

const itemsArray = [54, 89, 45, 26, 10, 458, 639, 1002]; // <= Here is our array

const getLargestNumber = items => {
    // First define our variable called largest that will store our largest number with a JS method
    let largest = -Number.MAX_VALUE;

    // Then go through our array
    items.forEach(item => {
        if (item > largest) { // <= If our current item is bigger than our largest number
            largest = item; // <= Store our item into a largest variable
        }
    });
    return console.log(largest);
}

getLargestNumber(itemsArray);