v_largo = $(window).width();
v_alto = $(window).height();

wind=v_largo-1000;
win2=wind/2;
hind=v_alto-600;
hin2=hind/2;

var an1=false;
var an2=false;
var an3=false;


var bot_an1=true;
var bot_an2=false;
var bot_an3=false;
/*-------------------------------------*/
$(document).ready(function(){
action1();


$("#bot_1").hover(function () {if(an1==false){an1=true;$('#an_1').fadeIn(500);}else if(an1==true){an1=false;$('#an_1').css({'display':'none'});}});
$("#bot_2").hover(function () {if(an2==false){an2=true;$('#an_2').fadeIn(500);}else if(an2==true){an2=false;$('#an_2').css({'display':'none'});}});
$("#bot_3").hover(function () {if(an3==false){an3=true;$('#an_3').fadeIn(500);}else if(an3==true){an3=false;$('#an_3').css({'display':'none'});}});

$("#bots1").click(function () {
	if(bot_an1==false){an_clo3();$('#bots1').css({'color':'#F00','background':'#FFF'});bot_an1=true;$('#anali_1').fadeIn(500);}
	else if(bot_an1==true){$('#bots1').css({'color':'#FFF','background':'#333'});bot_an1=false;$('#anali_1').css({'display':'none'});}
});
$("#bots2").click(function () {
	if(bot_an2==false){$('#bots2').css({'color':'#F00','background':'#FFF'});bot_an2=true;$('#bot_an').fadeIn(500);}
	else if(bot_an2==true){$('#bots2').css({'color':'#FFF','background':'#333'});bot_an2=false;$('#bot_an').css({'display':'none'});}
});

$("#bots3").click(function () {
	if(bot_an3==false){an_clo1();$('#bots3').css({'color':'#F00','background':'#FFF'});bot_an3=true;$('#anali_3').fadeIn(500);}
	else if(bot_an3==true){$('#bots3').css({'color':'#FFF','background':'#333'});bot_an3=false;$('#anali_3').css({'display':'none'});}
});






});
/*------READY---------------------------*/

function an_clo1(){
	$('#anali_1').css({'display':'none'});bot_an1=false;
	$('#bots1').css({'color':'#FFF','background':'#333'});
}

function an_clo2(){
	$('#bot_an').css({'display':'none'});bot_an2=false;
	$('#bots2').css({'color':'#FFF','background':'#333'});
}

function an_clo3(){
	$('#anali_3').css({'display':'none'});bot_an3=false;
	$('#bots3').css({'color':'#FFF','background':'#333'});
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