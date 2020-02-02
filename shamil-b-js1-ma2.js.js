// Question 1
// Create a function expression by assigning an anonmyous function to a variable called myFunctionExpression. 
//The function should console log your name.

const myFunctionExpression = function() {
    console.log("Shamil B");
};

myFunctionExpression();


// Question 2
// Select the input in the HTML below by its class. Add a click event listener. 
// The callback function passed to the event listener should log the sentence I was clicked.
// You can pass the function in directly, declare it and pass it in by its name or assign it to a variable and pass it in by the variable name.

const button = document.querySelector(".btn");
button.addEventListener("click", function () {
    console.log("I was clicked");
});

// Question 3
// Select the input in the HTML below by its id. Add a keydown event listener. 
// The callback function passed to the event listener should log the value of the key that was pressed.

const firstname = document.querySelector("#firstName");
firstname.addEventListener("keydown", pressKey);

function pressKey(event){
    console.log(event.key);
}


// Question 4
// Select the button in the HTML below by its tag. Add a mouseover event listener. 
// The callback function should add a class called hover to the button.

const button = document.querySelector("button");
button.addEventListener("mouseover", addClass);

function addClass(event){
    event.target.classList.add("hover");
    console.log("hover");
}


// Question 5
// Select the button in the HTML below by its data attribute and add a mouseout event listener to it. 
// The callback function should remove the class called hover from the button.

const theDog = document.querySelector("[data-the='dog']");
    console.log(theDog);

function cursorMoves(event) {
}
    event.target.classList.remove("hover");
 
}

theDog.addEventListener("mouseout", cursorMoves);

// Question 6
// Select all the li tags from the HTML below. Using a loop, add a mouseover event listener to each tag.
// The callback function should log the value of the data attribute on each element when the cursor moves over it.

const liSelect = document.querySelectorAll("li");

for(let i = 0; i < liSelect.length; i++){
    liSelect[i].addEventListener("mouseover", scanItems);
}

function scanItems(event){
    console.log(event.target.dataset.animal);
}



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

const sheep = ["Malcolm", "Anders", "Marie"];

function eachName(sheep) {
  console.log(sheep);
}

sheep.forEach(eachName);


// Question 9
// Create a timer that logs the word hello every half a second. It must stop after its logged the word 6 times.

var counter = 0;

function logTime(){
    console.log("hello");

    if(counter === 5) {
        clearInterval(interval);
    }

    counter++;

}

const interval = setInterval(logTime, 500);

// Question 10
// Select the div from the HTML below. Write code that updates the div's text to say Text updated after waiting 2 seconds. 
// You can use either innerText or innerHTML to update the text.

const container = document.querySelector("div.container");

function updateText() {
    container.innerText = "Text updated"
}

setTimeout(updateText, 2000);
