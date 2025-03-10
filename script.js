let background = document.querySelector(".background");
let sprite = document.querySelector("#sprite");
let textbox = document.querySelector("#textbox");

let paragraph = "This is the paragraph";

let textArray = paragraph.split(" ");

let textArrayPosition = 0


background.addEventListener('click', function() {
    // spriteFall() = false;
    console.log("hello");
    if (sprite.style.backgroundColor == "pink") {
    sprite.style.backgroundColor = "blue";
    // document.getElementById("textbox").innerHTML = textArray[textArrayPosition];
    let nextWord = document.createElement("p");
    nextWord.innerHTML = textArray[textArrayPosition];
    textbox.appendChild(nextWord);
    textArrayPosition = textArrayPosition + 1; 
    } else {
        sprite.style.backgroundColor = "pink";
    }
})

textbox.addEventListener('click', function() {
    console.log("hello");
    if (sprite.style.backgroundColor == "pink") {
    sprite.style.backgroundColor = "blue";
    } else {
        sprite.style.backgroundColor = "pink";
    }
})

let xaxis = 0;
let yaxis = 0;

sprite.style.backgroundColor = "pink";
let flightPath = 30;

function spriteFall () {
    setInterval(function() {
        // code to be executed repeatedly
        if (sprite.style.backgroundColor == "pink") {
            if (xaxis > 500) {
                sprite.style.backgroundColor = "red";
                return;
            } else if ((yaxis > 700) && (xaxis < 100)) {
                sprite.style.backgroundColor = "green";
                return;
            } else {
                xaxis = xaxis + 5;
                yaxis = yaxis + 2.5;
                let spriteMovement = xaxis + "px " + yaxis + "px";
                sprite.style.margin = spriteMovement;
            }
        }
        else if (sprite.style.backgroundColor == "blue") {
            for (var i = 0; i < flightPath; i++) {
            xaxis = xaxis - 1;
            yaxis = yaxis + 1;
            let spriteMovement = xaxis + "px " + yaxis + "px";
            sprite.style.margin = spriteMovement; 
            }
            sprite.style.backgroundColor = "pink";
        }
        else if (sprite.style.backgroundColor == "green") {
            return;
        }
    }, 25);
};


spriteFall();


// For Words appearing on screen
//create an object for holding a paragraph of text
//parse the paragraph into words
//  do this by dividing up the paragraph around spaces
//iterate the words into an array
//print the selected item in the array with each click
//  incremnt the selector with each click
