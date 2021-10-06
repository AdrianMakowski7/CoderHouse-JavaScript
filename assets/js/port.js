$(document).ready(()=>{
  comprobaciones();
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
  let mostarCompetencia = localStorage.getItem("competencia");
  $(".competencia1").html(`${mostarCompetencia}`);
  let mostarTwitter = localStorage.getItem("twitter");
  $("#twitter1").attr(`href`, mostarTwitter);
  let mostarInstagram = localStorage.getItem("instagram");
  $("#instagram1").attr(`href`, mostarInstagram);
  let mostarGithub = localStorage.getItem("github");
  $("#github1").attr(`href`, mostarGithub);
  let mostarLinkedin = localStorage.getItem("linkedin");
  $("#linkedin1").attr(`href`, mostarLinkedin);
});

let comprobaciones = () =>{
  if(localStorage.getItem("twitter") == ""){
    document.getElementById(`twitter1`).classList.add(`ocultar`)
  }
  if(localStorage.getItem("instagram") == ""){
    document.getElementById(`instagram1`).classList.add(`ocultar`)
  }
  if(localStorage.getItem("linkedin") == ""){
    document.getElementById(`linkedin1`).classList.add(`ocultar`)
  }
  if(localStorage.getItem("github") == ""){
    document.getElementById(`github1`).classList.add(`ocultar`)
  }
  let compe = document.getElementById(`cartel`)
  compe.setAttribute(`data-typed-items` , `${localStorage.getItem("competencia")}`)

  let typed_strings = localStorage.getItem("competencia");
      typed_strings = typed_strings.split(',')
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
});
 
};
var trabajosArray = localStorage.getItem("arrayTrabajos")
var arrayTrab = JSON.parse(trabajosArray)

console.log(arrayTrab)
      
var educacionArray = localStorage.getItem("arrayEducacion")
var arrayEduc = JSON.parse(educacionArray)
/*
arrayEduc.map((ed)=>{
  console.log(ed)

  if(!ed.institucion){
    return;
  }else{
    document.getElementById(`divEducacion`).append(
      "<div class='resume-item'>"+
      "<h4>"+ed.institucion+"</h4>"+
      "<h5>"+ed.inicio+" - "+ ed.fin+"</h5>"+
      "<p>"+ed.descripcion+"</p>"+
      "</div>"
      )
    }
})*/