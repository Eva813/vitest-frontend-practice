#  `Easy` 手寫 lodash.difference

## 題目描述

請實作一個名為 `difference` 的函式，該函式接收兩個陣列作為參數。函式的功能是回傳只在第一個陣列中存在、在第二個陣列中不存在的元素，並且避免對重複值進行多餘的操作。

```javascript
difference([], [])                   // []
difference([1, 1, 2, 3], [2, 3])     // [1, 1]
difference([1, 2, 3], [1, 2, 3, 4])	 // []
difference([4, 3, 2, 1], [1, 2, 3]); // [4]
```

## 解題

### 1.
要以第一個陣列為主，去比較第二個陣列，也就使用 filter 方式，留下第二個陣列中不存在的元素


原本有些不了解，difference([], [])  // []
如果兩個輸入數組 arr1 和 arr2 都是空數組（[]），這代表 arr1 中沒有任何元素可以進行處理，所以最後回傳空陣列。


### 2.
後來參考其他解法，用  new Set() 去除重複，再進行 filter

```ts
const difference3 = <T>(arr1: T[], arr2: T[]): T[] => {
  const blacklist = new Set(arr2);
  return arr1.filter((item) => !blacklist.has(item));
};
```