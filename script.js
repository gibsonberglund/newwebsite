let background = document.querySelector(".background");
let sprite = document.querySelector("#sprite");


function spriteFly () {
    spriteFall() = false;
    flyx = xaxis -25;
    flyy = yaxis -25;
    let spriteFly = xaxis + "px " + yaxis + "px";
    sprite.style.margin = spriteFly;
};

// background.addEventListener('mouseover', function() {
//     spriteFall();
// });

background.addEventListener('click', function() {
    // spriteFall() = false;
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
