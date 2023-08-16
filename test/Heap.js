// 使用堆实现优先队列，用来优化视频跳帧的体验和切换速度
class PriorityQueue {
    // 传入并设置比较器
    constructor(compare) {
        this.compare = compare;
        this.queue = [];//这是用数组来实现堆队列
    }
// 数组长度
    get length() {
        return this.queue.length;
    }

    /**
     * @description 返回索引为index的元素的父节点
     * @param {number} index 
     * @returns {number}
     */
    parent(index) {
        return Math.ceil(index / 2 - 1);
    }

    left(index) {
        return index * 2 + 1;
    }

    right(index) {
        return index * 2 + 2;
    }

    swap(a,b) {
        let index = 0;
        index = this.queue[a];
        this.queue[a] = this.queue[b];
        this.queue[b] = index;
    }
    // 向优先队列中增加数据
    add(value) {
        this.queue.push(value);
        let current = this.queue.length - 1;
        while(this.parent(current) >= 0 && this.compare(this.queue[this.parent(current)], this.queue[current]) < 0) {
            this.swap(this.parent(current), current);
            current = this.parent(current);
        }
    }

    // 从优先队列中取出数据
    pop() {
        this.swap(0,this.queue.length - 1);
        const value = this.queue.pop();
        let current = 0;
        while(current < this.queue.length) {
            // console.log(current)
            let left = this.left(current);
            let right = this.right(current);
            let maxIndex = 0;
            if(left < this.queue.length && right >= this.queue.length) {
                maxIndex = this.left(current);
            } else if(left >= this.queue.length && right >= this.queue.length) {
                maxIndex = current;
            } else {
                if(this.compare(this.queue[left], this.queue[right]) < 0) {
                    maxIndex = this.right(current);
                } else {
                    maxIndex = this.left(current);
                }
            }
            if(this.compare(this.queue[maxIndex], this.queue[current]) > 0) {
                this.swap(maxIndex, current);
                current = maxIndex;
            } else break;
        }

        return value;
    }

    print() {
        console.log(JSON.stringify(this.queue))
    }
}
// 定义一个自己的比较器，通过对象里面的time属性来进行比较,如果时间相等，则比较priority哪个大，待会要把这个比较器传到上面的队列里面
function compare(obj1,obj2) {
    if(obj1.time === obj2.time) {
        return obj1.priority - obj2.priority;
    } 
    return obj1.time - obj2.time;
}
let Q = new PriorityQueue(compare)

Q.add({
    time: 5,
    priority: 10
})
Q.add({
    time: 5,
    priority: 19
})
Q.add({
    time: 6,
    priority: 0
})
Q.add({
    time: 6,
    priority: 0
})
Q.print()
console.log(Q.pop())
console.log(Q.pop())
console.log(Q.pop())
console.log(Q.pop())