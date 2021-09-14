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
  let animacion = $("eduAnimacion").fadeIn();
  
  $(`#btnAgregarEdu`).click(function(){
    let institucion = $("#institucion").val();
    let inicioInst = $("#inicioInst").val();
    let finInst = $("#finInst").val();
    let descripcionInst = $("#descripcionInst").val();
    var i = 1; //ID PARA CADA FILA
    var fila = `<tr id="row${i}" class="eduAnimacion"><td> ${institucion} </td><td> ${inicioInst} </td><td> ${finInst} </td><td> ${descripcionInst} </td><td class="text-center"><button type="button" name="remove" id="${i}" class="btnMenos btn_remove">  X  </button></td></tr>`;
    $(`#tablaInst tr:first`).after(fila);
    i++
    $(".eduAnimacion").css('background-color', 'rgb(236, 238, 239)')
    $(".eduAnimacion").animate({
      height: "50px", 
      width: "50px",
      fontSize:"18px",
      wordSpacing:"20px",      
    },3000);
    $("#institucion").html(institucion);
    $("#inicioInst").html(inicioInst);
    $("#finInst").html(finInst);
    $("#descripcionInst").html(descripcionInst);
  });
  
  $(document).on('click', '.btnMenos', function() {
    var button_id = $(this).attr("id");
      //cuando da click obtenemos el id del boton
      $('#row' + button_id + '').remove(); //borra la fila
      //limpia el para que vuelva a contar las filas de la tabla
      var nFilas = $("#mytable tr").length;
    });
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

