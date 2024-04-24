const compact = (arr) => {
    // [false, null, 0, "", undefined, NaN]
    // 都是 false 值
    return arr.filter(item => Boolean(item));
}

console.log(compact([null, undefined, NaN, ' ']))
console.log(compact([{ name: 'Alice' }, null, { age: 30 }, undefined]))