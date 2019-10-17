var currentIndex = 0;

// 将轮播切换到指定的图片上
function slideTo1(index){
    if(index === 5){
        index = currentIndex = 0
    }

    if(index === -1){
        index = currentIndex = 4
    }
var lis = document.querySelectorAll('.sliders .list li')     
document.querySelector('.current').classList.remove('current');
            lis[index].classList.add('current')
}

function slideNext1(){
    currentIndex++
    slideTo1(currentIndex)
}
function slidePrev1(){
    currentIndex--
    slideTo1(currentIndex)
}


//绑定事件
document.querySelector('.sliders .prev').onclick = function(){
    slidePrev1()
}
document.querySelector('.sliders .next').onclick = function(){
    slideNext1()
}



// document.querySelector('.sliders').onmouseout = function (){
//     auto1()
// }
// document.querySelector('.sliders').onmouseover = function(){
//     stop1()
// }
// var id;
// function auto(){
//     id = setInterval(function(){

//         slideNext();
//     },2000)
// }
// function stop(){
//     clearInterval(id)
// }
    // auto()