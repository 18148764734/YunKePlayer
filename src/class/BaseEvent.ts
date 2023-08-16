export type EventObject = {
    [props: string]: Function[]
}
//发布订阅模式
export class BaseEvent {
    $events: EventObject = {}
    constructor() {}

    //事件触发，发布
    emit(event: string, ...args: any[]) {
        if (this.$events[event]) {
            this.$events[event].forEach((cb) => {
                cb.call(this, ...args)
            })
        }
    }

    //事件监听,订阅
    on(event: string, cb: Function) {
        this.$events[event] = this.$events[event] || []
        this.$events[event].push(cb)
    }

    // 取消事件监听
    off(event: string, cb: Function) {
        if (this.$events[event]) {
            this.$events[event] = this.$events[event].filter((fn) => {
                if (cb === fn) return false
                return true
            })
        }
    }
}
