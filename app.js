/****************************
What this does:

1) On load: ask how many blocks you would like to play with. (This will already be in the html as a form).
2) create that many divs.
3) make each div into an object.
4) assign each object a random color property.
5) store all of those objects in an array.
6) append that many divs to the dom
7) on click, transition that div to a different color and display "correct message"
*****************************/



$(document).ready(function() {
  var div = {};
  var divStorage = [];

  function DivCreator() {
    this.color = randomColor();
  }

  function randomColor() {
    var letters = "0123456789ABCDEF";
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function randomNumber(min, max){
      return Math.floor(Math.random() * (1 + max - min) + min);
  }


  $("form").on("submit", function(event) {
    event.preventDefault();

    var winningBox = randomNumber(0, (parseInt($("#howManyBlocks").val())-1));
    console.log(winningBox);

    for(var i = 0; i < $("#howManyBlocks").val(); i++) {
      div = new DivCreator();
      divStorage.push(div);
      $("#game").append('<div id="box' + i + '"></div>').fadeIn(1500);
      $("#box" + i).css('background-color', div.color);
      $("#box" + i).data("boxNumber", i);

    }

    $("#game").append('<button class="restart">RESTART</button>');
    $("form").remove();

    $("#game").on("click", "div", function() {
      console.log($(this).data("boxNumber"));
      if ($(this).data("boxNumber") == winningBox) {
        $("#game").css('display', 'none');
        $("body").append('<h2 id="nailedit">NAILED IT!</h2><br><button class="restart">RESTART</button>')
      }
    });

  });







});
