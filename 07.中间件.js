//1.引入 express 包
let express = require('express');
//2.创建服务对象
let app = express();

//什么时候回想到中间件（封装函数）：出现重复功能的时候
//中间件(声明，定义)
let outTime = (request,response,next) => {
    //书写功能
    //获取时间戳
    console.log(Date.now());

    //调用一下 next
    next(); //指针对象（箭头），指向的是下一个路由的回调函数
}
//调用中间件 (类似于函数调用)
app.use(outTime);


//需求：每访问一个路由，我们都想要看一下此时 时间戳
//3.创建一个路由规则
app.get('/one',(request,response) =>{
    // console.log(Date.now());
    //设置响应
    response.end('hello one')
})
app.get('/two',(request,response) =>{
    // console.log(Date.now());
    //设置响应
    response.end('hello two')
})
app.get('/three',(request,response) =>{
    // console.log(Date.now());
    //设置响应
    response.end('hello three')
})





//4.设置端口号，启动服务
app.listen(8080,() =>{
    console.log('服务启动成功，端口为8080。。。。');
})
