




var app = new Vue({

    el: "#app",

    data: {
        message: 'Click the "Start Game" button to begin.',
        currentButton: '',
        sequence: [],
        playerSequence: [],
        playingId: 0,
        colors: ['red', 'yellow', 'green', 'blue'],
        randomColor: ''


    },

    methods: {

      computerTurn: function () {
        randomColor = this.colors[Math.floor(Math.random()*this.colors.length)];
        console.log(randomColor);
        this.sequence.push(randomColor);
        this.playSequence();


      },

        tap: function (color) {

            var self = this;

            self.currentButton = color;
            setTimeout(function() {
                self.currentButton = '';
            }, 300);
        },

        playSequence: function () {

            var self = this;
            self.message = "Pay attention...here we go!";

            var intervalId = setInterval(function () {

                if (self.playingId < self.sequence.length) {
                    self.tap(self.sequence[self.playingId]);
                    self.playingId++;
                }
                else {
                    clearInterval(intervalId);
                    self.playingId = 0;
                    self.message = "Your turn!";
                }

            }, 600);
          this.playerTurn();

        },

        playerTurn: function () {
          for (var i=0;i<this.sequence.length;i++){
            this.playerSequence.push(this.tap(this.color));

            if (this.playerSequence[i]==this.sequence[i]) {
              console.log('Keep going!');

            } else {
              console.log('Game Over');
            }
          }

        }



    }

});
