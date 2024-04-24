const difference = (a, b) => {
    // 函式的功能是回傳只在第一個陣列中存在、在第二個陣列中不存在的元素，並且避免對重複值進行多餘的操作。
    return a.filter((item) => !b.includes(item));
}

console.log(difference([2, 1], [2, 3])) // [1] 
console.log(difference([], [])) // [] 

const difference2 = (arr1, arr2)=>{
    const newArr2 = new Set(arr2)
    return arr1.filter((item) => !newArr2.has(item))
}

console.log(difference2([], [])) // []  不存在任何元素可以被排除，因此最終結果是一個空數組 []