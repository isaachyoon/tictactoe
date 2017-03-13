


var classArr = document.getElementsByClassName("tiles");

var myFunction = function() {
	console.log(this);
	this.style.backgroundColor="#FDFF47";
  var attribute = this.getAttribute(this);
  console.log(attribute);
};

for (var i = 0; i < classArr.length; i++) {
    classArr[i].addEventListener('click', myFunction, false);
}


document.getElementById('player').innerHTML = 'player 1 start';
