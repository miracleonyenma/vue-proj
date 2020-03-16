new Vue({
    el: '#app',
    data: {
        title: 'Sup peeps!',
        link: '../app_1',
        finishedLink: '<a href="../app_1">App_1</a>'
    },
    methods:{
        sayStuff: function (e){
            this.title = 'Sup'
            return this.title
        }
    }
})