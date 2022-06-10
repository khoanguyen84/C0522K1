function showPassword(){
    document.getElementsByTagName('h1')[0].innerText = 
        document.getElementsByTagName('input')[0].value;

        document.getElementsByTagName('h1')[0].style.color = "red";
        document.getElementsByTagName('h1')[0].style.backgroundColor = "yellow";
}

function controlInput(){
    if(document.getElementById("ckbControl").checked == true){
        document.getElementById("message").disabled = ""
    }
    else{
        document.getElementById("message").disabled = "true"
    }
}

function enterNumber(){
    let number =  window.prompt("Enter number");
    document.getElementById("result").innerText = number;
}