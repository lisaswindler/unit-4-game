$(document).ready(function() {

var reyPlayer = {
    name : "Rey",
    healthPoints: 180,
    attackPower: 6,
    counterAttackPower: 15,
    id: "rey",
} 
var leiaPlayer = {
    name : "Leia",
    healthPoints: 150,
    attackPower: 9,
    counterAttackPower: 35, 
    id: "leia"
}  
var padmePlayer = {
    name : "Padme",
    healthPoints: 100,
    attackPower: 7,
    counterAttackPower: 20,
    id: "padme"
}
var jynPlayer = {
    name : "Jyn",
    healthPoints: 120,
    attackPower: 8,
    counterAttackPower: 10,
    id: "jyn"
}
    var enemyArray = [];
    // // var you = null;
    // // var defender = null;
    // var playerLife;
    // var enemyLife;
    var playerArray = [jynPlayer, padmePlayer, leiaPlayer, reyPlayer];
    var playerSelected = false;
    var opponentSelected = false;
    
    $(".players").on("click", function() {
        if (playerSelected === false) {
            playerSelected = true;
            $("#your-character").append(this);
            $(this).removeClass("players");
            $(this).removeClass("col-3");
            $("#available-enemies").append($(".players"));
            $(this).addClass("players");
            const found = playerArray.find(element => this.id === element.id);
            you = jQuery.extend({}, found);
            console.log(you);
        }

        $(".players").on("click", function() {
            if (opponentSelected === false) {
                opponentSelected = true;       
                $("#defender").append(this);
                $(this).removeClass("col-3");
                $(this).addClass("defender-points");
                const found = playerArray.find(element => this.id === element.id);
                defender = jQuery.extend({}, found);
            } 
            
            $("#attack").on("click", function() {
                if (playerSelected === true && opponentSelected === true) {
                    myAttack = you.attackPower;
                    defender.healthPoints -= you.attackPower;
                    $(".defender-points").html(defender.healthPoints);
                    console.log(you.attackPower);
                    you.attackPower += myAttack;
                    you.healthPoints -= defender.counterAttackPower;
                    if (defender.healthPoints <= 0) {
                        console.log("You win! Choose another enemy.")
                        opponentSelected = false;
                        // playerArray.splice(defender); 
                        $("#defender").empty();
                            // if (playerArray.indexOf < 1) {
                            //     console.log("you win");
                            //     opponentSelected = true;
                            //     return;
                            // }
                        
                    } else if (you.healthPoints <= 0) {
                        console.log("You lost. Press reset.")
                        $("#reset-button").html('<button class="btn btn-warning">Reset</button>');
                        return;
                        }
                    }

                    
                }); 
        });

    });
   
    
    $("#reset-button").on("click", function() {
        // $("#defender").empty();
        // $("#your-character").empty();
        playerSelected = false;
        opponentSelected = false;
        $(".players").addClass("col-3");
        $("#player-choices").append($(".players"));
        reyPlayer.healthPoints = 180;
        reyPlayer.attackPower = 6;
        leiaPlayer.healthPoints = 150;
        leiaPlayer.attackPower = 9;
        padmePlayer.healthPoints = 100;
        padmePlayer.attackPower = 7;
        jynPlayer.healthPoints = 120;
        jynPlayer.attackPower = 8;
        });
  

}); 




// function updateDOMForDefender() {
//     const defenderElement = $('#' + defender.id).clone();
//     $('#' + defender.id).remove();
//     $("#defender").html(defenderElement);
//     $("#defender").addClass("col-3");
// }

//   $(".operator").on("click", function() {
//     if (firstNumber !== "") {
//     isOperator = true;
//     console.log(this.value);
//       if (this.value === "plus") {
//         operator = "+"
//       } 
//     } $("#operator").html(operator);
//   });

// var el = $('#wrapper').detach();

// $("#open_menu").click(function(){
//     $(this).append(el);
// });