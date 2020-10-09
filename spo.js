$(function(){ 
	var nave = $('.nav');   
	var h = $('h4');
    var m = $('li');
	var i = $('li ul');
	var ii = $('li ul li');
	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 10){ 
			nave.addClass("menu-fixo");
			h.addClass("h4-fix");
			m.addClass("li-fix");
			m.addClass("li-fix:hover");
			h.addClass("h4-fix:hover");
			i.addClass("mm");
			ii.addClass("tm");
		} else { 
			nave.removeClass("menu-fixo"); 
			h.removeClass("h4-fix");
			m.removeClass("li-fix");
			i.removeClass("mm");
			ii.removeClass("tm");
		}

	});  
});

$(function(){   
	var tam = document.getElementById('back').clientHeight - 59
	var alt = document.getElementById('back').clientHeight * 2 - 58
	var n = $('.barra');
	$(window).scroll(function(){ 
         	if ($(this).scrollTop() > tam && $(this).scrollTop() < alt){ 
	       	     n.addClass("barrafi");
			} else { 
				n.removeClass("barrafi");
			}

	});  
});
	

$(function(){   
       var tam1 = document.getElementById('back').clientHeight * 2 - 59
       var alt1 = document.getElementById('back').clientHeight * 3
       var n = $('.bar');
       $(window).scroll(function(){ 
	       if ($(this).scrollTop() > tam1 && $(this).scrollTop() < alt1){ 
				n.addClass("barrafi");
       	   } else { 
				n.removeClass("barrafi");
       	   }

	  });  
});


$(function(){   
      var tam2 = document.getElementById('back').clientHeight * 3 - 3
      var alt2 = document.getElementById('back').clientHeight * 4
      var n = $('.ba');
      $(window).scroll(function(){ 
	      if ($(this).scrollTop() > tam2 && $(this).scrollTop() < alt2){ 
          	 n.addClass("barrafi");
	      } else { 
	         n.removeClass("barrafi");
	      }

	});  
     });



$(function(){

	var mi = $('.li');
	var larg = $(window).width()
	if(larg < 732){
	    $('.li').css({display:'none'});
	}else{
	    $('.li').css({display:'inline'});
}


});