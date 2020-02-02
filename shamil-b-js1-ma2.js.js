// Question 1
// Create a function expression by assigning an anonmyous function to a variable called myFunctionExpression. 
//The function should console log your name.

myFunctionExpression () {
    console.log("Shamil");
}


// Question 2
// Select the input in the HTML below by its class. Add a click event listener. 
// The callback function passed to the event listener should log the sentence I was clicked.
// You can pass the function in directly, declare it and pass it in by its name or assign it to a variable and pass it in by the variable name.

const button = document.querySelector(".btn");
button.addEventListener("click", logClick);
function logClick(){
    console.log("I was clicked");
}

// Question 3
// Select the input in the HTML below by its id. Add a keydown event listener. 
// The callback function passed to the event listener should log the value of the key that was pressed.


// Question 4
// Select the button in the HTML below by its tag. Add a mouseover event listener. 
// The callback function should add a class called hover to the button.


// Question 5
// Select the button in the HTML below by its data attribute and add a mouseout event listener to it. 
// The callback function should remove the class called hover from the button.

const animalDog = document.querySelector("[data-animal='dog']");
    console.log(animalDog);

function cursorMoves(event) {
}
    event.target.classList.remove("hover");
 
}

animalDog.addEventListener("mouseout", cursorMoves);

// Question 6
// Select all the li tags from the HTML below. Using a loop, add a mouseover event listener to each tag.
// The callback function should log the value of the data attribute on each element when the cursor moves over it.



// Question 7
// Convert the if-else-if statement below to a switch statement. 
// Use the code inside the else block in the default block in the switch.

const animal = "cow";

switch(animal) {
    case "cat":
        console.log("Meow");
        break;
    case "cow":
        console.log("Moo");
        break;
    case "bird":
        console.log("Tweet");
        break;
    default:
        console.log("Harrumph");
}


// Question 8
// Convert the for loop code below to a forEach loop.


// Question 9
// Create a timer that logs the word hello every half a second. It must stop after its logged the word 6 times.


// Question 10
// Select the div from the HTML below. Write code that updates the div's text to say Text updated after waiting 2 seconds. 
// You can use either innerText or innerHTML to update the text.


