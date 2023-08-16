// Node.js 会将.cjs文件视为 CommonJS 模块，将.mjs文件视为 ECMAScript 模块。它会将.js文件视为项目的默认模块系统（除非package.json说的是 CommonJS "type": "module",）。

// 比较两个版本号之间的大小
export function compareVersion(newV, oldV) {
    const newVArray = newV.split(".").map(parseInt);
    const oldVArray = oldV.split(".").map(parseInt);
    for(let i = 0;i < Math.min(newVArray.length, oldVArray.length); i++) {
        if(newVArray[i] > oldVArray[i]) {
            return 1;
        } else if(newVArray[i] < oldVArray[i]) {
            return -1;
        } else {//这里就是相等，应该是从前往后比
            continue;
        }
    }
    return newVArray.length < oldVArray.length ? 
                -1 :
                newVArray.length === oldVArray.length ? 
                0 : 1;
}
// 首先，将新版本号和旧版本号都使用 split 方法按照点号拆分成数组，并使用 map 方法将每个拆分出来的数字转换为整数。这样得到了 newVArray 和 oldVArray 两个数组，分别表示新版本号和旧版本号的每个部分。
// 然后，使用 for 循环遍历新版本号和旧版本号数组中较短的那个数组的长度（即部分较少的版本号）。这是为了确保在长度不一致的情况下不会发生数组越界错误。
// 在循环中，依次比较新版本号数组和旧版本号数组的对应位置的值。如果新版本号的当前部分大于旧版本号的当前部分，则返回 1 表示新版本号较大；如果新版本号的当前部分小于旧版本号的当前部分，则返回 -1 表示新版本号较小；如果两者相等，则继续循环。
// 如果循环结束后新版本号数组和旧版本号数组的长度不一致，那么较短的数组的版本号更小。返回 -1 表示新版本号较小；如果两者长度相等，说明两个版本号完全相同，返回 0；否则，返回 1，表示新版本号较大。
// 总结起来，这个函数的作用是比较两个版本号的大小，并返回比较结果。返回值为 1 表示新版本号较大，返回值为 -1 表示新版本号较小，返回值为 0 表示两个版本号相等。