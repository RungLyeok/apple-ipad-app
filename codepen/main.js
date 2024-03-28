// 생성자 함수
// 어떤 요소가 화면안에 교차하는지 관찰하는 함수
const io = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return
    }
    console.log(entry.isIntersecting, entry.target)
  })
});

const h1Els = document.querySelectorAll('h1')
h1Els.forEach(function (el) {
  io.observe()
})