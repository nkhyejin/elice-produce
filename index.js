//스크롤 이벤트 감지하기
let header = document.querySelector("#header");
let navHeight = header.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  //스크롤을 할 때마다 로그로 현재 스크롤의 위치가 찍혀나온다.
  // console.log(window.scrollX, window.scrollY);

  if (window.scrollY > navHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

// 메뉴버튼 클릭시 해당 view로 이동
let menuList = document.querySelectorAll(".navbar__item");

for (let i = 0; i < menuList.length; i++) {
  menuList[i].addEventListener("click", (e) => {
    console.log(menuList[i].dataset.link);

    let target = menuList[i].dataset.link;
    let scrollTo = document.querySelector(target);
    scrollTo.scrollIntoView({ behavior: "smooth" });
  });
}
