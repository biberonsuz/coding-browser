// socket io client side code!
const socket = io();

// const mssgContainer = document.querySelector("#messageContainer");

socket.on("systemMessage", function(message) {
    console.log(message);

    // let newElement = document.createElement("div");
    // let newTextElement = document.createElement("p");
    //
    // newTextElement.innerHTML = message;
    //
    // newElement.append(newTextElement);
    //
    // mssgContainer.append(newElement);
});

document.querySelector("#buttonThis").addEventListener("click", function() {
    socket.emit("socketMessage", "THIS ONE CLICKED!");
});

// document.querySelector("#myForm").addEventListener("submit", function(event) {
//
//     event.preventDefault();
//
//     socket.emit("socketMessage", document.querySelector("#myInput").value);
//
//     document.querySelector("#myInput").value = "";
//     document.querySelector("#myInput").focus();
//
// });


// changeable variables : using keyword let
let myVariable = "Martijn";

// static constants : using keyword const
const myConstant = "Martijn";

// datatype: Strings
const myName = "Martijn";

// datatype: Numbers
let myAge = 29;

// datatype: array
let classNames = ["Martijn", "Tim", "Lotte"];
let myArray = [];

// // datatype: object
// let classGroupB = {
//     className: "3B",
//     studentNames: ["Martijn", "Tim", "Lotte", "Szimon", "Rady", "Julia", "…"],
//     classRepresentative: "Martijn",
//     codingTeacher: "Martijn"
// };
// let myObject = {};
//
// function myFunction(inputObject) {
//
//     console.log(inputObject.className);
//
//     inputObject.studentNames.forEach( function(name) {
//         console.log("hello " + name);
//     });
//
//     for(let index = 0; index < inputObject.studentNames.length; index++) {
//         console.log(   inputObject.studentNames[ index ]    );
//     }
//
//     for(objectKey in inputObject) {
//         console.log( objectKey + ":", inputObject[objectKey] );
//     }
//
// }
//
// myFunction(classGroupB);