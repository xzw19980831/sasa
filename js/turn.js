var go1 = document.getElementById("go1");
var go2 = document.getElementById("go2");
var go3 = document.getElementById("go3");
var go4 = document.getElementById("go4");
var go5 = document.getElementById("go5");
var go6 = document.getElementById("go6");
var turn = document.querySelector(".turn")
window.onscroll = function(){
    var scroTurn = document.documentElement.scroTurn ?
        document.documentElement.scroTurn :
        document.body.scroTurn;
        if(scroTurn > 2000){
            turn.style.display = 'block'
        }else {
            turn.style.display = 'none'
        }
}
go1.onclick = function(){
     document.documentElement.scroTurn = document.body.scroTurn =200
 } 
 go2.onclick = function(){
     document.documentElement.scroTurn = document.body.scroTurn =600
 }
 go3.onclick = function(){
     document.documentElement.scroTurn = document.body.scroTurn =800
 }