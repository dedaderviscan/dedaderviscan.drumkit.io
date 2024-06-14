// Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length; //calculating the number of buttons by dom, doing querySelectorAll for all html elements with ".drum" classes. And adding length function at the end to calculate their number. 

for (var i=0; i<numberOfDrumButtons; i++) { //creating a for loop, setting the number for the total numbers of drums by class ".drum". 
    //listening to buttons for events, when any click runs the callback function for related button. 
    document.querySelectorAll(".drum")[i].addEventListener("click", function() { //detecting cursor press by eventlistener function, when a click is detected then runs the trigger function as below. 
        //buttonInnerHTML is the class character of the clicked button
        var buttonInnerHTML = this.innerHTML;  //storing the clicked button's class in buttonInnerHTML, by innerHTML dom method, takes the class data by this.innerHTML. 

        makeSound(buttonInnerHTML); // runs the makeSound function with buttonInnerHTML parameter.

        buttonAnimation(buttonInnerHTML); //runs the buttonAnimation function with buttonInnerHTML parameter.

    });
}


// Detecting Keyboard Press
document.addEventListener("keydown", function (event) { //runs special keydown eventlistener function, when a key is pressed, and then calls the triggers function by "event" parameter. 
    makeSound(event.key); //running the makeSound application by the parameters UPDATE HERE 
    buttonAnimation(event.key); //running the buttonAnimation application by the parameters UPDATE HERE
});


function makeSound(key) { //main application for makingsound by "key" parameter by using switch case statements. 

    switch (key) { //wherever the key value matches the below characters, executes the inner code audio.play(); 
        case "w": //if the key is "w", executes below code and plays the audio file. 
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a": //similar as above. 
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s": //similar as above. 
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d": //similar as above. 
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
            
        case "j": //similar as above. 
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k": //similar as above.  
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "l": //similar as above.  
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey) { //forming a buttonAnimation function working with parameter "currentKey", 

    var activeButton = document.querySelector("." + currentKey); //creates a variable "activeButton" for dom and grabs the html element with currentKey. 

    activeButton.classList.add("pressed"); //changing the activeButton's classList, adding new class as "pressed", which creates the pressed button animation. 

    setTimeout( function(){ //setTimeout function to end the pressed button animation. otherwise the button animation will be stayed as pressed. 
        activeButton.classList.remove("pressed");
    }, 100 );
}

