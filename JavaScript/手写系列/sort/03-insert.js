// 类似于打扑克拿牌，不一样的是每次放进一个新牌，固定从右边找
function insert(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

const arr = [1, 3, 2, 4, 5, 88, 4];

insert(arr);
console.log("arr", arr);
