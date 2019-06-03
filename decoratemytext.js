var btn = document.getElementById('btn-click');
var txt = document.getElementById('txtarea');
var check = document.getElementById('ckbox');


var resize = function() {
    var currentsize = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    txt.style.fontSize = parseInt(currentsize) + 2 + "px";
}
var timer = 0;
btn.onclick = function() {
    if (btn.value == "clicked") {
        btn.value = "unclicked";
        timer = setInterval(resize, 500);
    } else {
        btn.value = "clicked";
        clearInterval(timer);

    }


}
check.onchange = function() {
    if (this.checked == true) {
        txt.style.fontWeight = "bold";
        txt.style.color = "green";
        txt.style.textDecoration = "underline";
        document.body.style.backgroundImage = "URL('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    } else {
        txt.style.fontWeight = "normal";
    }
}