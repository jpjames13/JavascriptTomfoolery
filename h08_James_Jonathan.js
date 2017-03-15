//javascript for "Make Me Rich!" web app

"use strict"

//initializing variables
var startAge	= 0;
var retireAge	= 0;
var annualSave	= 0;
var startSalary	= 0;
var annualInterest	= 0;
var annualRaise	= 0;

var summaryResult;
var Result;
var Result2;

function initialize() {
	alert("In initialize(): Web App Loaded!");
	summaryResult=document.getElementById('summaryResult');
	Result=document.getElementById('Result');
	Result2=document.getElementById('Result2');

	console.log(summaryResult);

}

function clearInputs(form){

	var formElements = form.elements;
	for (var i=0; i< formElements.length; i++)
		formElements[i].value="";
}

function loadDefaults(form) {
form.reset();
}

//getNumValue to make life easier
function getNumValue(id) {
	return Number(document.getElementById(id).value);
}

//make me rich button
function makeRich(form) {
	if (!form.checkValidity()) 
	{
		alert("Input error, please make sure input data type is correct!");
	}
	else
	{

		startAge	= getNumValue('startAgeId');
		retireAge	= getNumValue('retireAgeId');
		annualSave 	= getNumValue('annualSaveId');
		startSalary	= getNumValue('startSalaryId');
		annualInterest	= getNumValue('annualIntId');
		annualRaise	= getNumValue('annualRaiseId');

		var compoundingYear = (retireAge - startAge);

		console.log("");
		
		console.log("*** input values ***")
		console.log("startAge    :",startAge);
		console.log("retireAge   :",retireAge);
		console.log("annualSavings:", annualSave);
		console.log("startSalary :",startSalary);
		console.log("annualInterests",annualInterest);
		console.log("annualRaise :", annualRaise);
		console.log("compounding years:", compoundingYear);

		//note javascript doesn't run the next line of code if the previous ones doesn't work

		clearResultsTable(Result);
		clearResultsTable(Result2);

		//calculation
		var startSavings= startSalary*(annualSave/100);
		var invest = 0;
		var currentSavings = 0;
		var interest = 0;
		var balance = 0;
		var count = 1;
		var tableRowNumber = 1;
		var tableRowNumber1 = 1;
		var retirement	= 0; 
		var salary = startSalary;
		var currentSalary = 0;


		console.log("***** testing the inputs *****")
		console.log("Age   Salary    Savings    Interest   Retirement");

		for (var i = startAge; i <= retireAge; i++)
		{
			if(i==startAge)
			{
				invest = startSavings;
				salary = startSalary;
			}
			else{
				invest = startSavings;
				salary = salary+(salary*(annualRaise/100));
			}

				count++;
				retirement += invest
				interest = retirement*(annualInterest/100);
				retirement += interest;
				currentSavings = salary*(annualSave/100);


				// write debugging info to the console
				console.log(
							 	(i),(invest),(interest),(retirement),(salary)
							); 

				//modifying the DOM
				var row = Result.insertRow(tableRowNumber);
				var row1 = (Result2).insertRow(tableRowNumber1);
				var cell0 = row.insertCell(0);
				var cell1 = row.insertCell(1);
				var cell2 = row.insertCell(2);
				var cell3 = row1.insertCell(0);
				var cell4 = row1.insertCell(1);

				cell0.innerHTML = formatNumberWithCommas(i);
				cell1.innerHTML = formatNumberWithCommas(salary);
				cell2.innerHTML = formatNumberWithCommas(currentSavings);
				cell3.innerHTML = formatNumberWithCommas(interest);
				cell4.innerHTML = formatNumberWithCommas(retirement);

				tableRowNumber++;
				tableRowNumber1++;						

		} //end of loop
	}
}//end function
/*  function clearResultsTable(table)
 *  given a table, remove all rows except the heading
 *  table.rows returns a list of the rows.
 *  table.rows.length returns the number of rows
 *  If a table has 9 rows, row(0) is the header, row(8) is last
 *  deleteRow(index) from the last to all but the (0)
 */
function clearResultsTable(table) {

	for (var i = table.rows.length; i > 1; i--) {
		table.deleteRow(i-1);
	}
}