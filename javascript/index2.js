let i, img5, imgs_text;
const img5_textA=["호텔", "바닷속", "수족관", "호텔2", "휴양지"];
window.onload = function () {
  imgs = document.querySelector(".img5").getElementsByTagName("li");
  imgs_text=document.querySelector(".img5_text").getElementsByTagName("li");
  for (i = 0; i < 5; i++) {
    imgs[i].style.background = "url(img/img" + i + ".jpg";
    imgs[i].style.backgroundSize = "100% 100%";
    imgs_text[i].innerHTML=img5_textA[i];

  }
};
