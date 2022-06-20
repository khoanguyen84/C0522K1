const size = 15;
for(let i = 1; i <= size; i++){
    // document.write("<button>Button " + i + "</button>")

    document.write(`<button onclick='handleClick(${i})'>Button ${i}</button>`)
    // document.write(`<button onclick="alert('Button ${i}')">Button ${i}</button>`)
}

function handleClick(number){
    alert(`Button ${number}`)
}