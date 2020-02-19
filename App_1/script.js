new Vue({
    el: '#app',
    data: {
        title: 'Sup peeps!'
    },
    methods:{
        changeTitle: function(e){
            this.title = e.target.value;
        }
    }
})