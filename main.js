class Usuarios{
  constructor(nombre, apellido, documento, pais, edad){
    this.nombre = nombre
    this.apellido = apellido
    this.documento = documento
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
    var documento1 = prompt('Ingrese el docuemnto de identidad del nuevo usuario');
    var pais1 = prompt('Ingrese el pais del nuevo usuario');
    var edad1 = prompt('Ingrese la edad del nuevo usario')
    arrayUsuarios.push(new Usuarios(nombre1, apellido1, documento1, pais1, edad1));
  }
}
while (newUsuario != "FIN" || newUsuario != "fin" || newUsuario != "Fin");

console.log(arrayUsuarios);