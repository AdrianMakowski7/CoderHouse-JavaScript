
const usuario = document.getElementById("usuario");
const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const botonEnviar = document.getElementById("btnEnviar");
const resultado = document.querySelector(".resultado")

botonEnviar.addEventListener("click",(e)=>{
  e.preventDefault();
  let error = validarCampos();
  if (error[0]) { 
    resultado.innerHTML = error[1];
    resultado.classList.add("red")
  } else {
    resultado.innerHTML = "Confirmado correctamente"
    resultado.classList.add("green")
    resultado.classList.remove("red")
  }
})

const validarCampos = ()=>{
  let error = [];
  if(usuario.value.length <5 || nombre.value.length > 30){
    error[0] = true;
    error[1] = "El Usuario debe tener entre 5 y 30 caracteres.";
    return error;
  }else if(nombre.value.length <5 || nombre.value.length > 30){
    error[0] = true;
    error[1] = "El Nombre debe tener entre 5 y 30 caracteres.";
    return error;
  } else if (edad.value < 18){
    error[0] = true
    error[1] = "Debes ser mayor de edad para acceder."
    return error;
}
  error[0] = false;
  return error;
}
