**題目描述**

請實作一個 `dropWhile` 函式。此函式接受兩個參數，第一個是參數是一個陣列，它可以是任何類型的陣列；第二個是一個 predicate 函式，會接受陣列中的元素，如果返回為真，則表示該元素應該被丟棄，直到返回的不為真則停止。

`dropWhile` 會回傳一個新的陣列，且不應改動到原始陣列。回傳的陣列從原始陣列的第一個不滿足 predicate 條件的元素開始，直到陣列中的最後一個元素，若每個元素皆滿足 predicate 函式，則回傳空陣列。

```jsx
// 範例一
dropWhile([1, 2, 3, 4, 5, 6], (value) => value < 4); 
// => [4, 5, 6]

// 範例二
dropWhile([0, 1, 2], (value) => value < 5); 
// => []

// 範例三
dropWhile([0, 6, 1, 2], (value) => value < 5);
// => [6, 1, 2]
```

一開始沒理解到題目是要在傳入第一個
本來要使用 forEach 讓他回圈比較
因為 forEach 不能中途停止 ; for 迴圈允許在滿足某些條件時直接使用 break 或 return 來退出迴圈。

若使用 forEach 建議可以 

```js
const dropWhile = (arr, predicate) => {
    let result = [];
    let dropping = true; // 初始設定為正在丟棄元素

    arr.forEach(element => {
        if (dropping && !predicate(element)) {
            // 一旦找到第一個不符合條件的元素，停止丟棄
            dropping = false;
        }

        if (!dropping) {
            // 不再丟棄時，開始收集元素
            result.push(element);
        }
    });

    return result;
}
```