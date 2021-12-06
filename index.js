function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i <= array.length; i++) {
    for (let j = 0; j <= array.length; j++) {
      if (i != j) {
        if (array[i] + array[j] === target) {
          return true
        }
      }
    }
  }
  return false
}


  //   for(let i = 0; i <= array.length; i++){
  //     for(let j = i + 1; j <= array.length; j++){
  //       const answer = array[i] + array[j]
  //       return answer === target
  //     }
  //   }

  [1, 2, 3, 4, 5, 6, 7, 8, 9]
  /* 
    Write the Big O time complexity of your function here

    runtime: O(n^2)
    space: n
  */

  /* 
    Add your pseudocode here
    make a function that accepts two arguments: an integer and an array of integers
    the function returns true if any of the two numbers in the integer add up to equal the second argument
  
  add first number array[0] in array to second number array[1], check if it equals second argument. 
  If so, return true
  If not, second number ++
    repeat until second number is > array.length
      When second number is > array.length, first number ++
        add array[1] to array[0], 
        if it equals second argument, return true
        if not, second number ++
  
  */

  /*
    Add written explanation of your solution here
  */

  // You can run `node index.js` to view these console logs
  if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", hasTargetSum([1, 2, 5], 4));
  }

  module.exports = hasTargetSum;
