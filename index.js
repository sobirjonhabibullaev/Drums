var numOfbuttons = document.querySelectorAll(".drum").length;

// Detection of clicking buttons
for (var i = 0; i < numOfbuttons; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function(){ 
		mySound(this.textContent);
		animation(this.textContent); 
	});
}

//Detection of keypress events
document.addEventListener("keypress", function(event){ 
	mySound(event.key);
	animation(event.key);
})

// Making sound
function mySound(key){
	switch(key){
		case "w":
			var crash = new Audio("sounds/crash.mp3");
			crash.play();
		break;
		case "a":
			var kick = new Audio("sounds/kick-bass.mp3");
			kick.play();
		break;
		case "s":
			var snare = new Audio("sounds/snare.mp3");
			snare.play();
		break;
		case "i":
			var tom1 = new Audio("sounds/tom-1.mp3");
			tom1.play();
		break;
		case "j":
			var tom2 = new Audio("sounds/tom-2.mp3");
			tom2.play();
		break;
		case "k":
			var tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
		break;
		case "l":
			var tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
		break;
	}
}

function animation(currentKey){
	var pressedKey = document.querySelector("." + currentKey);
	pressedKey.classList.add("pressed");
	setTimeout(function(){
		pressedKey.classList.remove("pressed");
	}, 100);
}