const clear = "C";
const additional = "+";
const subtract = "-";
const multiple = "x";
const divide = ":";
const equal = "=";
var hasChoiseOperator = false;
var statement = "";
var result = document.getElementById("result");

function enterNumber(number) {
  hasChoiseOperator = false;
  result.value += number;
  statement += number;
}
function enterOperator(operator) {
  if (hasChoiseOperator == false) {
    switch (operator) {
      case clear: {
        result.value = "";
        hasChoiseOperator = true;
        break;
      }
      case additional:
      case subtract: {
        result.value += operator;
        statement += operator;
        hasChoiseOperator = true;
        break;
      }
      case multiple: {
        result.value += operator;
        statement += "*";
        hasChoiseOperator = true;
        break;
      }
      case divide: {
        result.value += operator;
        statement += "/";
        hasChoiseOperator = true;
        break;
      }

      case equal: {
        result.value = eval(statement);
        hasChoiseOperator = false;
        break;
      }
    }

    
  }
}
