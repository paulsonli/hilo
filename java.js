/* global $ */ 
var rng = Math.ceil((Math.random() * 10)) + 1;
$("#button").click(function(){
    var guess = $("input").val();
   if(guess == rng) {
    $("#message").html("Congratulations. You got it!!!"); 
   }
    else if (guess < rng) {
    $("#message").html("Number is too low. Try again"); 
    }
    else if (guess > rng) {
    $("#message").html("Number is too high. Try again");
    }
    console.log("Numb" + rng);
});
