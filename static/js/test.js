
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
       $('a img').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
        console.log(this);
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
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#sidemenu a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
    $('#rightsidemenu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#rightsidemenu a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
