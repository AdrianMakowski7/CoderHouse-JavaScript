let codigoEducacion = 0;
let codigoTrabajo = 0;
let arrayTrabajos = [];
let arrayEducacion= [];

$(document).ready( ()=>{
  $("#nombre").val(localStorage.getItem('nombre'));
  $("#apellido").val(localStorage.getItem('apellido'));
  $("#nacimiento").val(localStorage.getItem('nacimiento'));
  $("#edad").val(localStorage.getItem('edad'));
  $("#telefono").val(localStorage.getItem('telefono'));
  $("#ciudad").val(localStorage.getItem('ciudad'));
  $("#pais").val(localStorage.getItem('pais'));
  $("#email").val(localStorage.getItem('email'));
  $("#competencia").val(localStorage.getItem('competencia'));
  $("#descripcion").val(localStorage.getItem('descripcion'));
  $("#resumen").val(localStorage.getItem('resumen'));
  $("#twitter").val(localStorage.getItem('twitter'));
  $("#instagram").val(localStorage.getItem('instagram'));
  $("#github").val(localStorage.getItem('github'));
  $("#linkedin").val(localStorage.getItem('linkedin'));
  $(`#btnAgregarEdu`).on("click" , agregarEducacion);
  $(`#btnAgregarExp`).on("click" , agregarTrabajos);
});

function agregarEducacion(){
  let institucion = $("#institucion").val();
  let inicioInst = $("#inicioInst").val();
  let finInst = $("#finInst").val();
  let descripcionInst = $("#descripcionInst").val();
  codigoEducacion = codigoEducacion+1; 
  $("#tablaInst").append(`<tr class="eduAnimacion" id="${codigoEducacion}"><td> ${institucion} </td><td> ${inicioInst} </td><td> ${finInst} </td><td> ${descripcionInst} 
  </td><td class="text-center"><input value=" X " type="button" class="btnMenos" codigoeducacion="${codigoEducacion}"></td></tr>`);
  $(".btnMenos").on("click", borrarEdu);
  let objetoEdu = { 
    "institucion": institucion, 
    "inicio": inicioInst,
    "fin": finInst,
    "descripcion": descripcionInst
  };
  arrayEducacion[codigoEducacion]=objetoEdu;
};

function borrarEdu(){
  let codigoEdu = $(this).attr(`codigoeducacion`);
  $(`#${codigoEdu}`).remove();
  localStorage.removeItem(codigoEdu);
}

function agregarTrabajos(){
  let empresaExp = $("#empresaExp").val();
  let inicioExp = $("#inicioExp").val();
  let finExp = $("#finExp").val();
  let descripcionExp = $("#descripcionExp").val();
  codigoTrabajo = codigoTrabajo+1
  $("#tablaExp").append(`<tr class="eduAnimacion" codigo"${codigoTrabajo}"><td> ${empresaExp} </td><td> ${inicioExp} </td><td> ${finExp} </td><td> ${descripcionExp} 
  </td><td class="text-center"><input value=" X " type="button" class="btnMenos1" codigotrabajo="${codigoTrabajo}"></td></tr>`);
  $(".btnMenos1").on("click", borrarTrab);
  let objetoTrab = { 
    "empresa": empresaExp, 
    "inicio": inicioExp,
    "fin": finExp,
    "descripcion": descripcionExp
  };
  arrayTrabajos[codigoTrabajo]=objetoTrab;
};

function borrarTrab(){
  let codigoTrab = $(this).attr(`codigoTrabajo`);
  $(`#${codigoTrab}`).remove();
  localStorage.removeItem(codigoTrab);
}
/////////////////////Validacion Formularop/////////////////////////
let formulario = document.getElementById('formularyx');
let input = document.querySelectorAll('#formularyx input');

const expresiones = {
  expNombre: /^[a-zA-ZÀ-ÿ\s]{4,16}$/,
	expCorreo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	expEdad: /^\d{1,2}$/,
	expTelefono: /^\d{7,14}$/,
  expEmpleos: /^[a-zA-ZÀ-ÿ\s,]{4,50}$/
}

let camposValidacion = {
  nombre : false,
  apellido : false,
  edad : false,
  ciudad : false,
  pais : false,
  competencia : false,
  email : false,
  telefono : false,
}

let validarFormulario = (e) => {
  switch (e.target.id) {
    case "nombre":
      validacionDeCampo(expresiones.expNombre, e.target, e.target.id)
      break;
      case "apellido":
        validacionDeCampo(expresiones.expNombre, e.target, e.target.id)
        break;
        case "edad":
          validacionDeCampo(expresiones.expEdad, e.target, e.target.id)
          break;
          case "ciudad":
            validacionDeCampo(expresiones.expNombre, e.target, e.target.id)
            break;
            case "pais":
              validacionDeCampo(expresiones.expNombre, e.target, e.target.id)
              break;
              case "competencia":
                validacionDeCampo(expresiones.expEmpleos, e.target, e.target.id)
                break;
                case "email":
                  validacionDeCampo(expresiones.expCorreo, e.target, e.target.id)
                  break;
                  case "telefono":
                    validacionDeCampo(expresiones.expTelefono, e.target, e.target.id)
                    break;
                  }
                }
                
                let validacionDeCampo = (expresiones, input, campo) => {
                  if(expresiones.test(input.value)){
                    console.log("entro")
                    document.getElementById(`error${campo}`).classList.remove(`erroresActivos`)
                    camposValidacion[campo]= true
                  }else{
                    document.getElementById(`error${campo}`).classList.add(`erroresActivos`)
                    camposValidacion[campo]= false
                  }
                }
                
                input.forEach((input) => {
                  input.addEventListener('keyup', validarFormulario);
                  input.addEventListener('blur', validarFormulario);
                });
                
                formulario.addEventListener('submit', (e) =>{
                  e.preventDefault();
                  if(camposValidacion.nombre && camposValidacion.apellido && camposValidacion.edad && camposValidacion.ciudad && camposValidacion.pais && camposValidacion.competencia && camposValidacion.email && camposValidacion.telefono){
                    localStorage.setItem('nombre' , $("#nombre").val());
                    localStorage.setItem('apellido' , $("#apellido").val());
                    localStorage.setItem('nacimiento' , $("#nacimiento").val());
                    localStorage.setItem('edad' , $("#edad").val());
                    localStorage.setItem('telefono' , $("#telefono").val());
                    localStorage.setItem('ciudad' , $("#ciudad").val());
                    localStorage.setItem('pais' , $("#pais").val());
                    localStorage.setItem('email' , $("#email").val());
                    localStorage.setItem('competencia' , $("#competencia").val());
                    localStorage.setItem('descripcion' , $("#descripcion").val());
                    localStorage.setItem('resumen' , $("#resumen").val());
                    localStorage.setItem('twitter' , $("#twitter").val());
                    localStorage.setItem('instagram' , $("#instagram").val());
                    localStorage.setItem('github' , $("#github").val());
                    localStorage.setItem('linkedin' , $("#linkedin").val());
                    localStorage.setItem("arrayTrabajos",JSON.stringify(arrayTrabajos));
                    localStorage.setItem("arrayEducacion",JSON.stringify(arrayEducacion));
                    window.location="portfolio.html";
                  }else{
                    document.getElementById(`errormensaje`).classList.add(`erroresActivos`)
                  }
                });
                ///////////////////////////Fin validacion////////////////////////////