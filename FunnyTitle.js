// 浏览器搞笑标题
let OriginTitle = document.title
let titleTime
let link = document.querySelector('link[rel*="icon"]') || document.createElement("link")
link.rel = "icon"
if(link.href.indexOf('unknown')) {
  link.href = "/favicon.ico"
}
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    link.href = "/failure.ico"
    document.title = "(ฅ>ω<*ฅ)藏好啦 ~"
    clearTimeout(titleTime)
  } else {
    link.href = "/favicon.ico"
    document.title = "ฅ ̳͒•ˑ̫• ̳͒ฅ被发现啦 ~" + OriginTitle
    titleTime = setTimeout(function () {
      document.title = OriginTitle
    }, 2000)
  }
})
