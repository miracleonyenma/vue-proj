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
            health : 45,
            attack : 3,
            special : 7,
            heal : 8
        },
        logs : [
        ]

    },
    methods:{
        randInt : function(min, max){
            return Math.floor(Math.random(min - max) * max + min);
        },
        Attack : function(mode, attacker, enemy){
            if(!this.gameOver && this.started && attacker.health > 0 && enemy.health > 0){     
                console.log(attacker.name, attacker.health);
                let attackval = this.randInt(attacker[mode], 12);
                enemy.health = enemy.health - attackval;
                this.logs.unshift(this.addToLog(attackval, attacker, enemy));
                if(attacker == this.player){
                    this.Attack("attack", enemy, attacker);
                }
                if(enemy.health <= 0 ){
                    enemy.health = 0;
                    confirm(attacker.name +" Won! \nPlay again?") ? this.resetAll() : null;
                }
                
                // if(attacker.health > 0){
                //     let attackval = this.randInt(attacker[mode], 12);
                //     enemy.health = enemy.health - attackval;
                //     if(enemy.health <= 0){
                //         enemy.health = 0;
                //     }
                //     this.logs.unshift(this.addToLog(attackval, attacker, enemy));
    
                //     if(attacker == this.player && enemy.health >= 0){
                //         if(attacker.health <= 0 && enemy.health > 0){
                //             this.gameOver = true;
                //             alert("you lost");
                //         }else if(enemy.health <= 0 && attacker.health > 0){
                //             this.gameOver = true;
                //             confirm("You Won! \nPlay again?") ? this.resetAll() : null;
                //         }
                //         this.Attack("attack", enemy, attacker);
                //     }
                // }

                // if(attacker == this.player && attacker.health <= 0){
                //     this.gameOver = true;
                //     confirm("You lost! \nPlay again?") ? this.resetAll() : null;
                // }
    
            }
            
        },
        // Attack : function(mode, attacker, enemy){
        //     if(!this.gameOver && this.started && attacker.health > 0){     
        //         console.log(attacker.name, attacker.health);
                       
        //         if(attacker.health > 0){
        //             let attackval = this.randInt(attacker[mode], 12);
        //             enemy.health = enemy.health - attackval;
        //             if(enemy.health <= 0){
        //                 enemy.health = 0;
        //             }
        //             this.logs.unshift(this.addToLog(attackval, attacker, enemy));
    
        //             if(attacker == this.player && enemy.health >= 0){
        //                 if(attacker.health <= 0 && enemy.health > 0){
        //                     this.gameOver = true;
        //                     alert("you lost");
        //                 }else if(enemy.health <= 0 && attacker.health > 0){
        //                     this.gameOver = true;
        //                     confirm("You Won! \nPlay again?") ? this.resetAll() : null;
        //                 }
        //                 this.Attack("attack", enemy, attacker);
        //             }
        //         }

        //         if(attacker == this.player && attacker.health <= 0){
        //             this.gameOver = true;
        //             confirm("You lost! \nPlay again?") ? this.resetAll() : null;
        //         }
    
        //     }
            
        // },
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
            console.log("reset");
            this.started = true;
            this.player.health = 100;
            this.monster.health = 100;
            this.logs = [];
            this.gameOver = false;
        },
        addToLog : function(mode, attacker, enemy){
            if(mode === "heal"){
                return {attacker: attacker.name, log: attacker.name + " heals for " + attacker[mode]} 
            }else{
                return {attacker: attacker.name, log: attacker.name + " hits " + enemy.name + " for " + mode}; 
            }            
        }
    }
})