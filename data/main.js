/**
 * Created by Administrator on 2017/5/10 0010.
 */
exports.data = function () {
     return [
         {
             route:"/index",
             handle:function(req,res,next){
                 //req请求头
                 // res响应的数据
                 // res请求头是模拟的后台数据返回告诉浏览器返回数据头，没有头的话数据出不来的
                 res.writeHead(200,{
                     "Content-type":"application/json;charset=UTF-8",
                     "Access-Control-Allow-Origin":"*"//允许所有主机进行请求
                 });
                 var data={
                     name:"chen",
                     age:2344,
                     address:"beijing"
                 }
                 res.write(JSON.stringify(data))
                 res.end()
             }
         }
     ]
}