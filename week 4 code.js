//1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
console.log('\**********\n1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.')
// create a array and assign it a value(numbers)
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log(ages)



//1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array. 
console.log('\**********\n1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.')
//subtract 3 from the last element using the ages.length method
let newage = ages[ages.length-1]-ages[0];
console.log (newage);



//1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
console.log('\**********\n1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).')
//add a new age to the array using the push method 
ages.push(10);
let newages2 = ages[ages.length-1]-ages[0];

console.log (newages2);



//1c. Use a loop to iterate through the array and calculate the average age. 
console.log('\**********\n1c. Use a loop to iterate through the array and calculate the average age. ')
//using a for loop to calculate the average age using ages.length 
let averageAge = 0;

    for (let i = 0; i < ages.length; i++) {
  
    averageAge += ages[i]
    }
console.log (averageAge/ages.length)



// 2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
console.log('\**********\n2.  Create an array called names that contains the following values: Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob')
//create a array 
let  namesArray = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];



// 2a. Use a loop to iterate through the array and calculate the average number of letters per name. 
console.log('\**********\n2a. Use a loop to iterate through the array and calculate the average number of letters per name. ')
//use for loop to determine the average number per name using namesArray.length 
let calculateNames = 0;

    for (let i = 0; i < namesArray.length; i++) {
    calculateNames += namesArray[i].length;
    }
console.log (calculateNames/namesArray.length)



//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
console.log('\**********\n2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.')
//use a for loop connected to namesArray to list all names with spaces using the " " method 
let string  = "";

    for (let i = 0; i < namesArray.length; i++) {
    // calculateNames += namesArray2[i]
    string += namesArray[i] + " "
    }
console.log (string)



//3.  How do you access the last element of any array?
console.log('\**********\n3.  How do you access the last element of any array?')
//using the arry.lenght -1 method 
console.log ("arry[arry.length - 1];")



// 4.How do you access the first element of any array?
console.log('\**********\n4.How do you access the first element of any array?')

console.log("by referring to its index number 0")



//5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
console.log('\**********\n5.Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.')
//create arrary namesLength use a loop to add length namesArray.length method to add length
let nameLengths = [];
    for (let i = 0; i < namesArray.length; i++) {
    nameLengths[i] = namesArray[i].length 
//nameLengths.push(namesArray[i].length )
    }
console.log (nameLengths)



//6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
console.log('\**********\n6.Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.')
// let name.lengths calculate letters in names the array on question 2
let sumOfElements = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sumOfElements += nameLengths[i];
}
console.log (sumOfElements)



//7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
console.log('\**********\n7.Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).')
// created a function to take 2 parameters 
function wordfunction (word, n){
    let temp ="";
    for (let i = 1; i <= n; i++) {
        temp += word
    }
    return temp 
}
console.log (wordfunction("Hello", 3))



//8. Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
console.log('\**********\n8Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.')

function fullName(firstName, lastName){
    return firstName + " " + lastName;
  }
  


  //calling the function and assigning the return to a variable
  let fullname = fullName("Ross", "Parker");
  
  console.log(fullname)
  


  //9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
  console.log('\**********\n9.Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.')

  function myFunction(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
       sum += array[i];
    }
    if(sum > 100){
    return true;
    }
 } console.log( myFunction(ages) );
 


 //10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.
 console.log('\**********\n10.Write a function that takes an array of numbers and returns the average of all the elements in the array.')

 function averageArray (numbers){
    let average =0;
    for (let i = 0; i < numbers.length; i++) {
  
    average += numbers[i]
    }

    return average/numbers.length

}
let num = [2, 23, 25, 19]
console.log(averageArray(num));



//11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
console.log('\**********\n11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.')

function takeArray(arr1, arr2){

    if (averageArray(arr1) > averageArray(arr2)) {
    return true

    }
    else{
    return false 

    }
    
}

 let arr1 = [10, 20, 30]     
 let arr2 = [1, 2, 3]
 console.log(takeArray(arr1, arr2))
 



 //12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
 console.log('\**********\n12.Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.')

function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside == true && moneyInPocket > 10.50) {
    return true

    }
    else{

    return false
    }

}

console.log(willBuyDrink(true, 10.51))



//  13.  Create a function of your own that solves a problem. 
// In comments, write what the function does and why you created it.
console.log('\**********\n13.Create a function of your own that solves a problem.') 
// In comments, write what the function does and why you created it.')

//the function compares money in bank to the cost of deck repairs using a if statement along with im off work to do the repairs. I created the function because im currenly building a deck.
function willReapirDeck(imOffWork, moneyInBank){
    if (imOffWork == true && moneyInBank > 250.00) {
    return true

    }
    else{

    return false
    }

}

console.log(willReapirDeck(true, 251.00))