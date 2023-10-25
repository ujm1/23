let i, img5;
window.onload = function () {
  imgs = document.querySelector(".img5").getElementsByTagName("li");
  imgs[0].innerHTML = "홍길동";
  imgs[1].innerHTML = "이동수";
  imgs[2].innerHTML = "나는 첫번째 번호로는 [0]이야";
  imgs[3].innerHTML = "나는 첫번째 번호로는 [0]이야";
  imgs[4].innerHTML = "나는 첫번째 번호로는 [0]이야";
  for (i = 0; i < 5; i++) {
    imgs[i].style.background = "url(img/img" + i + ".jpg";
    imgs[i].style.backgroundSize = "100% 100%";
  }
};
