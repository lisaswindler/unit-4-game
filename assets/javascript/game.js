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
            $(this).addClass("selected");
        }

        $(".players").on("click", function() {
            if (opponentSelected === false && $(this).hasClass("selected") === false) {
                opponentSelected = true;     
                $("#defender").append(this);
                $(this).removeClass("col-3");
                const found = playerArray.find(element => this.id === element.id);
                defender = jQuery.extend({}, found);
                var enemyHealth = ($(this).find("div"));
                $("#results1").html("");
                $("#results2").html("");
            } 
            
            $("#attack").on("click", function() {
                if (playerSelected === true && opponentSelected === true && wins < 3 === true && you.healthPoints > 0 === true) {
                    defender.healthPoints -= you.attackPower;
                    you.attackPower += parseFloat(yourAttack);
                    enemyHealth.html(defender.healthPoints);
                    you.healthPoints -= defender.counterAttackPower;
                    yourHealth.html(you.healthPoints);
                    $("#results1").html(you.name + " attacked " + defender.name + " for " + you.attackPower + " damage");
                    $("#results2").html(defender.name + " counterattacked for " + defender.counterAttackPower + " damage");
                    if (defender.healthPoints <= 0 && you.healthPoints > 0) {
                        $("#results1").html("You won this round!");
                        $("#results2").html("Choose another enemy");
                        opponentSelected = false;
                        $("#defender").empty();
                        wins++
                            if (wins === 3) {
                            $("#results1").html("You win! The force is strong with you.");
                            $("#results2").html("Press reset to play again");
                            $("#reset-button").html('<button class="btn btn-warning">Reset</button>');
                            };  
                        }
                    else if (you.healthPoints <= 0) {
                        $("#results1").html("You got blasted--so uncivilized!");
                        $("#results2").html("Press reset to play again");
                        $("#reset-button").html('<button class="btn btn-warning">Reset</button>');
                    }      
                };
            });      
        });
    });
    $("#reset-button").on("click", function() {
            location.reload();
    });
}); 