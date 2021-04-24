// 햄버거 바 아이콘 선택자
const menuOpenEl = document.getElementById('btn--open')
//닫는 아이콘 선택자
const menuCloseEl = document.getElementById('btn--close')
//사이드 메뉴 선택자
const sideMenuEl = document.getElemnetById('nav_menu')

menuOpenEl.addEventListener("click", function() {
    menuOpenEl.style.display="none"
    menuCloseEl.style.display="block"
    sideMenuEl.style.transform=
})

menuCloseEl.addEventListener("click", function() {
    menuOpenEl.style.display="block"
    menuCloseEl.style.display="none"
})