const clamp = (number: number, lower:number, upper:number) => {
    if(number < lower){
        return lower
    }
    if(number > upper){
        return upper
    }
    console.log(number)
    return number
    
}

// clamp(7, 0, 9)
// clamp(-12, -4, 5);
// clamp(18, 3, 9);
console.log(clamp(-12, -4, 5))
