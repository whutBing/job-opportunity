// 将数字插入到已排好序的最后一位

function select(arr) {
  for (let i = 0; i < arr.length; i++) {
    // i 指向已排好序的最后一位
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      minIndex = arr[j] < arr[minIndex] ? j : minIndex;
    }
    swap(arr, i, minIndex);
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

const arr = [1, 3, 2, 4, 5, 88, 4];

select(arr);
console.log(arr);
