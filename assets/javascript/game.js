$(document).ready(function() {
    
    var random = Math.floor(Math.random()*101+19);
  
        console.log(random);
        $("#matchNumber").text(random);

    var crystals = $("#crystals");

    var counter = 0;

    var numOptions = Math.floor(Math.random()*11+1);

        console.log(numOptions);
        $("#userScore").text(numOptions);

    // for (var i = 0; i < numOptions.length; i++) {

    //     var imageCrystal = $("<img>");

    //     imageCrystal.addClass("crystal-image");

    //     imageCrystal.attr("src", "./assets/images/crystal1.jpg");

    //     imageCrystal.attr("data-crystalvalue", numOptions[i]);

    //     crystals.append(imageCrystal);

    // }

    // crystals.on("click", "crystal-image", function() {

    //     var crystalValue = ($(this).attr("data-crystalvalue"));
    //     crystalValue = parseInt(crystalValue);
    // });

});





