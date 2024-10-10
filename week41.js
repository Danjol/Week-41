/*
    Hi.
    This is a set of practice exercises.
    The purpose is to train on a few things at a time.
    You do this by entering your answer after a task is given (see the example).

    DO NOT change any code given, unless the task specifically says to do so.
*/

/* -----------------------------------------------------------------------------
    Task: Example
    Write the code to print all names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}





/* -----------------------------------------------------------------------------
    Task: A

    1. Declare a variable to store the following values 0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55
    2. Declare a variable to keep the sum of the numbers from step 1.
    3. Use a for or while loop to sum the numbers from step 1 to the variable from step 2
    4. Make a generic function for step 3.
    
*/
console.log("Task: A");

let numberSequence = [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55];
let sumOfNumberSequence = 0; 

for (let i = 0; i < numberSequence.length; i++) {
    sumOfNumberSequence += numberSequence[i];
}

console.log("Sum of number sequence:", sumOfNumberSequence);

function sumOfArray(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

let result = sumOfArray(numberSequence);
console.log("Sum using generic function: ", result);


/* -----------------------------------------------------------------------------
    Task: B

    1. Use a for loop to find the position of 'raspberry' in the list of fruits.
    2. Create a generic function that can find the position of anny fruit in the list. 
*/
console.log("Task: B");

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'mango', 'pineapple', 'pear', 'peach', 'plum', 'watermelon', 'blueberry', 'raspberry', 'blackberry', 'strawberry', 'cherry', 'lemon', 'lime', 'pomegranate', 'apricot'];

let position = -1;
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === 'raspberry') {
        position = i;
        break;
    }
}

console.log("Position of raspberry: ", position);

function findFruitPosition(fruit) {
    let position = -1;
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === fruit) {
            position = i;
            break;
        }
    }
    return position;
}

let bananaPosition = findFruitPosition('banana');
let kiwiPosition = findFruitPosition('kiwi');

console.log("Position of Banana", bananaPosition);
console.log("Position of Kiwi:", kiwiPosition)







/* -----------------------------------------------------------------------------
    Task: C

    1. Declare a new variable to store fruits that start with the letter 'b'.
    2. Use a for or while loop to copy over all fruits starting with 'b' to your new variable (the one you declared in point 1).
    3. Print the number of fruits that start with 'b' (hint: it will be the length of the list from point 2).
*/
console.log("Task: C");

let fruitsStartingWithB = [];

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].startsWith('b')) {
        fruitsStartingWithB.push(fruits[i]);
    }
}

console.log("Number of fruits starting with 'b':", fruitsStartingWithB.length);
console.log("Fruits starting with 'b'", fruitsStartingWithB);






/* -----------------------------------------------------------------------------
    Task: D
    * Write the code to find the number of fruits in the list that have a name longer than 8 characters.
    * Print the count.
*/
console.log("Task: D");

let longFruitCount = 0;

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].length > 8) {
        longFruitCount++;
    }
}

console.log("Number of fruits with names longer than 8 characters:", longFruitCount);







/* -----------------------------------------------------------------------------
    Task: E
    
    Use loops (for or while) to prove that list A and list B contain exactly the same items.
*/
console.log("Task: E");

const A = [1, 4, 5, "Bananas", true, 3.14, 9.81];
const B = [1, 3.14, 5, 9.81, true, 4, "Bananas"];

if (A.length !== B.length) {
    console.log("Lists A and B do not contain the same items (different lengths).");
} else {
    const sortedA = [...A].sort();
    const sortedB = [...B].sort();
    
    let areSame = true;

    for (let i = 0; i < sortedA.length; i++) {
        if (sortedA[i] !== sortedB[i]) {
            areSame = false;
            break;
        }
    }
    if (areSame) {
        console.log("Lists A and B contain exactly the same items.");
    } else {
        console.log("Lists A and B do NOT contain the same items.");
    }
}


