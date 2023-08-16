// 这个接口继承了 HTMLMediaElement 接口，并添加了一个额外的方法 captureStream。

// HTMLMediaElement 是 HTML5 中用于表示媒体元素（如 <audio> 和 <video>）的接口。它提供了许多方法和属性，用于控制和操作媒体元素。

// 而 HTMLMediaElementWithCaputreStream 接口在继承了 HTMLMediaElement 的基础上，增加了一个名为 captureStream 的方法。这个方法可以用于从媒体元素中捕获流式媒体。

// captureStream 方法接受一个可选参数 fps，用于指定捕获的媒体流的帧率。它会返回一个 MediaStream 对象，表示捕获到的媒体流。

// 使用这个接口，你可以在支持该方法的浏览器中，对媒体元素调用 captureStream 方法来捕获媒体流，然后你可以对这个媒体流做进一步的处理或者传输给其他地方进行播放或处理。
export interface HTMLMediaElementWithCaputreStream extends HTMLMediaElement {
    captureStream(fps?: number): MediaStream
}
