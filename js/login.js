document.querySelector('.submit').onclick = function () {
    let user = document.querySelector('input[name=username]').value;
    let password = document.querySelector('input[name=password]').value;
    if(user === ''&& password ===''){
        alert("用户名密码不能为空!")

    }
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'http://localhost:8080/sasa/api/login.php', true)

    xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            // if(this.responseText==="登录失败"){
            //     alert("用户名不存在!")

            // }
            if(this.responseText==="登录成功"){
                location.href="http://localhost:8080/sasa/"
            }
            console.log(this.responseText)
        } else {
           

        }
    }
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

    xhr.send(`username=${user}&password=${password}`); 
}
