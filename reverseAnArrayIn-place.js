const reverse = arrayOfChars => {

    // Reverse the input array of characters in place
    let leftIndex = 0;
    let rightIndex = arrayOfChars.length - 1;

    while (leftIndex < rightIndex) {
        const temp = arrayOfChars[leftIndex];
        arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
        arrayOfChars[rightIndex] = temp;

        leftIndex--;
        rightIndex++
    }

    console.log(arrayOfChars)
}

const array = ['E', 'S', 'T', 'E', 'B', 'A', 'N'];

reverse(array);