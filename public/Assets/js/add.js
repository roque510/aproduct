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

add.onclick= (e) => {
    e.preventDefault();
    //addProduct(Date.now(),);
    addProduct(Date.now(),image1.value,image2.value,image3.value,image4.value,image5.value,producto.value,categoria.value,vendedor.value,precio.value,lugar.value,fecha.value,descripcion.value);


};



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