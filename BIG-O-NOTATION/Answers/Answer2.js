// Answer2. 
function printAllNumbersThenAllPairSums(numbers) {
    console.log("these are the numbers:");
    numbers.forEach(function (number) {
      console.log(number);
    }); //Here you can see we have only one loop that means it is --> O(n)


    console.log("and these are their sums:");
    numbers.forEach(function (firstNumber) {
      numbers.forEach(function (secondNumber) {
        console.log(firstNumber + secondNumber);
      });
    });
  } //But here we have two nested loops and as we know that nested loops refer to --> O(n^2)

  printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);
//   i.e --> O(n + n^2) 
// But according to rule 4, we have to drop the non dominant one i.e --> n
// So this is Quadratic-time notation i.e --> O(n^2) 
