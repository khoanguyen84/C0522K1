function process() {
  // 1. Lấy được giá trị salary
  let salary = Number(document.getElementById("salary").value);
  // 2. Dựa vào salary => tax
  let taxAmount = 0;
  let net = 0;
  switch (true) {
    case salary <= 5000000: {
      taxAmount = (salary * 5) / 100;
      break;
    }
    case salary > 5000000 && salary <= 10000000: {
      taxAmount = (salary * 10) / 100;
      break;
    }
    case salary > 10000000 && salary <= 18000000: {
      taxAmount = (salary * 15) / 100;
      break;
    }
    case salary > 18000000 && salary <= 32000000: {
      taxAmount = (salary * 20) / 100;
      break;
    }
    case salary > 32000000 && salary <= 52000000: {
      taxAmount = (salary * 25) / 100;
      break;
    }
    case salary > 52000000 && salary <= 80000000: {
      taxAmount = (salary * 30) / 100;
      break;
    }
    case salary > 80000000: {
      taxAmount = (salary * 35) / 100;
      break;
    }
  }
  // 3. đưa tax amount vào input tax amount
  document.getElementById("taxAmount").value = taxAmount.toLocaleString('vi', {
                                                                                    style: 'currency',
                                                                                    currency: 'vnd',
                                                                                });
  // 4. tính NET và đưa giá trị này vào input NET
  document.getElementById("net").value = (salary - taxAmount).toLocaleString('vi', {
                                                                                    style: 'currency',
                                                                                    currency: 'vnd',
                                                                                });           
}

function cancel() {
    // gán các input về empty
    document.getElementById("salary").value = null;
    document.getElementById("taxAmount").value = null;
    document.getElementById("net").value = null;
    document.getElementById("salary").focus();
}

document.addEventListener("keydown", handleKeydown);
const enterKey = 13;
const escKey = 27;
function handleKeydown(event){
    if(event.keyCode == enterKey){
        process();
    }   
    if(event.keyCode == escKey){
        cancel();
    }
}
