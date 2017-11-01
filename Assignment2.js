function Operations(operand1, operand2) {
    this.operand1 = operand1;
    this.operand2 = operand2;
    var privateVariable = 'abcd123456'; // private variable

    this.addition = function() {
        var addResult = this.operand1 + this.operand2;
        console.log("Result of addition is: ", addResult);
        alert("Result of addition is: " + addResult);
    };
    this.substraction = function() {
        var subsResult = Math.abs(this.operand1 - this.operand2);
        console.log("Result of substraction is: ", subsResult);
        alert("Result of substraction is: " + subsResult);
    };
    this.multiplication = function() {
        var mulResult = this.operand1 * this.operand2;
        console.log("Result of multiplication is: ", mulResult);
        alert("Result of multiplication is: " + mulResult);
    };
    this.division = function() {
        var divResult;
        if (this.operand1 > this.operand2) {
            divResult = this.operand1 / this.operand2;
        } else {
            divResult = this.operand2 / this.operand1;
        }
        console.log("Result of division is: ", divResult);
        alert("Result of division is: " + divResult);
    };
    this.displayPrivateVariable = function() {
        console.log("Private variable is :", privateVariable);
        alert("Private variable is :" + privateVariable);
    };
}

var operationsObj = new Operations(5, 2);
operationsObj.addition();
operationsObj.substraction();
operationsObj.multiplication();
operationsObj.division();
operationsObj.displayPrivateVariable();