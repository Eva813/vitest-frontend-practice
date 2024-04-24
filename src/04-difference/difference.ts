const difference = (arr1: number[], arr2: number[])=>{
    const newArr2 = new Set(arr2)
    return arr1.filter((item) => !newArr2.has(item))
}

export default difference