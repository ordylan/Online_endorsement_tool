window.onload=function(){setInterval(function(){zidong();},300);}
var date = Number(new Date());
//获取参数
 var request =
   {QueryString : function(val){
   var uri = window.location.search;
   var re = new RegExp("" +val+ "=([^&?]*)", "ig");
   return ((uri.match(re))?(uri.match(re)[0].substr(val.length+1)):null);}}
   var shajiazhe1 = request.QueryString("person");//获得是参与者还是分享者本人
   var shajiazhe2 = localStorage.Temp_shajia;
   var itt = localStorage.Temp_shajia_free_item;


function start(){document.getElementById('aa').style.display='none';document.getElementById('step1').style.display='block';}

function start2(){document.getElementById('step1').style.display='none';document.getElementById('step2').style.display='block';}

function start3(id){localStorage.Temp_shajia_free_item = id;localStorage.Temp_shajia_free_price = Number(100);localStorage.Temp_shajia_times = Number(0);if(shajiazhe2 == null || shajiazhe2 == undefined) {localStorage.Temp_shajia = date;} else{if (confirm("已经参加过了杀价活动,要不要重来?\n(重来会销毁以前未完成的杀价进度)")){localStorage.Temp_shajia = date;}else {}}location.reload();}

function kill(){if(localStorage.Temp_shajia_times < 11 ){var prrice = Math.floor(Math.random() * 10);localStorage.Temp_shajia_free_price = Number(localStorage.Temp_shajia_free_price) - Number(prrice);localStorage.Temp_shajia_times = Number(localStorage.Temp_shajia_times) + Number(1);}else(alert("已经杀了11刀了,剩下的只能等好友帮忙了,没有好友也没关系.系统会随机帮你杀的哦(最多1天就可以杀成,明天一定要来哦)"))}

function zidong(){var date = Number(new Date());
var shajiazhe2 = localStorage.Temp_shajia;
if(date - shajiazhe2 > 86400000){localStorage.Temp_shajia_free_price = 0;alert("橙鸭最后一击!!!成功杀到"+ itt +"!");localStorage.Temp_shajia = date;window.location.href='kill_price_for free_buy.html';}
else if(date - shajiazhe2 > 180000 && localStorage.Temp_shajia_c != "true"){var prrice = Math.floor(Math.random() * 60);localStorage.Temp_shajia_free_price = Number(localStorage.Temp_shajia_free_price) - Number(prrice);localStorage.Temp_shajia_c = true;alert("WoW,橙鸭帮你杀了几刀!一共杀去"+prrice+"%!");}
else if(date - shajiazhe2 > 30000 && localStorage.Temp_shajia_b != "true"){var prrice = Math.floor(Math.random() * 40);localStorage.Temp_shajia_free_price = Number(localStorage.Temp_shajia_free_price) - Number(prrice);localStorage.Temp_shajia_b = true;alert("WoW,橙鸭帮你杀了几刀!一共杀去"+prrice+"%!");}
else if(date - shajiazhe2 > 10000 && localStorage.Temp_shajia_a != "true"){var prrice = Math.floor(Math.random() * 20);localStorage.Temp_shajia_free_price = Number(localStorage.Temp_shajia_free_price) - Number(prrice);localStorage.Temp_shajia_a = true;alert("WoW,橙鸭帮你杀了几刀!一共杀去"+prrice+"%!");}

   var pppp = localStorage.Temp_shajia_free_price;
if(shajiazhe2 == null || shajiazhe2 == undefined){} else {document.getElementById('aa').style.display='none';document.getElementById('main').style.display='block';if(shajiazhe1 == null || shajiazhe1 == undefined ){window.location.href="kill_price_for free_buy.html?person="+shajiazhe2;}}
if(shajiazhe1 == shajiazhe2) {} else{document.getElementById('aa').style.display='none';document.getElementById('main').style.display='none';document.getElementById('main2').style.display='block';}
document.getElementById("bfbt").value = pppp;document.getElementById("bfb").innerHTML="剩余"+pppp+"%";document.getElementById("name").innerHTML="杀价中--"+itt;if(localStorage.Temp_shajia_free_price <= 0){alert("你的" + itt + "杀到啦!!!");localStorage.removeItem('Temp_shajia_free_price');localStorage.removeItem('Temp_shajia_free_item');localStorage.removeItem('Temp_shajia');localStorage.removeItem('Temp_shajia_a');localStorage.removeItem('Temp_shajia_b');localStorage.removeItem('Temp_shajia_c');localStorage.removeItem('Temp_shajia_times');
if(itt == "1周黄金会员"){window.location.href="1zhouhj.html"}
else if(itt == "1个月水晶会员"){window.location.href="1yuesj.html"}
else if(itt == "1年现金会员"){window.location.href="1nianxj.html"}
}
}



