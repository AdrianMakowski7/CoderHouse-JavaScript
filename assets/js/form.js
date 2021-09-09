$(document).ready( ()=>{
  $("#buttonConfirmar").on("click" , captura);
});

///////////boton confirmar////////////
function captura() {
  localStorage.setItem('nombre' , $("#nombre").val());
  localStorage.setItem('apellido' , $("#apellido").val());
  localStorage.setItem('nacimiento' , $("#nacimiento").val());
  localStorage.setItem('edad' , $("#edad").val());
  localStorage.setItem('telefono' , $("#telefono").val());
  localStorage.setItem('ciudad' , $("#ciudad").val());
  localStorage.setItem('pais' , $("#pais").val());
  localStorage.setItem('email' , $("#email").val());
  localStorage.setItem('cargo' , $("#cargo").val());
  localStorage.setItem('descripcion' , $("#descripcion").val());
  localStorage.setItem('resumen' , $("#resumen").val())
  localStorage.setItem('twitter' , $("#twitter").val())
  localStorage.setItem('instagram' , $("#instagram").val())
  localStorage.setItem('github' , $("#github").val())
  localStorage.setItem('linkedin' , $("#linkedin").val())
  window.location="portfolio.html";
}