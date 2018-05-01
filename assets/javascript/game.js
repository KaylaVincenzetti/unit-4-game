$(document).ready(function() {
var wins = 0;
var losses = 0;
var sum = 0;
var numArray = [];
var counter = 0;
var random = 0;
var ranum = 0;
startGame();
function startGame () {

    
    
    random = Math.floor(Math.random()*101+19);
    console.log("The number to match is" + random);   
        $("#matchNumber").text(random);
        $("#userWins").text(wins);
        $("#userLoss").text(losses);

    
    $('#crystal-1').attr("data-crystalvalue", ranum);


    for(var i=1; i < 5; i++){
        ranum = Math.floor(Math.random()*11+1);
        numArray.push(ranum)
        var crystals = $('#crystal-' + i);
        crystals.attr("data-crystalvalue", ranum);
        console.log("this is pass " + i);
        console.log(ranum);
        console.log("ranum was added to crystal");
       

      

    }

    sum = numArray.reduce(function(acc, val) { return acc + val; });
    
    $("#userScore").text(counter);

    

}
startGame();

$("#crystals").on("click", ".c-image", function() {
    var random = parseInt($("#matchNumber").text());
    var counter = parseInt($("#userScore").text());
    console.log("The number to match is" + random);
    console.log("The number to match is" + counter);
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;
    $("#userScore").text(counter);
    

    if (counter === random) {
        wins++
        alert("You Win!");
        console.log("wins=",wins, "losses=",losses);
        document.getElementById("userWins").innerHTML=wins;
        // startGame();
        counter = 0;
        $("#userScore").text(counter);
        var random = Math.floor(Math.random()*101+19);
        $("#matchNumber").text(random);

        for(var i=1; i < 5; i++){
            ranum = Math.floor(Math.random()*11+1);
            numArray.push(ranum)
            var crystals = $('#crystal-' + i);
            crystals.attr("data-crystalvalue", ranum);
            console.log("this is pass " + i);
            console.log(ranum);
            console.log("ranum was added to crystal");
           
        }
    }

    else if (counter > random) {
        losses++
        alert("You Lose!");
        console.log("wins=",wins, "losses=",losses);
        document.getElementById("userLoss").innerHTML=losses;
        // startGame();
        counter = 0;
        $("#userScore").text(counter);
        var random = Math.floor(Math.random()*101+19);
        $("#matchNumber").text(random);

        
    for(var i=1; i < 5; i++){
        ranum = Math.floor(Math.random()*11+1);
        numArray.push(ranum)
        var crystals = $('#crystal-' + i);
        crystals.attr("data-crystalvalue", ranum);
        console.log("this is pass " + i);
        console.log(ranum);
        console.log("ranum was added to crystal");
       

      

    }
    }

});
});



  





