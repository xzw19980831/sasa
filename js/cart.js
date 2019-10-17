ajax('get', '../api/cart.php').then(data => {
    // console.log(data);
    let resp = JSON.parse(data);
    if (resp.result) {
        //显示购物车数据
        let trs = resp.data.map(product => `
            <tr>
                <td><input type="checkbox"></td>
                <td><img src="${product.img}" width="94px" height="94px"> 
                <span class="name">持妆粉底液 SPF10/PA++ </span></td>
                <span class="money">￥</span>
                <td class="price">${product.price}</td>
                <td><span class="minus">-</span><span class="count">${product.count}</span><span class="add">+</span></td>
                <td>￥${product.count * product.price}</td>
            </tr>
        `);
        // console.log(trs)
        document.querySelector('.cart table tbody').innerHTML = trs.join('')
    } else {
        
        document.querySelector('.cart').innerHTML = ` <div class="emt_img"><img src="../images/cart-empty.8f59e76a.png" width="80px" height="80px" style="top:200px;left: 600px; position:relative;"></div>
        <div class="empty" style="position:relative;top:210px;left:600px; font-size:14px;">购物车没有商品喔</div>`;
        
    }
}).catch(err => {

})

let tbody = document.querySelector('tbody');
tbody.onchange = function (evt) {
    if (evt.target.tagName === "INPUT") {
        if (evt.target.checked === true) {
            //checked属性为true，说明该checkbox被选中
            evt.target.parentNode.parentNode.classList.add('selected');
        } else {
            //checked属性为false，说明该checkbox被取消
            evt.target.parentNode.parentNode.classList.remove('selected');
        }

        //判断是否改变全选按钮的状态：
        //选中的checkbox === 全部的checkbox，此时全选要被选中
        var allCheckboxCount = document.querySelectorAll('tbody input[type=checkbox]').length;
        //取到被选中的checkbox，并取得其数量
        var checkedCount = document.querySelectorAll('tbody input[type=checkbox]:checked').length;

        document.querySelector('thead input[type=checkbox]').checked = allCheckboxCount === checkedCount

        sum()
    }
}

document.querySelector('thead input[type=checkbox]').onchange = function (evt) {
    var status = this.checked;
    var all = document.querySelectorAll('tbody input[type=checkbox]');
    all.forEach(checkbox => {
        checkbox.checked = status
        status ?
            checkbox.parentNode.parentNode.classList.add('selected') :
            checkbox.parentNode.parentNode.classList.remove('selected')
    })

    sum();
}


//减号
tbody.onclick = function (evt) {
    if (evt.target.classList.contains('minus')) {
        var countSpan = evt.target.nextElementSibling;
        // console.log(countNode.nodeValue);
        if (parseInt(countSpan.innerHTML) === 1) {
            return;
        }
        countSpan.innerHTML -= 1;
        subtotal(evt.target.parentNode.parentNode)
        sum();
    }
}

//TODO:加号
tbody.addEventListener("click", function(evt1) {
    if(evt1.target.classList.contains('add')){
        var countspan = evt1.target.previousElementSibling;
        countspan.innerHTML= parseInt(countspan.innerHTML) + 1   
        subtotal(evt1.target.parentNode.parentNode)
        sum()
    }
})

//小计
function subtotal(tr) {
    //计算该tr内的商品小计
    var count = tr.querySelector('.count').innerHTML;
    var price = tr.querySelector('.price').innerHTML;
    console.log(count, price)
    tr.querySelector('td:last-of-type').innerHTML = "￥" + (count * price);
}

//结算
function sum() {
    var selectedTr = document.querySelectorAll('tbody tr.selected');
    var sum = 0;
    selectedTr.forEach(tr=> {
        sum += parseInt(tr.querySelector('td:last-of-type').innerHTML.slice(1))
    })

    document.querySelector('h1 span').innerHTML = sum;
}