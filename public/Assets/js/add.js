  var config = {
    apiKey: "AIzaSyDUqBf5VzAFTQpAUIaqYsNuoJwg78FQYWU",
    authDomain: "aproduct-25ff3.firebaseapp.com",
    databaseURL: "https://aproduct-25ff3.firebaseio.com",
    projectId: "aproduct-25ff3",
    storageBucket: "aproduct-25ff3.appspot.com",
    messagingSenderId: "233616086586"
  };
  firebase.initializeApp(config);

let add = document.querySelector("#agregar");

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
const form = document.querySelector("form");

//const inputs = document.querySelectorAll("input");
//console.log(inputs);

var inputs = Array.prototype.slice.call(document.querySelectorAll('input'));
var txtarea = Array.prototype.slice.call(document.querySelectorAll('textarea'));

inputs.push.apply(inputs, txtarea);
console.log(inputs); // array with all divs and spans on page



add.onclick= (e) => {
  let flag = true;
    e.preventDefault();
    //addProduct(Date.now(),);
    for(element of inputs){
      if(element.value == "")
        flag = false;

    }

    if(flag){
      console.log("well done");
      addProduct(Date.now(),image1.value,image2.value,image3.value,image4.value,image5.value,producto.value,categoria.value,vendedor.value,precio.value,lugar.value,fecha.value,descripcion.value);
      form.reset();
    }
    else{
          for(element of inputs){
            console.log(element.value);
            if(element.value == "")
              console.log("este!");
            
          }
      console.log("you must fill all fileds in form!");
    }


};



  function addNewUser(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

  function addProduct(productId, image1, image2, image3, image4, image5, producto, categoria, vendedor,precio,lugar, fecha, descripcion) {
  firebase.database().ref('Products').push({
    pid:productId,
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
