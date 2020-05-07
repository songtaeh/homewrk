(function($) {
    $(function() {
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    });
  })(jQuery);

  // 그래프그리기
  $(window).ready(function(){
    var i=1;
    var func1 = setInterval(function(){
        if(i<26){
            color1(i);
            i++;
        } else if(i<70){
            color2(i);
            i++;
        } else if(i<101){
            color3(i);
            i++;
        } else {
            clearInterval(func1);
        }
    },10);
});


function color1(i){
    $(".pie-chart1").css({
        "background":"conic-gradient(#8b22ff 0% "+i+"%, #ffffff "+i+"% 100%)"
        });
    
}
function color2(i){
    $(".pie-chart1").css({
        "background":"conic-gradient(#8b22ff 0% 25%, #ffc33b 25% "+i+"%, #ffffff "+i+"% 100%)"
        });
     
}
function color3(i){
    $(".pie-chart1").css({
        "background":"conic-gradient(#8b22ff 0% 25%, #ffc33b 25% 70%, #21f3d6 70% "+i+"%, #ffffff "+i+"% 100%)"
        });
     
}

function replay(){

    i=1;
    func1 = setInterval(function(){
        if(i<26){
            color1(i);
            i++;
        } else if(i<70){
            color2(i);
            i++;
        } else if(i<101){
            color3(i);
            i++;
        } else {
            clearInterval(func1);
        }
    },10);
}