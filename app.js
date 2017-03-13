

let flag = 'player1'
var classArr = document.getElementsByClassName("tiles");

var myFunction = function() {
	if(flag === 'player1') {
		this.style.backgroundColor="#FDFF47";
		document.getElementById('player').innerHTML = 'player 2s turn';
		flag = 'player2'
	} else {
		this.style.backgroundColor='blue';
		document.getElementById('player').innerHTML = 'player 1s turn';
		flag = 'player1'
	}
	console.log(this);
  // var attribute = this.getAttribute(this);

};

for (var i = 0; i < classArr.length; i++) {
    classArr[i].addEventListener('click', myFunction, false);
}

var playerToggle = function(){

}
