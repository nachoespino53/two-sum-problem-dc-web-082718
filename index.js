// Given an array of numbers, return every pair of numbers that can be added up to a given value


// Given an array.
// Given a target.
// Return every pair: Returning an array of arrays makes sense to me.
// Assumptions: I will always been given an array of integers, and an array with more than one element.
// Assumptions: I will always been given a number for the target value.

const twoSums = (anArray, target) => {
    let pairArray = [];

    // Loop through array. Initially two for loops comes to mind.
    // Will be comparing the pairs to the target
    // Using push() to add that pair to the array
    // Then refactor if possible

    for (let i = 0; i < anArray.length; ++i ) {
        for ( let j = i + 1; j < anArray.length; ++j ) {
            // I could use a ternery, but that is bad practice
            // For readability, I will declare a constant, probably not best for performance
            let sum =  anArray[i] + anArray[j];
            if (anArray[i] + anArray[j] === target) {
                pairArray.push([anArray[i], anArray[j]])
            };
        };
    };
    return pairArray;
}