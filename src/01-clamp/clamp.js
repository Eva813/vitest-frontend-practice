const clamp = (number, lower, upper) => {
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
// 函式應確保輸出的 `number` 始終落在指定的範圍内，包括最小值和最大值本身。你會如何實作這個 `clamp` 呢?

const clampMath = (number, lower, upper) => {
    return Math.min(Math.max(number, lower) ,upper)
}

console.log(clampMath(-12, -4, 5))