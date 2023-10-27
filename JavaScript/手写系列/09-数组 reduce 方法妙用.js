// 都是 reduce 的使用

// 1.数组拍平
function flatten(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
}
console.log(flatten([[1, 2], 3]));

// 2.统计字母个数
function count(str) {
  const arr = str.split("");
  return arr.reduce((pre, cur) => {
    pre[cur] = (pre[cur] || 0) + 1;
    return pre;
  }, {});
}
console.log(count("aabcd"));
