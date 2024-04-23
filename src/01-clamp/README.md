# Day 01. `Easy` 手寫 clamp

## 題目描述

你正在開發一個處理數值資料的系統。請寫一個名為 `clamp` 的函式，它需要三個參數：

- 一個數值 `number`
- 一個最小值 `lower`
- 一個最大值 `upper`

此函式應確保輸出的 `number` 始終落在指定的範圍内，包括最小值和最大值本身。你會如何實作這個 `clamp` 呢?

```javascript
// 在範圍中，返回原值
clamp(7, 0, 9); // => 7

// 小於 lower，返回 lower
clamp(-12, -4, 5); // => -4

// 大於 upper，返回 upper
clamp(18, 3, 9); // => 9
```

## 解題

以 number 作為比較的基準點，去相對與最小值和最大值
- 如果 number 小於 lower，則返回 lower。
- 如果 number 大於 upper，則返回 upper。
- 如果 number 已經在 lower 和 upper 之間，則直接返回 number。

2. 另可以使用 Math.min, Math.max
 - number 勢必要比 lower 大： `Math.max(number, lower)`
 - 接續，再與 upper 相比較，挑出大的值  `Math.min(..., upper) `
 - 確保資料位於該區間