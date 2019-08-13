new Vue({
    el: '#app',
    data:{
        firstName: 'a',
        lastName: ''
    }, methods: {
        changeName: function (event) {
            this.firstName = event.target.value;
        },
        upperFirstName: function () {
            return this.firstName.toUpperCase();
        }
    }
});