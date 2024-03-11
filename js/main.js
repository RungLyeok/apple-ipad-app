const basketStarterEl = document.querySelector('header .basket-starter')
const basketEl = basketStarterEl.querySelector('.basket')

// * 장바구니 토글 버튼
basketStarterEl.addEventListener('click', function (event) {
  event.stopPropagation()
  if (basketEl.classList.contains('show')) { // false & true 
    // hide
    hideBasket()
  } else {
    // show
    showBasket()
  }
})
// * 장바구니 안에 클릭 시 닫히치 않도록
basketEl.addEventListener('click', function (event) {
  event.stopPropagation()
})
// * 화면 어디든 클릭하면 장바구니 닫힘
window.addEventListener('click', function () {
  hideBasket();
})

// * 함수로 만들어 관리 (추상화)
function showBasket() {
  basketEl.classList.add('show')
}
function hideBasket() {
  basketEl.classList.remove('show')
}