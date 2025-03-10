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

function spriteFall () {
    setInterval(function() {
        // code to be executed repeatedly
        if (sprite.style.backgroundColor == "pink") {
        xaxis = xaxis + 5;
        yaxis = yaxis + 2.5;
        let spriteMovement = xaxis + "px " + yaxis + "px";
        sprite.style.margin = spriteMovement;
        }
        else if (sprite.style.backgroundColor == "blue") {
            xaxis = xaxis - 5;
            yaxis = yaxis + 2.5;
            let spriteMovement = xaxis + "px " + yaxis + "px";
            sprite.style.margin = spriteMovement; 
        }
    }, 25);
};

spriteFall();
