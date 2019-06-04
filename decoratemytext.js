var btn = document.getElementById('btn-click');
var txt = document.getElementById('txtarea');
var check = document.getElementById('ckbox');
var igbtn = document.getElementById('btn-igpay');


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
        document.body.style.backgroundImage = "URL('bill.jpg')";
        // document.body.style.backgroundImage = "URL('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    } else {
        txt.style.fontWeight = "normal";
        txt.style.color = "";
        txt.style.textDecoration = "";
        document.body.style.backgroundImage = "none";

    }

}

function translate(str) {
    str = str.toLowerCase();
    var n = str.search(/[aeiuo]/);
    switch (n) {
        case 0:
            str = str + "way";
            break;
        case -1:
            str = str + "ay";
            break;
        default:
            //str= str.substr(n)+str.substr(0,n)+"ay";
            str = str.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
            break;
    }
    return str;

}


igbtn.onclick = function() {
    var data = document.getElementById('txtarea').value;
    document.getElementById('txtarea').value = translate(data);

}