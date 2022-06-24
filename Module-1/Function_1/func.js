function generateArray(size, min, max){
    let numbers = [];
    for(let i = 0; i < size; i++){
        numbers[i] = Math.floor(Math.random()*(max - min + 1) + min);
    }
    return numbers;
}

function printArray(array){
    return array.join();
}

function calcArrayValues(array){
    let total = array.reduce(function(preValue, currValue){
        return preValue + currValue;
    });

    return total;
}

function countEvenValues(array){
    let count = 0;
    for(let number of array){
        if(number % 2 == 0){
            count ++;
        }
    }
    return count;
}

function findValueInArray(array, value){
    return array.includes(value);
}

function process_1(){
    let size = Number(document.getElementById("size_1").value);
    let min = Number(document.getElementById("min_1").value);
    let max = Number(document.getElementById("max_1").value);
    let result = document.getElementById("result_1");
    let numbers = generateArray(size, min, max);
    result.innerHTML = "";
    result.innerHTML += printArray(numbers) + "<br>";
    let total = calcArrayValues(numbers);
    result.innerHTML += `Tổng các giá trị trong mảng là: ${total} <br>`;
    let count = countEvenValues(numbers);
    result.innerHTML += `Tổng các số chẵn có trong mảng là: ${count} <br>`;
    let findValue =  Number(document.getElementById("findvalue_1").value);
    let found = findValueInArray(numbers, findValue);
    result.innerHTML += `${findValue} ${found == true ? "có trong mảng" : "không có trong mảng"}`;
}


function process_2(){
    let size = Number(document.getElementById("size_2").value);
    let min = Number(document.getElementById("min_2").value);
    let max = Number(document.getElementById("max_2").value);
    let result = document.getElementById("result_2");
    let numbers = generateArray(size, min, max);
    result.innerHTML = "";
    result.innerHTML += printArray(numbers) + "<br>";
    let total = calcArrayValues(numbers);
    result.innerHTML += `Tổng các giá trị trong mảng là: ${total} <br>`;
    let count = countEvenValues(numbers);
    result.innerHTML += `Tổng các số chẵn có trong mảng là: ${count} <br>`;
    let findValue =  Number(document.getElementById("findvalue_2").value);
    let found = findValueInArray(numbers, findValue);
    result.innerHTML += `${findValue} ${found == true ? "có trong mảng" : "không có trong mảng"}`;
}

function process(id){
    let size = Number(document.getElementById(`size_${id}`).value);
    let min = Number(document.getElementById(`min_${id}`).value);
    let max = Number(document.getElementById(`max_${id}`).value);
    let result = document.getElementById(`result_${id}`);
    let numbers = generateArray(size, min, max);
    result.innerHTML = "";
    result.innerHTML += printArray(numbers) + "<br>";
    let total = calcArrayValues(numbers);
    result.innerHTML += `Tổng các giá trị trong mảng là: ${total} <br>`;
    let count = countEvenValues(numbers);
    result.innerHTML += `Tổng các số chẵn có trong mảng là: ${count} <br>`;
    let findValue =  Number(document.getElementById(`findvalue_${id}`).value);
    let found = findValueInArray(numbers, findValue);
    result.innerHTML += `${findValue} ${found == true ? "có trong mảng" : "không có trong mảng"}`;
}


// process();