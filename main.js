$(function(){
    $('#youkoso').delay(1500).fadeOut(3000);
    $('#welcome').delay(4500).fadeIn(3000);
    $('#here').delay(7500).fadeIn(1500);
});

$(function(){
    $('.dropdwn li').hover(function(){
        $('ul:not(:animated)', this).slideDown();
    }, function(){
        $('ul.dropdwn_menu',this).slideUp();
    });
});

var exit_count = 0;
var elems_count = 0;
function repeat_show(elems$) {
  elems_count = elems$.length;
  elems$.eq(exit_count).show('slow', function() {
    exit_count ++;
    if(exit_count < elems_count) {
      repeat_show(elems$);
    } 
  });  
}
 
$("#jqs-4 button").click(function() {
   repeat_show($("#jqs-4 div.blue"));
});

$(window).scroll(function(){
  var top = $(".block01").offset().top; // ターゲットの位置取得
  var position = top - $(window).height();  // 発火させたい位置
  if($(window).scrollTop() > position + 250){
    anime({　
      targets: '.block01',
      translateX: -30,
      scale: 8,
      duration: 3000
    });
    anime({　
      targets: '.block02',
      delay: 100,
      translateX: -30,
      scale: 8,
      duration: 3000
    });
    anime({　
      targets: '.block03',
      delay: 200,
      translateX: -30,

      scale: 8,
      duration: 3000
    });
    anime({　
      targets: '.block04',
      delay: 300,
      translateX: -30,

      scale: 8,
      duration: 3000
    });
  }
})

var i=0;

$(window).scroll(function(){
  var top2 = $(".contentsheader").offset().top; // ターゲットの位置取得
  var position2 = top2 - $(window).height();  // 発火させたい位置
  if($(window).scrollTop() > position2){
    if(i==0){
      i++;
      anime({
        targets: '.contentsheader',
        borderRadius: ['100%', '0%'],
        scale: 2,
        width: '385px',
        translateX: 96,
        duration:150,
        easing: 'easeInOutQuad'
      });
      anime({
        delay:150,
        targets: '.contentsheader',
        width: '385px',
        duration: 1000
      });
      $(function(){
        $('.yoro').delay(1150).fadeIn(1000);
      });
      $(function(){
        $('.greet').delay(2150).fadeIn(1000);
      });
      $(function(){
        $('.researchgreet').delay(1650).fadeIn(1000);
      });
      $(function(){
        $('.osakalink').delay(1150).fadeIn(1000);
      });
      $(function(){
        $('.kisokoulink').delay(1650).fadeIn(1000);
      });
      $(function(){
        $('.haradalink').delay(2150).fadeIn(1000);
      });
      $(function(){
        $('.mailclass').delay(1150).fadeIn(1000);
      });
      $(function(){
        $('.mapclass').delay(1350).fadeIn(1000);
      });
      $(function(){
        $('.pi').delay(1150).fadeIn(1000);
      });
      $(function(){
        $('.ph').delay(2150).fadeIn(1000);
      });
    }
  }
})
 
var j=0;

$(window).scroll(function(){
  var top3 = $(".concon").offset().top; // ターゲットの位置取得
  var position3 = top3 - $(window).height();  // 発火させたい位置
  if($(window).scrollTop() > position3 + 500){
    anime({　
      targets: '#sikaku',
      rotate: '3turn',
      scale: 25,
      duration: 1200
    });
    anime({　
      targets: '#line',
      width: '63.3%',
      duration: 1200
    });
    if(j==0){
      $(function() {
        var $allMsg = $('.con');
        var $wordList = $('.con').html().split("");
        $('.con').html("");
        $.each($wordList, function(idx, elem) {
            var newEL = $("<span/>").text(elem).css({ opacity: 0 });
            newEL.appendTo($allMsg);
            newEL.delay(idx * 70);
            newEL.animate({ opacity: 1 }, 1100);
            j++;
        });
      });
    }
    $('.conblo').animate({opacity: 0});
  }
})

$(document).ready(function(){
  $('.slide').slick({
    autoplay: true, //自動再生
    dots: true, //ドットのナビゲーションを表示
    infinite: true, //スライドのループ有効化
    speed: 1000, //切り替えのスピード（小さくすると速くなる）
    fade: true, //フェードの有効化
  });
});