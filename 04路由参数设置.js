// 初始化
// 引入express
const { response } = require('express');
let express = require('express');
// 创建服务对象
let app = express();
// 创建一个路由规则
app.get('/goods/:id.html', (request, response) => {
    // 获取id  
    let id = request.params.id;


    // 设置响应
    response.send('这是第' + id + '个界面')
});

// ip 和 域名 ：一一对应，是一样的（身份证姓名，身份证号）
// http: //bjh520210607.com:8080/goods/1.html
//  C:\Windows\System32\drivers\etc

// hosts 在该文件中修改  127.0.0.1    bjh520210607.com

// hosts 可能操作不了 （开启一下权限）

// app.get('/goods/2.html',(request,response) =>{

//     //设置响应

//     response.send('这是第2个商品的页面')

// });

// app.get('/goods/3.html',(request,response) =>{

//     //设置响应

//     response.send('这是第3个商品的页面')

// });

// app.get('/goods/4.html',(request,response) =>{

//     //设置响应

//     response.send('这是第4个商品的页面')

// });

app.listen(80, () => {

    console.log('服务启动成功，端口为80');

})