$(function () {
 // カルーセル
  $('.carousel').slick({
    adaptiveHeight: true,  // 各スライドの高さを自動調整
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: false,
  });

  //ハンバーガーメニュー
  const hmbBtn =
  document.getElementById("hamburger");
  const header =
  document.getElementById("header");
  hmbBtn.addEventListener('click',function(){
    header.classList.toggle("active");
  });

});