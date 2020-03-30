new Vue({
    el: "#app",
    data:{
        attachRed: false,
        color: "blue",
        newcolor: "#21adf4",
        width: 100
    },
    computed:{
        divClasses: function(){
            return{
                red: this.attachRed,
                blue: !this.attachRed
            }
        },
        setWidth: function(){
            return{
                width: this.width + "px"
            }
        }
    }
})