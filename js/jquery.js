v_largo = $(window).width();
v_alto = $(window).height();

wind=v_largo-1000;
win2=wind/2;
hind=v_alto-600;
hin2=hind/2;

var bot_an1=true;
var bot_an2=false;
var bot_an3=false;
var bot_an4=false;
/*-------------------------------------*/
$(document).ready(function(){
action1();


$("#bots1").click(function () {
	if(bot_an1==false){an_clo2();an_clo3();an_clo4();$('#bots1').css({'color':'#F00','background':'#FFF'});bot_an1=true;$('#anali_1').fadeIn(500);}
	else if(bot_an1==true){$('#bots1').css({'color':'#FFF','background':'#333'});bot_an1=false;$('#anali_1').css({'display':'none'});}
});
$("#bots2").click(function () {
	if(bot_an2==false){an_clo1();an_clo3();an_clo4();$('#bots2').css({'color':'#F00','background':'#FFF'});bot_an2=true;$('#anali_2').fadeIn(500);}
	else if(bot_an2==true){$('#bots2').css({'color':'#FFF','background':'#333'});bot_an2=false;$('#anali_2').css({'display':'none'});}
});

$("#bots3").click(function () {
	if(bot_an3==false){an_clo1();an_clo2();an_clo4();$('#bots3').css({'color':'#F00','background':'#FFF'});bot_an3=true;$('#anali_3').fadeIn(500);}
	else if(bot_an3==true){$('#bots3').css({'color':'#FFF','background':'#333'});bot_an3=false;$('#anali_3').css({'display':'none'});}
});

$("#bots4").click(function () {
	if(bot_an4==false){an_clo1();an_clo2();an_clo3();$('#bots4').css({'color':'#F00','background':'#FFF'});bot_an4=true;$('#anali_4').fadeIn(500);}
	else if(bot_an4==true){$('#bots4').css({'color':'#FFF','background':'#333'});bot_an4=false;$('#anali_4').css({'display':'none'});}
});




});
/*------READY---------------------------*/

function an_clo1(){
	$('#anali_1').css({'display':'none'});bot_an1=false;
	$('#bots1').css({'color':'#FFF','background':'#333'});
}

function an_clo2(){
	$('#anali_2').css({'display':'none'});bot_an2=false;
	$('#bots2').css({'color':'#FFF','background':'#333'});
}

function an_clo3(){
	$('#anali_3').css({'display':'none'});bot_an3=false;
	$('#bots3').css({'color':'#FFF','background':'#333'});
}

function an_clo4(){
	$('#anali_4').css({'display':'none'});bot_an4=false;
	$('#bots4').css({'color':'#FFF','background':'#333'});
}




function action1(){
if(v_largo>1000){
$('#cont').css({'left':win2});
}else if(v_largo<1000){
$('#cont').css({'left':win2});
}
if(v_alto>600){
$('#cont').css({'top':hin2});
}else if(v_alto<600){
$('#cont').css({'top':hin2});
}
}