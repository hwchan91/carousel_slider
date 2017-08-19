$( function() {
  timeout();
  $('.arrow').on("click", function(){
    clearTimeout(timer);
    change_val($(this).data('direction'));
    change_photo();
  });
})

var img_no = 1,
    old_img_no = 1

var change_val = function(arrow) {
  old_img_no = img_no
  if (arrow == "right") {
    img_no += 1
    if (img_no > 5) { img_no = 1 }
  } else if (arrow == "left") {
    img_no -= 1
    if (img_no < 1) { img_no = 5 }
  }
}

var change_photo = function() {

  $('.image_container').addClass("image_" + img_no, 1000)
                       .removeClass("image_" + old_img_no, 1000)
  $('.dot').eq(img_no - 1).addClass('active_dot').end()
           .eq(old_img_no - 1).removeClass('active_dot')
  timeout();

}
var timer;
function timeout() {
     timer = setTimeout(function() {
                change_val("right");
                change_photo();
                }, 2000);
              }
