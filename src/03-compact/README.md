## 🔸 題目描述

請實作一個 compact 效用函式。 compact 能將輸入的陣列中的 false、null、0、空字串、undefined 和 NaN 都去除，請實作此 `compact` 函式。

```javascript
// 範例一
compact([0, 1, false, 2, '', 3, 'hello'])
// => [1, 2, 3, 'hello']

// 範例二
compact([null, undefined, NaN, ' '])
// =>[' ']

// 範例三
compact([{ name: 'Alice' }, null, { age: 30 }, undefined])
// =>[{ name: 'Alice' }, { age: 30 }]
```

要去除的 false、null、0、空字串、undefined 和 NaN 都是 falsy 值，可以直接 filter 陣列
