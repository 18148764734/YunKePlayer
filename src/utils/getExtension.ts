/**
 * 通过url获取文件扩展名
 * @param url 
 * @returns 
 */
export function getExtension(url: string): string {
    for (let i = url.length - 1; i--; i >= 0) {
        if (url[i] === '.') {
            return url.slice(i + 1)
        }
    }
    return url
}
