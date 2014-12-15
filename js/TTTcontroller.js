(function(){

angular
	.module("TTTapp")
	.controller("TTTcontroller", TTTcontrollerFunc);

// TTTcontrollerFunc.$inject = ['fireBoard']

function TTTcontrollerFunc(){

	var self = this;
	self.floydm = document.getElementById("floydm");
	self.mannym = document.getElementById("mannym");

	self.startTimer = startTimer;
	self.resetGame = resetGame;
	self.clickBox = clickBox;
	self.turnCounter = 1;
	self.gameBoard = new Array(9);
	self.playerOneScore = 0;
	self.playerTwoScore = 0;
	self.clickCount = 0;
	self.win = false;

	function clickBox($index){

		self.clickCount++
		if (self.gameBoard[$index] === undefined){
			
			if (self.turnCounter === 1){
				self.gameBoard[$index] = "X";
				self.turnCounter = 2;
			}
			else {
				self.gameBoard[$index] = "O";
				self.turnCounter = 1;
			}
		}
		else {
			return false;
		}
		winCheck(self.gameBoard[$index]);
	}

	function winCheck(symbol){

		if ((self.gameBoard[0] === symbol && self.gameBoard[1] === symbol && self.gameBoard[2] === symbol) ||
			(self.gameBoard[3] === symbol && self.gameBoard[4] === symbol && self.gameBoard[5] === symbol) ||
			(self.gameBoard[6] === symbol && self.gameBoard[7] === symbol && self.gameBoard[8] === symbol) ||
			(self.gameBoard[0] === symbol && self.gameBoard[3] === symbol && self.gameBoard[6] === symbol) ||
			(self.gameBoard[1] === symbol && self.gameBoard[4] === symbol && self.gameBoard[7] === symbol) ||
			(self.gameBoard[2] === symbol && self.gameBoard[5] === symbol && self.gameBoard[8] === symbol) ||
			(self.gameBoard[0] === symbol && self.gameBoard[4] === symbol && self.gameBoard[8] === symbol) ||
			(self.gameBoard[2] === symbol && self.gameBoard[4] === symbol && self.gameBoard[6] === symbol)
			){
				if (symbol === "X"){
					self.playerOneScore++;
				}
				else if (symbol === "O") {
					self.playerTwoScore++;
				}
				self.clickCount = 0;
				self.win = true;
				clearBoard();
				self.win = false;
		}
		else if (self.clickCount >= 9 && self.win == false){
			clearBoard();
			self.clickCount = 0;
		}
	
	}

	function clearBoard(){
			
		self.gameBoard = new Array(9);
	}

	function startTimer(){
		
		var count = 30;
		var counter = setInterval(timer, 1000);	

		function timer(){
			count = count - 1
			if (count < 0){
				if (self.playerOneScore > self.playerTwoScore){
					self.floydm.style.display = "block";
				}
				else if (self.playerTwoScore > self.playerOneScore) {
					self.mannym.style.display = "block";
				}
				clearBoard();
				clearInterval(counter);
				return;
			}
			document.getElementById("countdown").innerHTML = "Time: " + count
		}
	}

	function resetGame(){
		self.gameBoard = new Array(9);
		self.clickCount = 0;
		self.turnCounter = 1;
		self.win = false;
		self.playerOneScore = 0;
		self.playerTwoScore = 0;
		self.floydm.style.display = "none";
		self.mannym.style.display = "none";
	}






	
	

		 





	  

		 


			

};


















})();

