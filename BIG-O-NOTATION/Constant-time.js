// Let's start with an example 
const Boxes = [0, 1, 2, 3, 4, 5];

const logTwoFirstBoxes = (boxes) => {
    console.log(boxes[0]) // Number of operation is 1 i.e O(1)
    console.log(boxes[1]) // Number of operation is 1 i.e O(1)
}

logTwoFirstBoxes(Boxes); // Number of operation is 2 i.e O(2)

// This is called O(1) Constant-time 
// Here we don't write n, we write constants, because constant-time depends on number of operation not on number of inputs. 


