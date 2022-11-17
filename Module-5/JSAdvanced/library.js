function sum(...rest){
    let total = 0;
    for(let i = 0; i < rest.length; i++){
        total += rest[i]
    }
    return total;
}

export function minus(n1, n2){
    return n1 - n2;
}

export function times(n1, n2){
    return n1 * n2;
}

export function useState(initState){
    return [initState, function setState() {} ]
}
export default sum;