const topBtn = document.getElementById("js-scroll-top-button");

topBtn.addEventListener("click", topFunction);
window.onscroll = function(){
scrollFunction();
}

function scrollFunction(){
if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60){
    document.getElementById("js-scroll-top-button").style.display = "block";
} else {
    document.getElementById("js-scroll-top-button").style.display = "none";
}
}

function topFunction(){
window.scroll({
top: 0, 
left: 0, 
behavior: 'smooth' 
});
}