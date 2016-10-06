
function makeinactive() {
var linkid = ['#first', '#second', '#third', '#fourth', '#fifth']
    for (var i = 0; i < linkid.length; i++)
        $(linkid[i]).removeClass('active');
}

function makeidInactive() {
var len =8;
for (var i = 1; i <= len; i++) {
  id = '#' + String(i);
  $(id).removeClass('active');
}
}

function makeActive(id,idimg) {
makeinactive();
makeidInactive();
$(id).addClass('active');
$(idimg).addClass('active');
}

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
   $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
       $('a').each(function () {
            $(this).removeClass('active');
        })
        
        $(this).addClass('active');
        var currLink = $(this);
        var friendElement = $(currLink.attr("refelement"));
        $(friendElement).addClass("active");
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#sidemenu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        var friendElement = $(currLink.attr("refelement"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#sidemenu a').removeClass("active");
            currLink.addClass("active");
            $(friendElement).addClass("active");
        }
        else{
            currLink.removeClass("active");
            $(friendElement).removeClass("active");
        }
    });
}
function changestyle() {
  $('#button-click').val() == "MORE" ? more() : less();
  $('#view').toggleClass(".body").toggleClass("body-click");
  $('#display').toggle();
  $('#contextdata').toggle();
};
function more() {
$('#button-click').val('LESS');
}
function less() {
$('#button-click').val('MORE');
}
