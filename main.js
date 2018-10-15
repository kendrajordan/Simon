
var app = new Vue({
  el:"#app",
  data:{
    buttons:[left,right,up,down],
  },
  method:{
    game:{
      let randomItem = this.buttons[Math.floor(Math.random()*this.buttons.length)];
      console.log(randomItem);
    }

  }
})
