var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "L":
      var kickbass  = new Audio("kick-bass.mp3");
      kickbass.play();
      break;

    case "A":
      var snare1 = new Audio("crash.mp3");
      snare1.play();
      break;

    case "V":
      var tom1 = new Audio('tom-1.mp3');
      tom1.play();
      break;

    case "A":
      var tom2 = new Audio('tom-2.mp3');
      tom2.play();
      break;

    case "N":
      var tom3 = new Audio('tom-3.mp3');
      tom3.play();
      break;

    case "Y":
      var tom4  = new Audio('tom-4.mp3');
      tom4.play();
      break;

    case "A":
      var crash = new Audio('crash.mp3');
      crash.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

    
