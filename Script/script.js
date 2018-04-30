var x = 1;
setTimeout(carousel,0);

function carousel(){
   if(x>3){x=1;}

   var path = "Css/Images/Slideshow/img"+x+".jpg";
document.getElementById("pics").setAttribute("src" ,path,);
x++;
setTimeout(carousel,1700);

};

$(function(){
	
	$("header").animate({
		top:"0",
	},1000);

});

$(function(){
	
	$(".main-text").animate({
		left:"0",
	},1000);

});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        $(function(){

		$(".Services-div").animate({
			bottom:"0",
	});

});
    } else {
       $(function(){

		$(".Services-div").animate({
			bottom:"0",
	});

});
    }
};

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};

