const express=require("express");
//引入连接池
const pool=require("../pool.js");
//创建路由器对象
var router=express.Router();
//添加路由
//1.商品列表


router.get("/list",function(req,res){
        var obj=req.query;
		console.log(obj);
		//验证是否为空
		var pno=obj.pno;
		var size=obj.size;
		//页码为空，默认第1页
		if(!pno) pno=1
		if(!size) size=9
			console.log(pno,size);
		//转为整型
			pno=parseInt(pno);
		  size=parseInt(size);
		  //计算查询的开始
		  var start=(pno-1)*size;
		  //执行SQL语句
		  pool.query("SELECT lid,price,title FROM xz_laptop LIMIT ?,?",[start,size],function(err,result){
		    if(err) throw err;
			console.log(result);
		  res.send(result);
		  });
		
});





//导出路由器对象
module.exports=router;


