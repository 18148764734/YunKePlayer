import HTTPRequest from '../../mp4/net/HTTPRequest'
// MoovBoxInfo 类型别名定义了一个叫做 MoovBoxInfo 的类型，它是一个对象类型，并具有多个可选的属性。这个类型别名用于表示媒体文件中的 moov box（Movie Box）的信息。
// 在 MoovBoxInfo 类型别名中，包含了以下可选属性：
// duration 属性，它的类型是数字，用于表示媒体文件的总时长。
// timescale 属性，它的类型是数字，用于表示媒体文件的时间刻度。
// isFragmented 属性，它的类型是布尔值，用于表示媒体文件是否是分段的。
// isProgressive 属性，它的类型是布尔值，用于表示媒体文件是否是逐渐加载的。
// hasIOD 属性，它的类型是布尔值，用于表示媒体文件是否包含 IOD（Initial Object Descriptor）。
// created 属性，它的类型是日期对象 Date，用于表示媒体文件的创建时间。
// modified 属性，它的类型是日期对象 Date，用于表示媒体文件的修改时间。
// tracks 属性，它的类型是一个 MediaTrack 数组，用于表示媒体文件中的轨道。
// [props: string]: any 表示可以包含其他任意名称和类型的属性。
export type MoovBoxInfo = {
    duration?: number
    timescale?: number
    isFragmented?: boolean  //分段（Segmentation）用来区分是不是流媒体，是流媒体就会分段
    isProgressive?: boolean  //逐加加载
    hasIOD?: boolean
    created?: Date
    modified?: Date
    tracks?: MediaTrack[]
    [props: string]: any
}
// 在媒体文件中，轨道（Track）是用于存储和表示不同类型媒体数据的独立部分。每个轨道可以包含特定类型的音频、视频、字幕等媒体内容。
// 媒体文件通常由多个轨道组成，每个轨道都包含了一种或多种类型的媒体数据。例如，一个视频文件可能包含一个视频轨道和一个音频轨道，分别存储视频和音频的数据。
export type MediaTrack = {
    id: number
    created?: Date
    modified?: Date
    volume?: number
    track_width?: number
    track_height?: number
    timescale?: number
    duration?: number
    bitrate?: number
    codec?: string
    language?: string
    [props: string]: any
}
// 限定内容类型
export type ContentType =
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data'
    | 'application/json'
    | 'text/xml'

export type RequestHeader = {
    'Content-Type'?: ContentType  //加问号代表可存在可不存在
    Range?: string
    Authroization?: string
}

// ResponseType 类型别名定义了一个叫做 ResponseType 的类型，它的取值只能是 'arraybuffer'、'text'、'blob'、'document' 或 'json' 中的一个。这个类型别名用于指定 HTTP 请求的响应类型，即指定服务器返回的数据的格式。

// RequestMethod 类型别名定义了一个叫做 RequestMethod 的类型，它的取值只能是 'get'、'post'、'put'、'delete'、'patch' 或 'option' 中的一个。
// 他们是用来修饰参数的，然后能让这个参数被限定类型
export type ResponseType = 'arraybuffer' | 'text' | 'blob' | 'document' | 'json'
export type RequestMethod =
    | 'get'
    | 'post'
    | 'put'
    | 'delete'
    | 'patch'
    | 'option'

export type XHRConfig = {
    request: HTTPRequest
    success?: Function/** 这个是请求URL成功后执行的回调函数，里面含有请求成功后的数据 */
    abort?: Function
    progress?: Function
    error?: Function
    load?: Function
}
