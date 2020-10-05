// socket io client side code!
const socket = io();
const mssgContainer = document.querySelector("#messageContainer");

socket.on("systemMessage", function(message) {
    let newElement = document.createElement("div");
    let newTextElement = document.createElement("p");

    newTextElement.innerHTML = message;
    newElement.append(newTextElement);
    mssgContainer.append(newElement);
});

document.querySelector("#buttonThis").addEventListener("click", function() {
    socket.emit("socketMessage", "THIS ONE CLICKED!");
});

document.querySelector("#myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    socket.emit("socketMessage", document.querySelector("#myInput").value);

    document.querySelector("#myInput").value = "";
    document.querySelector("#myInput").focus();
});





// changeable variables : using keyword let
let myVariable = "Martijn";

// static constants : using keyword const
const gravity = 8; // gravity * 2: 16
const gravityTwo = "8"; // gravityTwo * 2 (NaN)

// datatype: Strings
const myName = "Martijn";

// datatype: Numbers
let myAge = 29;

// datatype: array | accesing: // studentsFirstNames[2]
let studentsFirstNames = ["Martijn", "Tim", "Lotte", "wef", "wef", "trrg"];
let studentsLastNames = ["de Heer", "Vermeulen", "Spaans", "sjdsjf", "sdjfjsdf", "jsdfj"];
let myArray = [];

// Declaring a function
function sayMyName(firstName, lastName) {
    console.log(firstName + " " + lastName);
}

// Calling a function
sayMyName("Martijn", "de Heer");

for(let counter = 0; counter < studentsFirstNames.length; counter++) {
    console.log(counter);
    sayMyName(studentsFirstNames[counter], studentsLastNames[counter]);
}

// datatype: object | let myObject = {};
let classA = {
    className: "3B",
    studentNames: ["Martijn", "Tim", "Lotte", "Szimon", "Rady", "Julia", "Lotte"],
    classRepresentative: "Tim",
    codingTeacher: "Martijn"
};

for(objectKey in classA) {
    console.log( classA[objectKey] );

    if(objectKey === "studentNames") {
        for(let counter = 0; counter < objectKey.length; counter++) {
            console.log( classA[objectKey][counter] );
        }
    }
}





function myFunction(inputObject) {

    console.log(inputObject.className);

    inputObject.studentNames.forEach( function(name) {
        console.log("hello " + name);
    });

    for(let index = 0; index < inputObject.studentNames.length; index++) {
        console.log(   inputObject.studentNames[ index ]    );
    }

    for(objectKey in inputObject) {
        console.log( objectKey + ":", inputObject[objectKey] );
    }

}