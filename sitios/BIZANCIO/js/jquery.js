v_largo = $(window).width();
v_alto = $(window).height();

wind=v_largo-1000;
win2=wind/2;
hind=v_alto-600;
hin2=hind/2;

var an1=false;
var an2=false;
var an3=false;
var an4=false;
var an5=false;

var an6=false;
var an7=false;
var an8=false;
var an9=false;
/*-------------------------------------*/
$(document).ready(function(){
action1();


$("#bot_1").hover(function () {if(an1==false){an1=true;$('#an_1').fadeIn(500);}else if(an1==true){an1=false;$('#an_1').css({'display':'none'});}});
$("#bot_2").hover(function () {if(an2==false){an2=true;$('#an_2').fadeIn(500);}else if(an2==true){an2=false;$('#an_2').css({'display':'none'});}});
$("#bot_3").hover(function () {if(an3==false){an3=true;$('#an_3').fadeIn(500);}else if(an3==true){an3=false;$('#an_3').css({'display':'none'});}});
$("#bot_4").hover(function () {if(an4==false){an4=true;$('#an_4').fadeIn(500);}else if(an4==true){an4=false;$('#an_4').css({'display':'none'});}});
$("#bot_5").hover(function () {if(an5==false){an5=true;$('#an_5').fadeIn(500);}else if(an5==true){an5=false;$('#an_5').css({'display':'none'});}});

$("#bots1").click(function () {
	if(an6==false){an_clo2();an_clo3();an_sim();$('#bots1').css({'color':'#F00','background':'#FFF'});an6=true;$('#anali_1').fadeIn(500);}
	else if(an6==true){$('#bots1').css({'color':'#FFF','background':'#333'});an6=false;$('#anali_1').css({'display':'none'});}
});
$("#bots2").click(function () {
	if(an7==false){an_clo1();an_clo3();an_sim();$('#bots2').css({'color':'#F00','background':'#FFF'});an7=true;$('#anali_2').fadeIn(500);}
	else if(an7==true){$('#bots2').css({'color':'#FFF','background':'#333'});an7=false;$('#anali_2').css({'display':'none'});}
});

$("#bots3").click(function () {
	if(an8==false){an_clo1();an_clo2();an_clo3();$('#bots3').css({'color':'#F00','background':'#FFF'});an8=true;$('#bot_an').fadeIn(500);}
	else if(an8==true){$('#bots3').css({'color':'#FFF','background':'#333'});an8=false;$('#bot_an').css({'display':'none'});}
});

$("#bots4").click(function () {
	if(an9==false){an_clo1();an_clo2();an_sim();$('#bots4').css({'color':'#F00','background':'#FFF'});an9=true;$('#anali_3').fadeIn(500);}
	else if(an9==true){$('#bots4').css({'color':'#FFF','background':'#333'});an9=false;$('#anali_3').css({'display':'none'});}
});





});
/*------READY---------------------------*/

function an_clo1(){
	$('#anali_1').css({'display':'none'});an6=false;
	$('#bots1').css({'color':'#FFF','background':'#333'});
}
function an_clo2(){
	$('#anali_2').css({'display':'none'});an7=false;
	$('#bots2').css({'color':'#FFF','background':'#333'});
}

function an_sim(){
	$('#bot_an').css({'display':'none'});an8=false;
	$('#bots3').css({'color':'#FFF','background':'#333'});
}

function an_clo3(){
	$('#anali_3').css({'display':'none'});an9=false;
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