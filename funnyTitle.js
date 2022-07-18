// 浏览器搞笑标题
// let OriginTitle = document.title
let titleTime
let link = document.querySelector('link[rel*="icon"]') || document.createElement("link")
link.rel = "icon"
if (link.href.indexOf('unknown')) {
  link.href = "/favicon.ico"
}
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    // link.href = "/failure.ico"
    // document.title = "(ฅ>ω<*ฅ)藏好啦 ~"
    link.href = "/favicon.ico"
    document.title = "一个靓仔失去了梦想 ฅ ̳͒•ˑ̫• ̳͒ฅ"
    clearTimeout(titleTime)
  } else {
    link.href = "/favicon.ico"
    // document.title = "ฅ ̳͒•ˑ̫• ̳͒ฅ被发现啦 ~" + OriginTitle
    document.title = "一个有梦想的靓仔 (ฅ>ω<*ฅ)"
    titleTime = setTimeout(function () {
      // document.title = OriginTitle
      document.title = localStorage.getItem('docTitle')
    }, 1500)
  }
})
