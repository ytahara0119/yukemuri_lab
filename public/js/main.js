
$(function($) {
//-------ドロワー(ハンバーガー)メニュー
  WindowHeight = $(window).height();
  $('#drawrmenu').css('height', WindowHeight); //メニューをwindowの高さいっぱいにする

  $(document).ready(function() {
    $('.tglmenu').click(function(){ //クリックしたら
        $('.tglmenu img#tglopen').toggle();
        $('.tglmenu img#tglclose').toggle();
      if($('#drawrmenu').is(":animated")){
        return false;
      }else{
        $('#drawrmenu').animate({width:'toggle'}); //animateで表示・非表示
        $(this).toggleClass('peke'); //toggleでクラス追加・削除
        return false;
      }
    });
  });

  //別領域をクリックでメニューを閉じる
  $(document).click(function(event) {
    if (!$(event.target).closest('#drawrmenu').length) {
      $('.tglmenu').removeClass('peke');
      $('#drawrmenu').hide();
    }
  });

//-------<TBD>現在位置マップ
  $(document).ready(function() {
    $('.whtplace_btn').click(function(){ //クリックしたら
      //検索してsrcタグをdoc要素にセットするか、phpでセットする
    });
  });

});
//---------------------------------------------------------