
function makeinactive() {
var linkid = ['#firstPage', '#secondpage', '#thirdpage', '#forthpage', '#fifthpage']
    for (var i = 0; i < linkid.length; i++)
        var els = document.getElementsByClassName("p2");
        $(linkid[i]).removeClass('active');
};

function makeActive(id,idimg) {
makeinactive();
$(id).addClass('active');
$(idimg).addClass('active');
}
