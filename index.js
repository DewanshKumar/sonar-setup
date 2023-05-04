
let reducer = (a, b, c) => {
    if(c === 'a'){
        return a + b;
    }else if(c === 's'){
        return a - b;
    }else if(c === 'm'){
        return a * b;
    }else{
        return a / b;
    }
}


console.log(reducer(12, 34, 'a'));
console.log(reducer(12, 34, 's'));
console.log(reducer(12, 34, 'm'));
console.log(reducer(12, 34, 'd'));
