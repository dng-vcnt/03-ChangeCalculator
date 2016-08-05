$(document).ready(function(event) {
	console.log("ready");

	$('#btnCalculate').click(function() {

		var sale = $('#sale').val();
		var payment = $('#payment').val();
		console.log(sale + "," + payment);

		if (payment < 0 || sale < 0) {
			alert("Please enter valid amounts");
		}

		if ((payment - sale) < 0) { 
			alert("Sorry, payment amount is not enough for sale.");
			$('#sale').val(sale);
		} else {

			// Calculate difference of payment and sale
			var updatedChange = Math.round((payment - sale) * 100);
			console.log("updated: " + updatedChange);


			// Calculate dollar change
			var dollarChange = Math.floor(updatedChange / 100);
			updatedChange = updatedChange % 100;
			console.log("dollar: " + dollarChange);
			console.log("  update: " + updatedChange);

			// Calculate quarters change
			var quarterChange = Math.floor(updatedChange / 25);
			updatedChange = updatedChange % 25;
			console.log("quarter: " + quarterChange);
			console.log("  update: " + updatedChange);

			// Calculate dimes change
			var dimeChange = Math.floor(updatedChange / 10);
			updatedChange = updatedChange % 10;
			console.log("dimes: " + dimeChange);
			console.log("  update: " + updatedChange);

			// Calculate nickels change
			var nickelChange = Math.floor(updatedChange / 5);
			updatedChange = updatedChange % 5;
			console.log("nickels: " + nickelChange);
			console.log("  update: " + updatedChange);

			// Calculate pennies change
			var pennyChange = Math.floor(updatedChange / 1);
			console.log("pennies: " + pennyChange);

			// Output
			$('#dollars').text(dollarChange);
			$('#quarters').text(quarterChange);
			$('#dimes').text(dimeChange);
			$('#nickels').text(nickelChange);
			$('#pennies').text(pennyChange);
		}


	});
});