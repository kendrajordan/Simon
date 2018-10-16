Vue.component('sample', {

    props: ['colorclass','randomItem'],

    data: function () {

        return {
            count: 0
        }
    },

    template: '<button class="btn btn-block" v-bind:class="[ colorclass, (randomItem===colorclass)? \'active\' :\'\']" ></button>'

});

let app1 = new Vue({

    el: "#app1",

    data: {
        message: "How are you today?",
        colors: ['btn-danger', 'btn-warning', 'btn-success', 'btn-primary'],
        randomItem:"",
        computerSequence: [],
        playerSequence: [],

    },

    methods: {
      game : function() {
        // console.log(' I am here')
      this.computerSequence=[];
      this.randomItem = this.colors[Math.floor(Math.random()*this.colors.length)];
      // console.log(randomItem);
      this.computerSequence.push(this.randomItem);
      console.log(this.computerSequence);
      }
    }

});
