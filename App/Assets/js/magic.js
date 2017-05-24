//hello js

$.fn.slider = function(){

  let secondsOfMovement = 20;
  let tid = setInterval(timer, secondsOfMovement * 1000);
	let movement = 0;
  let slides = this.children().length;
  let size = (this.height() + 10) * -1;
  let number = 0;
  

  

	  this.append('<div class="leftBtn"><img src="http://www.beaches.com/assets/img/global/sprite-slideshow-nav.png" alt="" /></div><div class="rightBtn"><img src="http://www.beaches.com/assets/img/global/sprite-slideshow-nav.png" alt="" /></div>');
  
  this.append('<div class="menuNav"><div class="playPause"><i class="material-icons pausebtn ">pause_circle_outline</i></div><div class="divider"></div><div class="pointSlides"></div></div>');
  
  let point = '<div class="point"></div>';
  let active = '<div class="point active"></div>';
  
  for(let i = 0; i < slides; i++)
    $(".pointSlides").append((i < 1)?active:point);
  
    function timer() {  
      $(".pointSlides").children().eq(number).addClass("active");
      $(".pointSlides").children().eq(number-1).removeClass("active");
      

      $(".slide").removeClass("currentSlide");
      $(".slide").eq(number).addClass("currentSlide");
      
      
      number++;
      
      if(number > slides - 1)
			number = 0;
      
      console.log(number);
	
	}
  
  function abortTimer() { // to be called when you want to stop the timer
	  clearInterval(tid);
	}
  
  function play(){
		$(".pausebtn").html('pause_circle_outline');
	        $(".pausebtn").removeClass('play');
	        timer();
	        tid = setInterval(timer, secondsOfMovement * 1000);
	}

	function pause(){
		$(".pausebtn").html('play_circle_outline');
	        $(".pausebtn").addClass('play');
	        abortTimer();
	}
	
  $(".pausebtn").on("click",function(){
  
    if (!$(this).hasClass('play')) {
	        pause()
	    } else  {
	       play()
	    }  
  });
  
  $(".leftBtn").on("click",function(){
		pause();
		let x = $(".pointSlides > .active");
		number = $(".pointSlides").children().index(x);
		number--;
		if(number < 0)
			number = slides - 1;
      
    console.log(number);

		$(".pointSlides").children().removeClass("active");
		$(".pointSlides").children().eq(number).addClass("active");

		$(".slide").removeClass("currentSlide");
    $(".slide").eq(number).addClass("currentSlide");

		
	});
  
  $(".rightBtn").on("click",function(){
		pause();
		let xi = $(".pointSlides > .active");
		number = $(".pointSlides").children().index(xi);
		number++;
		if(number > slides - 1)
			number = 0;

		$(".pointSlides").children().removeClass("active");
		$(".pointSlides").children().eq(number).addClass("active");

		$(".slide").removeClass("currentSlide");
    $(".slide").eq(number).addClass("currentSlide");

		
	});
  
  $(".point").on("click",function(){
		number = $(".pointSlides").children().index(this);
		movement = size * number;
    $(".slide").removeClass("currentSlide");
    $(".slide").eq(number).addClass("currentSlide");
		pause();
		$(".pointSlides").children().removeClass("active");
		$(this).addClass("active");
		
	});
  
}; // end of plugin

$(".slider").slider();


  
    



