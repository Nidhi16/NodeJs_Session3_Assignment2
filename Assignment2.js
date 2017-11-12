// Creating Operations constructor 
function Operations(operand1, operand2) {
    this.operand1 = operand1;       // declare public variable
    this.operand2 = operand2;      // declare other public variable

    // creating addition function
    this.addition = function() {
        // creating private variable privateAddResult and assigning it the result of addition
        var privateAddResult = this.operand1 + this.operand2;
        console.log("Result of addition is: ", privateAddResult);
        alert("Result of addition is: " + privateAddResult);
    };
    // creating substraction function
    this.substraction = function() {
        // creating private variable privateSubResult and assigning it the result of substraction
        var privateSubResult = Math.abs(this.operand1 - this.operand2);
        console.log("Result of substraction is: ", privateSubResult);
        alert("Result of substraction is: " + privateSubResult);
    };
    // creating multiplication function
    this.multiplication = function() {
        // creating private variable privateMulResult and assigning it the result of multiplication
        var privateMulResult = this.operand1 * this.operand2;
        console.log("Result of multiplication is: ", privateMulResult);
        alert("Result of multiplication is: " + privateMulResult);
    };
    // creating division function
    this.division = function() {
        // creating private variable privateDivResult and assigning it the result of division
        var privateDivResult;
        if (this.operand1 > this.operand2) {
            privateDivResult = this.operand1 / this.operand2;
        } else {
            privateDivResult = this.operand2 / this.operand1;
        }
        console.log("Result of division is: ", privateDivResult);
        alert("Result of division is: " + privateDivResult);
    };
}

// creating object
var operationsObj = new Operations(5, 2);

// calling properties
operationsObj.addition();
operationsObj.substraction();
operationsObj.multiplication();
operationsObj.division();
