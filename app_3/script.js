new Vue({
    el: '#app',
    data: {
        counter : 0,
        value: 0,
        element: "",
        x: 0,
        y: 0,
        name: "Miracle"
    },
    computed: {
        output: function(){
            console.log("computed")
            return this.value > 20 ? "Greater than 20" : "Lesser than 20";
        }
    },
    watch: {
        counter: function(value){
            //to access this.property within setTimout method
            var vm = this;

            setTimeout(function(){
                vm.counter = 1
                console.log("counter = " + vm.counter)
            },3000)
        }
    },
    methods: {
        increase: function(step, e){
            this.counter += step;
            this.element = e.clientX;
        },
        coordinates: function (e){
            this.x = e.clientX;
            this.y = e.clientY;
        },
        result: function(){
            console.log("method")
            return this.counter > 20 ? "Greater than 20" : "Lesser than 20";
        }
    }
})