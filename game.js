// var bttn = document.getElementById("start-bttn");
// bttn.onclick = function() {
  function startGame () {
 
        myGame.start();

    
  }
  // }
  var scale = 5;
  var pausado = false;
  var counter = 3;
  var players = 4;

  var myGame = {
    canvas: document.createElement("canvas"),
    start: function() {
      // this.canvas.zIndex = "1";
      this.canvas.width = 800;
      this.canvas.height = 550;
      this.canvas.style.background = "#434b4d";
      this.canvas.style.border = "1px solid green"
      this.context = this.canvas.getContext("2d");
      document.getElementById('start-game').appendChild(this.canvas);
      this.interval = setInterval(updateMyGame, 30);
    },
    stop : function(winner, color) {
      console.log("algo");
      clearInterval(this.interval);
      this.context.font = "50px serif";
      this.context.fillStyle = color;
      this.context.textAlign = "center";
      this.context.fillText(winner, this.canvas.width/2, this.canvas.height/2);
    }
  }


  function updateMyGame () {
    if (pausado) {
      return;
    }
      player1.update();
      player2.update();
      // player3.update();
      // player4.update();
      player1.newPos();
      player2.newPos();
      // player3.newPos();
      // player4.newPos();

      if (player1.collision(player2.trail) || /*player1.collision(player3.trail) || 
      player1.collision(player4.trail) ||*/ player1.collision(player1.trail) ||  player1.bordes()) {
        console.log("azul");
        // myGame.stop("Red Wins!", "red");
      } else if (player2.collision(player1.trail) || player2.collision(player2.trail) || 
      /*player2.collision(player3.trail) || player2.collision(player4.trail) || */player2.bordes()) {
        console.log("rojo");
        // myGame.stop("Blue Wins!", "blue");
       } //else if (player3.collision(player1.trail) || player3.collision(player2.trail) || 
      // player3.collision(player3.trail) || player3.collision(player4.trail) || player3.bordes()) {
      //   console.log("verde");
      //   // myGame.stop("Blue Wins!", "blue");
      // } else if (player4.collision(player1.trail) || player4.collision(player2.trail) || 
      // player4.collision(player3.trail) || player4.collision(player4.trail) || player4.bordes()) {
      //   console.log("amarelo");
      //   // myGame.stop("Blue Wins!", "blue");
      // } 
  };
  
  startGame();
// }