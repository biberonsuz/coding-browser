// socket io client side code!
const socket = io()
const msgContainer = document.querySelector("#message-container")
const body = document.querySelector("body")
let height = 0

socket.on("systemMessage", function(message) {
    let newElement = document.createElement("div")
    newElement.className = 'sys'
    let newTextElement = document.createElement("p")

    newTextElement.innerHTML = message
    newElement.append(newTextElement)
    msgContainer.append(newElement)
})
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    socket.emit("socketMessage", document.querySelector("#message").value)

    document.querySelector("#message").value = "";
    document.querySelector("#message").focus()
    
    height += msgContainer.lastElementChild.offsetHeight + 30
    console.log(height)
    if (height > body.offsetHeight) {
        msgContainer.firstElementChild.remove()
    }
})


// changeable variables : using keyword let

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