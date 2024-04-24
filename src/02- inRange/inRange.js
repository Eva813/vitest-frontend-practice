const inRange = (value, end, start = 0)=>{
    return Math.min(start,end) <= value &&  value < Math.max(start,end)
}
console.log('ss',inRange(3, 2, 4) )
console.log('ss',inRange(4, 8))

export default inRange;