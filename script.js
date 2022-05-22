//Function runs on the click of a button
function budgetCalculator() {
	var x = document.getElementById("money").value;
	var y = $("input[type='radio'][name='cost']:checked").val();
	//Logic that checks the values the user inputed and checks if the values are between certain numbers and gives the user a response based on that
	//Checks the money value the user entered in the text box and if it is between a certain value and checks if the user inputed clicked "a little" or "a lot" on the radio on the website    
	if (x >= 500 && y == 1 && 799 >= x) {
		document.getElementById("response").innerHTML = "You should buy a low cost gaming PC";
	}
	else if (x >= 500 && y == 2 && 799 >= x) {
		document.getElementById("response").innerHTML = "You should build a gaming PC with parts from the low cost section";
	}
	else if (x >= 800 && y == 1 && 1499 >= x) {
		document.getElementById("response").innerHTML = "You should buy a medium cost gaming PC";
	}
	else if (x >= 800 && y == 2 && 1499 >= x) {
		document.getElementById("response").innerHTML = "You should build a gaming PC with parts from the medium cost section";
	}
	else if (x >= 1500 && y == 1 && 1999 >= x) {
		document.getElementById("response").innerHTML = "You should buy a high cost gaming PC";
	}
	else if (x >= 1500 && y == 2 && 1999 >= x) {
		document.getElementById("response").innerHTML = "You should build a gaming PC with parts from the high cost section";
	}
	else if (x >= 2000 && y == 1) {
		document.getElementById("response").innerHTML = "You should buy a max cost gaming PC";
	}
	else if (x >= 2000 && y == 2) {
		document.getElementById("response").innerHTML = "You should build a gaming PC with parts from the max cost section";
	}
	else if (x < 500 && y == 1 || y == 2) {
		document.getElementById("response").innerHTML = "You should save up more money to get a gaming PC";
	}
	else {
		document.getElementById("response").innerHTML = "You didn't fill in the sections correctly";
	}
}
