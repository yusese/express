//1.引入 express 包
let express = require('express');
//2.创建服务对象
let app = express();

//3.创建一个路由规则
//登录的页面
app.get('/login',(request,response) =>{

    //设置响应: 登录的页面
    response.sendFile(__dirname + '/form.html')
})
//表单提交，跳转到新的界面
app.post('/login',(request,response) =>{
    //设置响应
    response.send('登录成功')
})

//表单的登录和跳转（提交），操作的是两次路由

//4.设置端口号，启动服务
app.listen(8080,() =>{
    console.log('服务启动成功，端口为8080。。。。');
})




