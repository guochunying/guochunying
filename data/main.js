/**
 * Created by Administrator on 2017/5/10 0010.
 */
exports.data = function () {
     return [
         {
             route:"/index",
             handle:function(req,res,next){
                 //req����ͷ
                 // res��Ӧ������
                 // res����ͷ��ģ��ĺ�̨���ݷ��ظ����������������ͷ��û��ͷ�Ļ����ݳ�������
                 res.writeHead(200,{
                     "Content-type":"application/json;charset=UTF-8",
                     "Access-Control-Allow-Origin":"*"//��������������������
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