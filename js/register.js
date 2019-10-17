document.querySelector('.submit').onclick = function () {
    let user = document.querySelector('input[name=username]').value;
    let password = document.querySelector('input[name=password]').value;
    if(user === ''&& password ===''){
        alert("用户名密码不能为空!")

    }
    
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `http://localhost:8080/sasa/api/register.php?username=${user}&password=${password}`, true)
    xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            if(this.responseText==="用户名已经存在"){
                alert("用户名已经存在")
            }
            if(this.responseText==="注册成功"){
                location.href="http://localhost:8080/sasa/html/login.html"
            }
            console.log(this.responseText) ;
        } else {

        }
    }
    xhr.send();
}
