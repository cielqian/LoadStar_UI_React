export function isUrl(url) {
    return !!url && (url.indexOf('http://') === 0 || url.indexOf('https://') === 0 )
}