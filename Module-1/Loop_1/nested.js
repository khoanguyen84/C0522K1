for (let row = 1; row <= 5; row++) {
    let stars ="";
    // for(let star = 1; star <= 10; star++){
    //     stars += " * "
    // }
    // let star = 1;
    // while(star <= 10){
    //     stars += " * "
    //     star++;
    // }
    let star = 1;
    do{
        stars += " * ";
        star++;
    }
    while(star <= 10);
    console.log(stars);
}
