var center_divs = document.getElementsByClassName("centered_div");

for(var i = 0;i < center_divs.length;i++){
    center_divs[i].style.position = "absolute";
    center_divs[i].style.top = window.innerHeight / 2 - center_divs[i].clientHeight / 2;
    center_divs[i].style.left = window.innerWidth / 2 - center_divs[i].clientWidth / 2;
}