// 浏览器搞笑标题
let titleTime
let link = document.querySelector('link[rel*="icon"]') || document.createElement('link')

document.addEventListener('visibilitychange', function () {
  link.href = '/favicon.ico'
  if (document.hidden) {
    document.title = '一个靓仔失去了梦想 ฅ ̳͒•ˑ̫• ̳͒ฅ'
    clearTimeout(titleTime)
  } else {
    document.title = '一个有梦想的靓仔 (ฅ>ω<*ฅ)'
    titleTime = setTimeout(function () {
      document.title = localStorage.getItem('docTitle')
    }, 1500)
  }
})
