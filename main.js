var iframe = document.querySelector("iframe");
var img = document.getElementById("cake");
var left = document.querySelector(".bxs-left-arrow-circle");
var right = document.querySelector(".bxs-right-arrow-circle");
var imgs = ["img/cake.jpg", "img/cake2.jpg", "img/cake3.jpg", "img/cake4.jpg"];
var i = 0;
var e = 4;
iframe.style.display = "none";
right.onclick = function (){
    i++;
    if(i == 4){
        i = 0;
    }
    img.src = imgs[i];
}
left.onclick = function (){
    e--;
    i = e;
    if(i == -1){
        i = 3;
        e = 4;
    }
    img.src = imgs[i];
}