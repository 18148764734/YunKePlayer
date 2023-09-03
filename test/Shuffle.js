/**
 * 用于打乱弹幕轨道排序
 * @description 实现经典的洗牌算法打乱数组
 * @param {any[]} arr
 */
function shuffle(arr) {
  let length = arr.length;
  while (length > 0) {
    let index = Math.floor(Math.random() * length);//获取随机索引下标
    let temp = arr[index];
    arr[index] = arr[length - 1];//从数组最后一位开始，逐渐交换随机索引下标，以实现打乱效果
    arr[length - 1] = temp;
    length--;
  }

  return arr;
}

// @test
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < 10; i++) {
  console.log(shuffle([...arr]));
}
