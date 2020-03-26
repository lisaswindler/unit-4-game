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
};
    var enemyArray = [];
    var playerArray = [jynPlayer, padmePlayer, leiaPlayer, reyPlayer];
    var playerSelected = false;
    var opponentSelected = false;
    var wins = 0;
    
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
            var yourHealth = ($(this).find("div"));
            var yourAttack = ($(this).attr("attack"));
            console.log(yourAttack);
            console.log(you);
            $(this).addClass("attacker");
        }

        $(".players").on("click", function() {
            if (opponentSelected === false && $(this).hasClass("attacker") === false) {
                opponentSelected = true;     
                $("#defender").append(this);
                $(this).removeClass("col-3");
                const found = playerArray.find(element => this.id === element.id);
                defender = jQuery.extend({}, found);
                var enemyHealth = ($(this).find("div"));
                console.log(defender);
            } 
            
            $("#attack").on("click", function() {
                if (playerSelected === true && opponentSelected === true) {
                    console.log(you.attackPower);
                    defender.healthPoints -= you.attackPower;
                    you.attackPower += parseFloat(yourAttack);
                    enemyHealth.html(defender.healthPoints);           
                    you.healthPoints -= defender.counterAttackPower;
                    yourHealth.html(you.healthPoints);
                    $("#results1").html(you.name + " attacked " + defender.name + " for " + you.attackPower + " damage");
                    $("#results2").html(defender.name + " counter-attacked for " + defender.counterAttackPower + " damage");
                    if (defender.healthPoints <= 0) {
                        console.log("You win! Choose another enemy.")
                        opponentSelected = false;
                        $("#defender").empty();
                        wins++
                        }
                    else if (you.healthPoints <= 0) {
                        console.log("You lost. Press reset.")
                        $("#reset-button").html('<button class="btn btn-warning">Reset</button>');
                        $(".players").hide();
                    } 
                        if (wins === 3) {
                        console.log("you win");
                        $("#your-character").empty();
                        $("#reset-button").html('<button class="btn btn-warning">Reset</button>');
                };  
                };
                }); 
                
        });

    });
   
    $("#reset-button").on("click", function() {
            location.reload();
        });


}); 