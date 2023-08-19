// Answer --> Challenge 1

function firstChallenge(input) {
    let a = 10; // Number of operation is 1 --> O(1)
    a = 50 + 3; // Number of operation is 1 --> O(1)

    for (i = 0; i < input.length; i++) { // As we know that all loops are linear time notation --> O(n)
        anotherFunction(); // O(n) --> it depends on number of input. Function is called until the loop ends.
        let stranger = true; // O(n) --> Also depends on number of inputs.
        a++ // O(n) --> Also depends on number of inputs
    }
    return a; // Number of operation is 1 --> O(1)
}

// Calculation
// O(1 + 1 + 1 + 1 + n + n + n + n)
// O(3 + 4n)

// Answer --> BIG O(n) i.e Linear Time --> Because we don't use constant with n in Big o notation.