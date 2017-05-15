/**
 * Created by Administrator on 2017/5/10 0010.
 */
exports.data = function () {
     return [
         {
             route:"/index",
             handle:function(res,req,next){
                 //req请求头
                 // res响应的数据
                 // res请求头是模拟的后台数据返回告诉浏览器返回数据头，没有头的话数据出不来的
                 res.writeHead(200,{
                     "Content-type":"application/json;charset=UTF-8",
                     "Access-Control-Allow-Origin":"*"//允许所有主机进行请求
                 });
                /* var data={
                     name:"chen",
                     age:2344,
                     address:"beijing"
                 }*/
                 var data=[
                     {
                         id:1000,
                         name:"iphone1",
                         price:"$2400"
                     },
                     {
                         id:3000,
                         name:"iphone3",
                         price:"$3500"
                     },
                     {
                         id:2000,
                         name:"iphone2",
                         price:"$1080"
                     },
                     {
                         id:4000,
                         name:"iphone4",
                         price:"$4030"
                     }
                 ]
                 res.write(JSON.stringify(data))
                 res.end()
             }
         }
         //,
     //    {
     //        route:"/mock",
     //        handle:function(req,res,next){
     //            //req请求头
     //            // res响应的数据
     //            // res请求头是模拟的后台数据返回告诉浏览器返回数据头，没有头的话数据出不来的
     //            res.writeHead(200,{
     //                "Content-type":"application/json;charset=UTF-8",
     //                "Access-Control-Allow-Origin":"*"//允许所有主机进行请求
     //            });
     //            var data={
     //                name:"张潇",
     //                age:15,
     //                address:"上海"
     //            }
     //            res.write(JSON.stringify(data))
     //            res.end()
     //        }
     //    }
     ]
}