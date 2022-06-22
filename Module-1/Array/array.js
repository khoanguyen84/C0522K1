var size = 0;
var min = 0;
var max = 0;
var numbers = [];
var totalOddNumber = 0;
var countOfPrime = 0;
var countOfPerfectSquare = 0;
var trArray = document.getElementById('trArray');
var tdTotalOddNumber = document.getElementById('totalOddNumber');
var tdCountOfPrime = document.getElementById('countOfPrime');
var tdCountOfPerfectSquare = document.getElementById('countOfPerfectSquare');

function process(){
    totalOddNumber = 0;
    countOfPrime = 0;
    countOfPerfectSquare = 0;
    size = Number(document.getElementById('size').value);
    min = Number(document.getElementById('min').value);
    max = Number(document.getElementById('max').value);
    for(let i =0; i < size; i++){
        numbers[i] = Math.floor(Math.random()*(max - min + 1) + min);
    }

    let tds = "";
    for(let i =0; i < size; i++){
        tds += `<td>${numbers[i]}</td>`;
    }
    trArray.innerHTML = tds;

    for(let i =0; i < size; i++){
        if(numbers[i] % 2 !=0 ){
            totalOddNumber += numbers[i];
        }
    }
    tdTotalOddNumber.innerHTML = totalOddNumber;

    let isPrime = true;
    for(let i = 0; i < size; i++){
        isPrime = true;
        for(let j = 2; j < numbers[i]; j++){
            if(numbers[i] % j == 0)
            {
                isPrime = false;
                break;
            }
        }
        if(isPrime == true){
            countOfPrime++;
        }
    }
    tdCountOfPrime.innerHTML = countOfPrime;

    for(let i = 0; i < size; i++){
        // if(Number.isInteger(Math.sqrt(numbers[i])) == true){
        //     countOfPerfectSquare ++;
        // }
        if(Math.floor(Math.sqrt(numbers[i])) == Math.sqrt(numbers[i])){
            countOfPerfectSquare ++;
        }
    }
    tdCountOfPerfectSquare.innerHTML = countOfPerfectSquare;
}
