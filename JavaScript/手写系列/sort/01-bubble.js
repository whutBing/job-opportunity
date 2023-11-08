function bubble(arr) {
  // 大数沉底
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        swap(arr, i, j);
      }
    }
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
const arr = [1, 3, 2, 4, 5, 88, 4];
// swap(arr, 1, 2);
bubble(arr);
console.log("aa", arr);
