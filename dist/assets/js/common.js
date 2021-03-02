// 체크리스트 진행상황 프로그레스바 width 설정
// .bar-child의 data-width 속성 사용
const checkListProgressBar = document.querySelector('.bar-child');
if (checkListProgressBar) {
  const width = checkListProgressBar.getAttribute('data-width');
  checkListProgressBar.style.width = width + '%';
}

// 체크리스트 textarea 글자수 체크
const textLimitChecker = document.querySelectorAll('.text-limit');
if (textLimitChecker.length) {
  textLimitChecker.forEach(function (item) {
    const textArea = item.parentNode.querySelector('textarea');
    const currentText = item.querySelector('.current');
    textArea.addEventListener('keyup', function (e) {
      const textLength = e.target.value.length;
      currentText.innerText = textLength;
    })
  })
}

// 미션 달성률 설정
const ratings = document.querySelectorAll('.starrr');
if (ratings.length) {
  $(".starrr").starrr({
    change: function (e, value) {
      const rating = (value ? value : 0) * 20;
      e.currentTarget.parentNode.querySelector('p').innerHTML = '<b>' + rating + '%</b> 달성하였습니다!';
    }
  });
}
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

// 학습자 정보 수정 : 코드 복사
const codeCopyButton = document.querySelector('.button-code-copy');
if (codeCopyButton) {
  const clipboard = new ClipboardJS('.button-code-copy');
  clipboard.on('success', function (e) {
    console.log(e);
    alert('코드가 복사되었습니다.');
  })
  clipboard.on('error', function (e) {
    console.log(e);
  })
}


// 학습자 정보 수정 : 학교 검색
const buttonSearchSchool = document.querySelector('.button-search-school');
if (buttonSearchSchool) {
  const modal = document.querySelector('.modal');
  const closes = [document.querySelector('.modal-background'), document.querySelector('.delete'), document.querySelector('.button-close')];

  buttonSearchSchool.addEventListener('click', function (e) {
    console.log(e);
    modal.classList.add('is-active');
  })

  closes.forEach(function(item) {
    item.addEventListener('click', function(e) {
      modal.classList.remove('is-active');
    })
  })
}

// 학습자 정보 수정 : 학년 설정
const selectClass = document.querySelector('input[name=selectClass]');
if (selectClass) {
  const select = document.querySelector('#classSelect');
  // 초등학교 학년
  const class1 = [3, 4, 5, 6];
  // 중학교 학년
  const class2 = [1, 2, 3];

  document.querySelectorAll('input[name=selectClass]').forEach(function (item) {
    item.addEventListener('change', function (e) {
      if (e.target.value === 'class1') {
        select.options.length = 0;
        class1.forEach(function (item) {
          const element = document.createElement('option');
          element.text = '초등학교 ' + item + '학년';
          element.value = 'a' + item;
          select.options.add(element);
          select.disabled = false;
        })
      } else {
        select.options.length = 0;
        class2.forEach(function (item) {
          const element = document.createElement('option');
          element.text = '중학교 ' + item + '학년';
          element.value = 'a' + item;
          select.options.add(element);
          select.disabled = false;
        })
      }
    })
  })
}

// 문의내역 클릭 이벤트
function removeAnswerIsActive() {
  const items = document.querySelectorAll('.answer-body');
  items.forEach(function(elem) {
    elem.classList.remove('is-active');
  })
}

const questionList = document.querySelector('.question');
if(questionList) {
  questionList.addEventListener('click', function(e) {
      const target = e.target.querySelector('.answer-body');
      if(target) {
        removeAnswerIsActive();
        target.classList.add('is-active');
      }
  },)
}

// 메인 슬라이더
$(function() {
  $('.slider').slick({
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    // autoplay: true,
    arrows: true,
    speed: 400,
  });
})

// 위캐닝 소개 : breadcrumb add 'is-white'
const about = document.querySelector('.cscenter');
if(about) {
  about.classList.forEach(item => {
    if(item == 'is-about') {
      document.querySelector('.breadcrumb').classList.add('is-white');
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

// 모바일 메뉴
const mobileSideMenu = document.querySelector('.submenu-mobile');
if(mobileSideMenu) {
    const hamberger = document.querySelector('header.is-mobile .main');
    hamberger.addEventListener('click', function(e) {
        mobileSideMenu.classList.add('is-active');
        document.querySelector('body').classList.add('menu-open');
    })

    const close = document.querySelector('.close');
    close.addEventListener('click', function(e) {
        mobileSideMenu.classList.remove('is-active');
        document.querySelector('body').classList.remove('menu-open');
    })
}