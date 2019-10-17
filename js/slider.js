var currentIndex = 0;

// 将轮播切换到指定的图片上
function slideTo(index){
    if(index === 5){
        index = currentIndex = 0
    }

    if(index === -1){
        index = currentIndex = 4
    }
var lis = document.querySelectorAll('.bslider .lists li')     
document.querySelector('.currents').classList.remove('currents');
            lis[index].classList.add('currents')
}

function slideNext(){
    currentIndex++
    slideTo(currentIndex)
}
function slidePrev(){
    currentIndex--
    slideTo(currentIndex)
}


// //绑定事件
// document.querySelector('.slider .prev').onclick = function(){
//     slidePrev()
// }
// document.querySelector('.slider .next').onclick = function(){
//     slideNext()
// }

var bullets = document.querySelectorAll('.pagination .bullet');
for(var i = 0; i < bullets.length;i++){
    bullets[i].index = i;
    bullets[i].onclick       = function(){

        currentIndex = this.index;
        slideTo(currentIndex)
    }

}

document.querySelector('.bslider').onmouseout = function (){
    auto()
}
document.querySelector('.bslider').onmouseover = function(){
    stop()
}
var id;
function auto(){
    id = setInterval(function(){

        slideNext();
    },2000)
}
function stop(){
    clearInterval(id)
}
    auto()