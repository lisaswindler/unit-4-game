$(document).ready(function() {

    var reyChar = {
        name : "Rey",
        healthPoints: 180,
        attackPower: 6,
        counterAttackPower: 15,
        id: "rey",
    } 
    var leiaChar = {
        name : "Leia",
        healthPoints: 150,
        attackPower: 9,
        counterAttackPower: 25, 
        id: "leia"
    }  
    var padmeChar = {
        name : "Padme",
        healthPoints: 100,
        attackPower: 7,
        counterAttackPower: 20,
        id: "padme"
    }
    var jynChar = {
        name : "Jyn",
        healthPoints: 120,
        attackPower: 8,
        counterAttackPower: 10,
        id: "jyn"
    }

    var playerArray = [jynChar, padmeChar, leiaChar, reyChar];
    var enemyArray = [];
    var you = null;
    var defender = null;
    var playerLife;
    var enemyLife;
    var firstPlayer = "";
    var playerSelected = false;
    var opponentSelected = false;
    var secondPlayer = "";
    $(".players").on("click", function() {
        // debugger;
        if (playerSelected === false) {
            const found = playerArray.find(element => this.id === element.id);
            you = jQuery.extend({}, found);
            playerSelected = true;
            // $("#chosen-character").append(this);
            // $(this).removeClass("players");
            // $("#available-enemies").append($(".players"));
            // enemyArray = jQuery.extend({}, playerObject[.id]);
            enemyArray = playerArray.filter(element => element.id !== this.id);
            $(this).removeClass("col-3");

            updateDOMForPlayer();
        }

        $(".players").on("click", function() {
        if (opponentSelected === false) {
            opponentSelected = true;       
            var found = playerArray.find(element => this.id === element.id);
            defender = jQuery.extend({}, found);
            enemyArray = enemyArray.filter(element => element.id !== this.id);
            $("#available-enemies").append(enemyArray);
            $("#defender").append(this);
            $(this).removeClass("col-3");
            var enemy = this;
        }  
        });

        function updateDOMForPlayer() {
            $("#chosen-character").html($('#' + you.id));
            var enemyDiv = $("#available-enemies");
            enemyDiv.empty();
            enemyArray.forEach(enemy => {
                var playerImg = $('#' + enemy.id);
                enemyDiv.append(playerImg);
            });
        }
        $("#attack").on("click", function() {
            var attackPower = $('#' + you.attackPower);
            attackPower += attackPower;
            var enemyPower = $('#' + enemy.counterAttackPower);
            you.healthPoints -= enemyPower;
    
        });  
    


        
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