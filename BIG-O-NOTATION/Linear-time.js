// Let's start with an example
const Alcazar = ["Alcazar"];

const findAlcazar = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Alcazar") {
      console.log("Found Alcazar!");
    }
  }
};

findAlcazar(Alcazar);

// O(n) --> Linear Time.
// Here n is number of inputs.
// If we took alcazar the number of input is 1 i.e O(1).
// Always remember that loops are linear time 
