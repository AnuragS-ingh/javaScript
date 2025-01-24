//   Functions:- Functions are the block of code that performs the specific task and can be invoked/called when ever needed. Functions can return some values. Let's see the syntax of the function.

/* function("this function is the reserved word") <function Name> (){

    code to perform some specific task

}

Above is the function with out parameter

    **********FUNCTION WITH SOME PARAMETER***********

function <function Name> (parameter1,parameter2,...){

    return (parameter1+parameter2);

}

NOTE:- Point to be noted is that the parameter or the variable that is decleared inside the function alaways exist inside the scope of the function, it cannot be accessed outside of the function, that is the parameter and the variable of the function have the block scope.

************************EXAMPLE OF THE FUNCTION******************************

*/


function first(){
    console.log("this is the function with out the parameter");
} // This is the function defination.


first() // This is the call of the function/or invoking the function


function second(num1,num2){
    return(num1+num2);
}

let sum = second(4,5) // this will return the sum of the number 4 and 5 and the returned value will be assigned to the variable sum.

console.log(sum); // This will return the value 9 and the sum of 4 and 5 is 9.



// Create a function using a function keyword that takes a string as an argument and returns the number of vowels in the string..

// First approach:

function vowelCounter(string){
    let counter = 0;
    string.toLowerCase();
    for(let i = 0; i<string.length;i++){
        if(string[i]=== "a" || string[i] === "e" || string[i]=== "i" || string[i]=== "o" || string[i]=== "u"){
            counter += 1;
        }
    }

    return (`the number of vowel in the given string is ${counter}`)
}

console.log(vowelCounter("collage"));

// Second approch

function countVowel2 (string){
    let counter = 0;
    for(char of string){
        if(char=== "a" || char === "e" || char=== "i" || char=== "o" || char=== "u"){
            counter += 1;
        }
    }

    return (` the number of vowel in the given string is ${counter}`)
}

console.log(countVowel2("aeiou"))

//*************************************************************************************************************** */

/*
ARROW FUNCTION:- Arrow function is the compact form of the function.Let's see the syntax of the arrow function.

const functionName = (parameter1,parameter2,...) => {

    code to perform some work...

}


const print = () =>{

    console.log(' This is the arrow function with out the parameter');

};

There is one more way to write a arrow function:-

const addition = (a,b) => a+b; This syntax is also valid syntax for the arrow function and this syntax is generally used when we hava single line of code.

let's see the example of the arrow function:-

*/

const print = () => {
    console.log("this is the arrow function withOut the parameter")
};

print() // this is the invoke of the arrrow function.

const addition = (a,b) => {
    return(a+b);
}

addition(); // this is the invoke of the arrow function


const subtraction = (a,b) =>  a-b; // In this case this function automatically return the result of a-b;
console.log(subtraction(5,5));