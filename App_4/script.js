new Vue({
    el: "#app",
    data:{
        attachRed: false,
        color: "blue"
    },
    computed:{
        divClasses: function(){
            return{
                red: this.attachRed,
                blue: !this.attachRed
            }
        }
    }
})