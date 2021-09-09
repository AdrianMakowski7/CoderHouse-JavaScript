$(document).ready(()=>{
  let mostarNombre = localStorage.getItem("nombre");
  let mostarApellido = localStorage.getItem("apellido");
  $(".nombre1").html(`${mostarNombre} ${mostarApellido}`);
  let mostarNacimiento = localStorage.getItem("nacimiento");
  $("#fechaNacimiento1").html(`${mostarNacimiento}`);
  let mostarCiudad = localStorage.getItem("ciudad");
  let mostarPais = localStorage.getItem("pais");
  $(".pais1").html(`${mostarCiudad}, ${mostarPais}`);
  let mostarEdad = localStorage.getItem("edad");
  $("#edad1").html(`${mostarEdad}`);
  let mostarTelefono = localStorage.getItem("telefono");
  $(".telefono1").html (`${mostarTelefono}`);
  let mostarEmail = localStorage.getItem("email");
  $(".email1").html (`${mostarEmail}`);
  let mostarDescripcion = localStorage.getItem("descripcion");
  $("#descripcion1").html(`${mostarDescripcion}`);
  let mostarResumen = localStorage.getItem("resumen");
  $("#resumen1").html(`${mostarResumen}`);
  let mostarTwitter = localStorage.getItem("twitter");
  $("#twitter1").attr(`href`, mostarTwitter);
  let mostarInstagram = localStorage.getItem("instagram");
  $("#instagram1").attr(`href`, mostarInstagram);
  let mostarGithub = localStorage.getItem("github");
  $("#github1").attr(`href`, mostarGithub);
  let mostarLinkedin = localStorage.getItem("linkedin");
  $("#linkedin1").attr(`href`, mostarLinkedin);
})
