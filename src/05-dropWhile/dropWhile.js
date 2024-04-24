const dropWhile = (arr, fn) =>{
    let newArr = []
    let idx = 0
    for (let i = 0; i < arr.length; i++){

    }

    return newArr
}


const dropWhile2 = (array, predicate) =>{

    // 對應找到 index
    let dropIndex = array.findIndex(element => !predicate(element));
    console.log('iii', dropIndex)

    // 檢查是否每個元素都滿足條件，若是則返回空陣列
    if (dropIndex === -1) {
        return [];
    }

    // 使用 slice 方法返回從 dropIndex 到陣列結束的新陣列
    return array.slice(dropIndex);
}

console.log('qq',dropWhile2([1, 2, 3, 4, 5, 6], (value) => value < 4))
console.log('qq',dropWhile2([0, 1, 2], (value) => value < 5))
// console.log('qq',dropWhile2([0, 6, 1, 2], (value) => value < 5))
