(function(){

angular
	.module("TTTapp")
	.factory("fireBoard", fireBoardFunc);

fireBoardFunc.$inject = ['$firebase'];

function fireBoardFunc($firebase){

	var fireBoard = function(){

		var ref = new Firebase("https://floydmanny.firebaseio.com/gameBoard");
		var obj = $firebase(ref).$asObject();

		this.initialization = initialization;

		function initialization(){
			// making temp = an array
			var temp = [];
			// making [i] increment by 1 until 8
			// and making temp[i] equal to empty strings
			for (i = 0; i < 9; i++){
				temp[i] = "";
			}
			// create a property of the firebase called board
			// and save the data
			obj.board = temp;
			obj.$save();
		}
		// calling the function
		initialization();
		// returning the data to our view
		return obj;


		function clickBox($index){

			self.clickCount++
			obj.$save();
			if (self.gameBoard.board[$index] === ""){
				
				if (self.turnCounter === 1){
					self.gameBoard.board[$index] = "X";
					self.turnCounter = 2;
					obj.$save();
				}
				else {
					self.gameBoard.board[$index] = "O";
					self.turnCounter = 1;
					obj.$save();
				}
			}
			else {
				return false;
			}
			winCheck(self.gameBoard.board[$index]);
		}

	}


	// returning the function
	return fireBoard;
}



		




})();