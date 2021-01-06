// default.js

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
if (window.HTMLCollection && !HTMLCollection.prototype.forEach) {
  HTMLCollection.prototype.forEach = Array.prototype.forEach;
}

// footer: 관련 웹사이트 이동
const relatedSite = document.querySelector('.related-site');
if (relatedSite) {
  relatedSite.addEventListener('change', function (e) {
    const selectedIndex = e.target.options.selectedIndex;
    // 같은창 이동
    // location.href = e.target.options[selectedIndex].value;

    // 새창 이동
    window.open(e.target.options[selectedIndex].value);
    e.target.value = "";
  })
}

// articles: 클릭 이벤트
const articles = document.querySelector('.articles');
if (articles) {
  articles.addEventListener('click', function (e) {
    const children = e.currentTarget.querySelectorAll('li');
    children.forEach(function (item) {
      item.classList.remove('is-active');
    })
    e.target.classList.add('is-active');
  })
}

// 약관 전체 동의
const checkAll = document.querySelector('.checkAll');
if (checkAll) {
  checkAll.addEventListener('click', function (e) {
    e.preventDefault();
    const checkbox = document.querySelector('.checkAll input[type=checkbox]');
    checkbox.checked = !checkbox.checked;
    if (checkbox.checked) {
      document.querySelectorAll('input[type=checkbox]').forEach(function (item) {
        item.checked = true;
      });
    } else {
      document.querySelectorAll('input[type=checkbox]').forEach(function (item) {
        item.checked = false;
      });
    }
  })
}
// mobile.js

// button: mobile history back
const menuBack = document.querySelector('.menu .back');
if (menuBack) {
    menuBack.addEventListener('click', function () {
        window.history.back();
    })
}