
var gamePattern = []

buttonColours = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];

var started = false;

var level = 0;

$(document).on('keypress', function(){
    if (!started){
     $("h1").text("Level " + level);
    nextSequence();
    started = true;
}
});


$(".btn").click(function(){

   var userChosenColour = $(this).attr("id");

   userClickedPattern.push(userChosenColour);

   playSound(userChosenColour);

   animatePress(userChosenColour)

   checkAnswer(userClickedPattern.length-1);

   console.log(userClickedPattern);

});


function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern
    [currentLevel]){
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }
    else{
        var audio = new Audio('sounds/wrong.mp3');
        audio.play();

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")
        }, 300)


        $("h1").text("Game over, " + yourName + ". Press any key to restart");

        startOver()
        console.log("failed")
    }
}


function nextSequence(){

    userClickedPattern = [];
    level++

    $("h1").text("Level " + level);

    var randomNumber = Math.round(Math.random() * 3);

    var randomChosenColour =  buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

    

    
    console.log(randomChosenColour);
 
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3")
    audio.play();
    
}


function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    
      }, 100);
    
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}

 var yourName = prompt("Hello Bender, Kindly input your name");
 var firstLetter = yourName.slice(0,1);
    firstLetter = firstLetter.toUpperCase();
var restLetters = yourName.slice(1, yourName.length);
    restLetters = restLetters.toLowerCase();

var yourName = firstLetter + restLetters;

// $(".musical").click(function(){
//     if (this.pause === false){
//         this.pause();
//         alert("Music playing");
//     }
//     else{
//         this.play();
//         alert("Music playing");
//     }
//     // var audio = new Audio("sounds/duduke.mp3");
//     // audio.play()
// });