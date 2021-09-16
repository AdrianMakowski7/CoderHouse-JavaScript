$(document).ready( ()=>{
  $("#buttonConfirmar").on("click" , captura);
  $("#nombre").val(localStorage.getItem('nombre'));
  $("#apellido").val(localStorage.getItem('apellido'));
  $("#nacimiento").val(localStorage.getItem('nacimiento'));
  $("#edad").val(localStorage.getItem('edad'));
  $("#telefono").val(localStorage.getItem('telefono'));
  $("#ciudad").val(localStorage.getItem('ciudad'));
  $("#pais").val(localStorage.getItem('pais'));
  $("#email").val(localStorage.getItem('email'));
  $("#cargo").val(localStorage.getItem('cargo'));
  $("#descripcion").val(localStorage.getItem('descripcion'));
  $("#resumen").val(localStorage.getItem('resumen'));
  $("#twitter").val(localStorage.getItem('twitter'));
  $("#instagram").val(localStorage.getItem('instagram'));
  $("#github").val(localStorage.getItem('github'));
  $("#linkedin").val(localStorage.getItem('linkedin'));
  $(`#btnAgregarEdu`).on("click" , agregar);
  
  
  
});


function agregar(){
  let institucion = $("#institucion").val();
  let inicioInst = $("#inicioInst").val();
  let finInst = $("#finInst").val();
  let descripcionInst = $("#descripcionInst").val();
  $("#tablaInst").append(`<tr class="eduAnimacion"><td> ${institucion} </td><td> ${inicioInst} </td><td> ${finInst} </td><td> ${descripcionInst} </td><td class="text-center"><input value=" X " type="button" class="btnMenos"></td></tr>`);
  $(".btnMenos").on("click", borrar);
};

function borrar(){
$(this).parent().parent().remove();
}  


  
  
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
  
  