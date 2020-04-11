new Vue({
    el: "#app",
    data: {
        started : false,
        won: false,
        monster : {
            health : 100,
            attack : 5,
            special : 10
        },
        player : {
            health : 10,
            attack : 3,
            special : 7,
            heal : 7
        }

    },
    methods:{
        Attack : function(mode, attacker, enemy){
            console.log(enemy[mode]);
            
            if(attacker.health > 0){
                enemy.health = enemy.health - attacker[mode];
                if(enemy.health <= 0){
                    enemy.health = 0;
                }
                if(attacker == this.player){
                    this.Attack("attack", enemy, attacker);
                }
            }
        },
        // retaliate : function(mode, attacker, enemy){
        //     if(enemy.health > 0){
        //         enemy.health = enemy.health - attacker[mode];
        //     }
        //     else{
        //         enemy.health = 0;
        //     }
        // },
        resetAll : function(){
            // clearlog();
            this.started = true;
            this.player.health = 100;
            this.monster.health = 100;
        }
        // playerAttack : function(){
        //     if(this.monster.health >= 0){
        //         this.monster.health = this.monster.health - this.player.attack;
        //     }

        //     !won ? monsterAttack() : null
        // },
        // monsterAttack : function(){
        // }
    }
})