new Vue({
    el: "#app",
    data: {
        started : false,
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

    }
})