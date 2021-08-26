class Usuarios{
  constructor(nombre, apellido, edad){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = parseFloat(edad)
  }
}
let arrayUsuarios = [];
do{
  var newUsuario = prompt('Ingresar nombre del nuevo usuario o FIN para terminar de agregar');
  if(newUsuario === "FIN" || newUsuario === "fin" || newUsuario === "Fin"){
    break;
  }else{
    nombre1 = newUsuario;
    var apellido1 = prompt('Ingrese el apellido del nuevo usuario');
    var edad1 = prompt('Ingrese la edad del nuevo usario')
    arrayUsuarios.push(new Usuarios(nombre1, apellido1, edad1));
  }
}
while (newUsuario != "FIN" || newUsuario != "fin" || newUsuario != "Fin");

//Filtro para menores de 18

var usuariosMenores = arrayUsuarios.filter(usuario => usuario.edad < 18);
var usuariosMayores = arrayUsuarios.filter(usuario => usuario.edad >= 18);

if (usuariosMayores.length > 0){
  document.write('A esta pagina tiene acceso : '); 
}
for (var usuario of usuariosMayores){
  let contenedor = document.createElement("div");
  contenedor.innerHTML= usuario.nombre + " " + usuario.apellido + " por tener " + usuario.edad + " años";
  document.body.appendChild(contenedor);
};

if (usuariosMenores.length > 0){
  console.log('No es posible el acceso a esta pegina a :'); 
}
for (var usuario of usuariosMenores){
  console.log(usuario.nombre + " " + usuario.apellido + " por tener " + usuario.edad + " años");
};
