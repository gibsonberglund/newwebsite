let background = document.querySelector(".background");
let sprite = document.querySelector("#sprite");
let textbox = document.querySelector("#textbox");

let paragraph = "I ran to a future city, a metropolis in the year 2320. The polygon skyline shrouded in mist, rainbow lights shining high in the air. A sense of calm and knowing came over me then, as if somehow I’d been there before. Perhaps I’d gone in a circle, and returned to my past, like some kind of cryogenic drifter in a space-time paradox. Someone once told me, in my early-childhood fog, that if you really want to go somewhere you can’t be afraid to get lost. So I slowed to a walk and admired the feeling, admired the familiar strangeness of what I was seeing, strolling under the lamplight glow, the sky overhead a heavy shade of purple. My clothes must have been odd for this place and time, for I received lots of stares from the people passing by. They spoke to each other in short, loud bursts, in a language that sounded like musical notes, chopped up, scrambled, and overlaid with words. I walked down a pavilion on the edge of a park, the city all around lit up in the dark. It occurred to me then that I might not be on Earth. I could have been on some other planet, like a colony on Mars, or one of Jupiter’s moons. Or maybe not even a terrestrial body at all, but the inside of a spaceship the size of a star. I feared, and I hoped, that I was stuck there alone, left to explore this new world and then move on, bouncing from planet to planet and ship to ship, with all of space as my playground and all measures of time irrelevant. An intrepid explorer, the fearless spaceman. Worn but not weary, always curious, courageous, with the wisdom of ages and infinite patience, powered by compassion and boundless fascination. Nothing’s ever too weird, he can never be shocked, the ultimate pioneer on the endless frontier, a force of awakening that cannot be stopped. But then I kept running and soon I found I’d returned to the time I remembered as my own. No longer in the future, or somewhere in space, back on Earth in 2020, daydreaming again.";

let textArray = paragraph.split(" ");

let textArrayPosition = 0;

let textboxaxis = 20;

sprite.style.backgroundImage = "url('./assets/images/pixelbird1.png')";

background.addEventListener('click', function() {
    console.log("hello");
    if (sprite.style.backgroundColor == "pink") {
        sprite.style.backgroundColor = "blue";
        sprite.style.backgroundImage = "url('./assets/images/pixelbird2.png')";

        //makes one word appear with each click
            let nextWord = document.createElement("p");
            nextWord.innerHTML = textArray[textArrayPosition];
            textbox.appendChild(nextWord);
            textArrayPosition = textArrayPosition + 1; 
            background.scrollRight += 20;
            textboxaxis = textboxaxis - 1;
            let textMovement = "20% " + textboxaxis + "%";
            textbox.style.margin = textMovement; 
        //
    } else {
        sprite.style.backgroundColor = "pink";
    }
});


let xaxis = 0;
let yaxis = 0;


sprite.style.backgroundColor = "pink";
sprite.style.backgroundImage = "url('./assets/images/pixelbird1.png')";
let flightPath = 30;

function spriteFall () {
    setInterval(function() {
        //IF SPRITE IS FALLING
        if (sprite.style.backgroundColor == "pink") {
            //SPRITE DIES
            if (xaxis > 500) {
                sprite.style.backgroundColor = "red";
                return;
            //SPRITE REACHES THE GOAL
            } else if ((yaxis > 700) && (xaxis < 100)) {
                sprite.style.backgroundColor = "green";
                return;
            //SPRITE IS FALLING
            } else {
                xaxis = xaxis + 5;
                yaxis = yaxis + 2.5;
                let spriteMovement = xaxis + "px " + yaxis + "px";
                sprite.style.margin = spriteMovement;
                sprite.style.backgroundImage = "url('./assets/images/pixelbird1.png')";
            }
        }
        //IF SPRITE IS FLYING
        else if (sprite.style.backgroundColor == "blue") {
            //MOVE SPRITE UP AND FORWARD
            for (var i = 0; i < flightPath; i++) {
            xaxis = xaxis - 1;
            yaxis = yaxis + 1;
            let spriteMovement = xaxis + "px " + yaxis + "px";
            sprite.style.margin = spriteMovement;
            }
            //CHANGE SPRITE BACK TO FALLING
            sprite.style.backgroundColor = "pink";
            
        }
        else if (sprite.style.backgroundColor == "green") {
            return;
        }
    }, 50);
};


spriteFall();



