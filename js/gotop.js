var gotop = document.getElementById("go-2-top");
var run = document.querySelector(".run")
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop ?
        document.documentElement.scrollTop :
        document.body.scrollTop;
        if(scrollTop > 1000){
            run.style.display = 'block'
        }else {
            run.style.display = 'none'
        }
}
 gotop.onclick = function(){
     document.documentElement.scrollTop = document.body.scrollTop = 0
 }