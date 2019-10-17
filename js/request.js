function ajax(method, url, data) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        if (method.toLowerCase() === 'get' && data) {
            url += `?${data}`;
        }
        xhr.open(method, url, true)
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(this.responseText)
            } else {
                reject(this.statusText)
            }
        }

        if (method.toLowerCase() === 'get') {
            xhr.send();
        } else {
            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            xhr.send(data)

        }
    })
}


// function ajax (method,url,data){
//     return new Promise((resolve,reject) => {
//         let xhr = new XMLHttpRequest();
//         if(method.tolowerCase() === 'get' && data){
//             url += `${data}`;

//         }
//         xhr.open(method,url)
//         xhr.onload = function (){
//             if(this.status >= 200 && this.status < 300 ){
//                 resolve(this.responseText)
//             }else{
//                 reject(this.statusText)
//             }
//         }

//         if(method.tolowerCase() === 'get'){
//             xhr.send()
//         }else{
//             xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
//             xhr.send(data)
//         }
//     })
// }



// function jsonp(url,fnName,data) {
//     //TODO:promise版的
//     return new Promise((resolve,reject) => {
//         let script = document.createElement('script');
//         var cuijn = 'json_' + (Math.random() + '').slice(2)
//         console.log(cuijn);

//         window[cuijn] = function(data){
//             delete this.window[cuijn]
//             resolve(data)
//         }
//         url = url.indexOf('?') !== -1 ?
//         url + `&${fnName} = getData&${data}` : 
//         url + ` ?${fnName} = getData&${data}`

//         script.src = url
//         document.head.appendChild(script).remove()
        

//     })
// }
// jsonp(url,'cb', 'wd = "aaa"').then(data => {
//     console.log(data)
// })

// function jsonp(url,fnName,data){
//     return new Promise((resolve,reject)=>{
//         let script = document.createElement('script')
//         var cuijn = 'json_' + (Math.random() + '').slice(2)

//         window[cuijn] = function(){
//             delete this.window[cuijn]
//             resovle(data)
//         }
//         url = url.indexOf('?') !== -1 ?
//         url + `&${fnName} = getdata&${data}` :
//         url + `?${fnName} = getData&${data}`

//         script.src = url
//         document.head.appendChild(script).remove()
//     })
// }