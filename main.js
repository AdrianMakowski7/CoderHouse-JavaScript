class Usuarios{
  constructor(nombre, apellido, pais, edad){
    this.nombre = nombre
    this.apellido = apellido
    this.pais = pais
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
    var pais1 = prompt('Ingrese el pais del nuevo usuario');
    var edad1 = prompt('Ingrese la edad del nuevo usario')
    arrayUsuarios.push(new Usuarios(nombre1, apellido1, pais1, edad1));
  }
}
while (newUsuario != "FIN" || newUsuario != "fin" || newUsuario != "Fin");

//Filtro para menores de 18

var usuariosMenores = arrayUsuarios.filter(usuario => usuario.edad < 18);
var usuariosMayores = arrayUsuarios.filter(usuario => usuario.edad >= 18)

if (usuariosMayores.length > 0){
  document.write('<h3>A esta pagina tiene acceso :</h3>'); 
}
for (var usuario of usuariosMayores){
  document.write(usuario.nombre + " " + usuario.apellido + " por tener " + usuario.edad + " años<br>"); 
}

if (usuariosMenores.length > 0){
  document.write('<h3>No es posible el acceso a esta pegina a :</h3>'); 
}
for (var usuario of usuariosMenores){
  document.write(usuario.nombre + " " + usuario.apellido + " por tener " + usuario.edad + " años<br>");
}

//Ordenar por edad

arrayUsuarios.sort((a,b)=> a.nombre.localeCompare(b.nombre));
console.log(arrayUsuarios);