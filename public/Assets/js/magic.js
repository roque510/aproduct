//hello js

$.fn.slider = function(){

  let secondsOfMovement = 3;
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

///////////////////////////////


/*let add = document.querySelector("#agregar");

let image1 = document.querySelector("#imagen1");
let image2 = document.querySelector("#imagen2");
let image3 = document.querySelector("#imagen3");
let image4 = document.querySelector("#imagen4");
let image5 = document.querySelector("#imagen5");

let producto = document.querySelector("#producto");
let vendedor = document.querySelector("#Vendedor");
let categoria = document.querySelector("#categoria");
let precio = document.querySelector("#precio");
let lugar = document.querySelector("#lugar");
let fecha = document.querySelector("#fecha");
let descripcion = document.querySelector("#descripcion");

add.onclick= (e) => {
    e.preventDefault();
    //addProduct(Date.now(),);
    console.log(image1.value,image2.value,image3.value,image4.value,image5.value,producto.value,categoria.value,vendedor.value,precio.value,lugar.value,fecha.value,descripcion.value);


};*/



  function addNewUser(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

  function addProduct(productId, image1, image2, image3, image4, image5, producto, vendedor, descripcion, categoria, precio, lugar, fecha) {
  firebase.database().ref('Products/' + productId).set({
    imagen1: image1,
    imagen2: image2,
    imagen3: image3,
    imagen4: image4,
    imagen5: image5,
    producto: producto,
    vendedor: vendedor,
    descripcion: descripcion,
    categoria: categoria,
    precio: precio,
    lugar: lugar,
    fecha: fecha
    
  });
}


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDUqBf5VzAFTQpAUIaqYsNuoJwg78FQYWU",
    authDomain: "aproduct-25ff3.firebaseapp.com",
    databaseURL: "https://aproduct-25ff3.firebaseio.com",
    projectId: "aproduct-25ff3",
    storageBucket: "aproduct-25ff3.appspot.com",
    messagingSenderId: "233616086586"
  };
  firebase.initializeApp(config);

  const preObject = document.querySelector("#load");

  const dbRefObject = firebase.database().ref().child('users').child('aroque');

  dbRefObject.on('value', (snap) => {

  	preObject.innerText = JSON.stringify(snap.val(),null,3);
  });