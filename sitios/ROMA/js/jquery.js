v_largo = $(window).width();
v_alto = $(window).height();

wind=v_largo-1000;
win2=wind/2;
hind=v_alto-600;
hin2=hind/2;

var sim=false;

/*-------------------------------------*/

$(document).ready(function(){
action1();
var a=false;

$('#bot_1').click(function(){
$('#image2').css({'display':'none'});
$('#image1').fadeIn();
});

$('#bot_2').click(function(){
$('#image1').css({'display':'none'});
$('#image2').fadeIn();
});

$('#bot_sim').click(function(){  
	if(sim==true){ sim=false; $('.sim').css({'display':'none'}); $('#bot_sim').css({'background':'#FFF','color':'#000'});  }
    else if(sim==false){ sim=true; $('.sim').css({'display':'block'}); $('#bot_sim').css({'background':'#333','color':'#FFF'});  }  
 });
 
$('.img_to').click(function(){$('#an_to').css({'display':'none'});$('#analisis').css({'display':'none'});$('.img_to').css({'display':'none'});});


$('#img1').click(function(){$('#an_to').fadeIn(300);$('#analisis').css({'display':'block'});$('#image_1').css({'display':'block'});});
$('#img2').click(function(){$('#an_to').fadeIn(300);$('#analisis').css({'display':'block'});$('#image_2').css({'display':'block'});});
$('#img3').click(function(){$('#an_to').fadeIn(300);$('#analisis').css({'display':'block'});$('#image_3').css({'display':'block'});});
$('#img4').click(function(){$('#an_to').fadeIn(300);$('#analisis').css({'display':'block'});$('#image_4').css({'display':'block'});});
$('#img5').click(function(){$('#an_to').fadeIn(300);$('#analisis').css({'display':'block'});$('#image_5').css({'display':'block'});});
$('#img6').click(function(){$('#an_to').fadeIn(300);$('#analisis').css({'display':'block'});$('#image_6').css({'display':'block'});});

$('#bot_mat').click(function(){$('#an_to').fadeIn(300);$('#analisis').css({'display':'block'});$('#con_mat').css({'display':'block'});});
$('#bot_trans').click(function(){$('#an_to').fadeIn(300);$('#analisis').css({'display':'block'});$('#con_trans').css({'display':'block'});});
$('#bot_refle').click(function(){$('#an_to').fadeIn(300);$('#analisis').css({'display':'block'});$('#con_refle').css({'display':'block'});});


});/*---------------------------------*/




function action1(){
if(v_largo>1000){
$('#cont').css({'left':win2});
$('#analisis').css({'left':win2});
}else if(v_largo<1000){
$('#cont').css({'left':win2});
$('#analisis').css({'left':win2});
}
if(v_alto>600){
$('#cont').css({'top':hin2});
$('#analisis').css({'top':hin2});
}else if(v_alto<600){
$('#cont').css({'top':hin2});
$('#analisis').css({'top':hin2});
}
}