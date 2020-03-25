const binarySearch = (target, nums) => {

    let floorIndex = -1;
    let ceilingIndex = nums.length;

    while (floorIndex + 1 < ceilingIndex) {
        const distance = ceilingIndex - floorIndex;
        const halfDistance = Math.floor(distance / 2);
        const guessIndex = floorIndex + halfDistance

        const guessValue = nums[guessIndex];

        if (guessValue === target) {
            return true;
        }

        if (guessValue > target) {
            ceilingIndex = guessIndex;
        } else {

            floorIndex = guessIndex;
        }
    }

    return false;
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 30, 50];

console.log(binarySearch(3, numbersArray));