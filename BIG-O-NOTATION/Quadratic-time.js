// Let's start with an example 
// List all pairs or array 
const boxes = ['a', 'b', 'c', 'd']

function ListAllPair (array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
          console.log(array[i], array[j])
        } 
    }
}

ListAllPair(boxes);

// Remember that, if you saw nested loops like we have in this example that means this is Quadratic notation i.e --> O(n^2).
// This one is pretty slow 