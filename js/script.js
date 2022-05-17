$(function() {
  $("#hmenu").click(function() {
    $("header nav").slideToggle();
  });
});

//リサイズ時の処理を定義
$(function() {
  var timer = false;
  $(window).resize(function() {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      //リサイズが終わったときの処理
      if ($(window).width() >= 768) {
        $("header nav").show();
      } else {
        $("header nav").hide();
      }
    });
  });
});
//
//ページトップ設定
$(function() {
  var topBtn = $('#page-top');
  topBtn.hide();
  //スクロールが 100 に達したらボタン表示
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  //スクロールしてトップ
  topBtn.click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});
