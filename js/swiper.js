(function() {
  var wrapper  = document.getElementsByClassName('wrapper')[0];
  var offset = 50
  var timer;
  setInterval(function () {
    if(timer) {
      clearInterval(timer);
    }
    var step = 1;
  
    timer = setInterval(function () {
      wrapper.style.transform = 'translateY(-' + (offset + step) + 'px)';
      if(step == 50) {
        clearInterval(timer);
      }
      step++;
  
    }, 10);
    
    offset += 50;
    console.log('offset', offset)
  
    var num = Math.floor(wrapper.offsetHeight / 50)
    console.log('num==', num)
    
    if (! (offset%((num - 1)*50))) {
      offset = 0;
    }

  }, 3000)
  
})()