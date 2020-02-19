new Vue({
    el: '#app',
    data: {
        title: 'Sup peeps!'
    },
    methods:{
        sayStuff: function (e){
            return document.referrer
        }
    }
})