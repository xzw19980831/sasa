var tds = document.querySelectorAll('td');  //伪数组的元素就是节点
for (var i = 0; i < tds.length; i++) {
    var td = tds[i]
    //循环的过程中，i值是正确的，我们可以在这里，来将其保存在td上
    td.setAttribute('cuijn-img-src', "../images/small" + (i + 1) + ".JPG")
    td.onmouseover = function () {
        //切换图片的src
        // alert(i)
        // console.log(i)
        //注意：
        //  1. 循环中有事件绑定，事件绑定中使用了i值，此时的i值是错误的
        //  2. 点击事件中，this就是被点击的td（元素节点）
        // alert(this.getAttribute('cuijn-img-src'))

        //改变img的src属性
        var img = document.querySelector('.img')
        var src = this.getAttribute('cuijn-img-src');
        img.setAttribute('src', src)

        //清旧焦点
        document.querySelector('.focus').className = ''
        //设新焦点
        this.className = 'focus'

    }

    $(td).mouseover(function(){
        
        var index = $(this).index()
        document.querySelector('.rig').style.backgroundImage="url(../images/small" + (index + 1) + ".jpg)"
    })
}