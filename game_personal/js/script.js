new Vue({
    el: "#app",
    data: {
        started : false,
        gameOver: false,
        monster : {
            name: "monster",
            health : 100,
            attack : 5,
            special : 10
        },
        player : {
            name: "player",
            health : 10,
            attack : 3,
            special : 7,
            heal : 7
        },
        logs : [
        ]

    },
    methods:{
        Attack : function(mode, attacker, enemy){
            if(!this.gameOver){
                console.log(enemy[mode]);
            
                if(attacker.health > 0){
                    enemy.health = enemy.health - attacker[mode];
                    if(enemy.health <= 0){
                        enemy.health = 0;
                    }
                    this.logs.unshift(this.addToLog(mode, attacker, enemy));
    
                    if(attacker == this.player){
                        if(attacker.health <= 0){
                            alert("you lost");
                        }
                        if(enemy.health <= 0){
                            this.gameOver = true;
                            confirm("You Won! \nPlay again?") ? this.resetAll() : null;
                        }
                        this.Attack("attack", enemy, attacker);
                    }
                }

                if(attacker == this.player && attacker.health <= 0){
                    this.gameOver = true;
                    confirm("You lost! \nPlay again?") ? this.resetAll() : null;
                }
    
            }
        },
        heal : function(){
            if(!this.gameOver){
                if(this.player.health <= 100){              
                    this.player.health = this.player.health + this.player.heal
                    if(this.player.health >= 100){
                        this.player.health = 100
                    }
                    this.logs.unshift(this.addToLog("heal", this.player, this.monster));
                    this.Attack("attack", this.monster, this.player);
                }
            }
        },
        resetAll : function(){
            this.started = true;
            this.player.health = 100;
            this.monster.health = 100;
            this.logs = [];
            this.gameOver = false;
        },
        addToLog : function(mode, attacker, enemy){
            if(mode === "heal"){
                // return [attacker.name, attacker[mode]]
                // return attacker.name + " heals for " + attacker[mode];
                return {attacker: attacker.name, log: attacker.name + " heals for " + attacker[mode]} 
            }else{
                // return [attacker.name, enemy.name, attacker[mode]]
                // return attacker.name + " hits " + enemy.name + " for " + attacker[mode];
                return {attacker: attacker.name, log: attacker.name + " hits " + enemy.name + " for " + attacker[mode]}; 
            }            
        }
    }
})