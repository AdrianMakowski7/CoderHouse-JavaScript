
let botonAgregar = document.querySelector('#btnAgregarEdu');
function agregarEducacion(){
  if (!document.getElementById("educaciondiv")){
    let divEducacion = document.createElement("div");
    divEducacion.id = "educaciondiv"
    divEducacion.innerHTML = `  <div class="row"> 
                                <div class="form-group col-md-6">
                                <label for="Institucion">Institucion: </label>
                                <input type="text" class="form-control" id="Institucion" >
                                </div>
                                <div class="form-group col-md-6">
                                <label for="name">Años: </label>
                                <input type="text" class="form-control" id="ciudad" >
                                </div>
                                </div>`
    document.getElementById("contenedorEducacion").appendChild(divEducacion);
  }
}
botonAgregar.addEventListener('click', agregarEducacion);

let educacion = [
  {
      institucion: document.getElementById('institucion').value,
      anios: document.getElementById('anios').value,
  }
]
if(document.getElementById('educaciondiv')){
  let educacion2 = {
      institucion: document.getElementById('institucion2').value,
      anios: document.getElementById('anios2').value,
  }
  educacion.push(educacion2);
}
localStorage.setItem('edu', educacion);


function captura() {
  let nombre = document.getElementById("nombre").value;
  let apellido= document.getElementById("apellido").value;
  let nacimiento = document.getElementById("nacimiento").value;
  let edad = document.getElementById("edad").value;
  let telefono = document.getElementById("telefono").value;
  let ciudad = document.getElementById("ciudad").value;
  let pais = document.getElementById("pais").value;
  let email = document.getElementById("email").value;
  let cargo = document.getElementById("cargo").value;
  let descripcion = document.getElementById("descripcion").value;
  let resumen = document.getElementById("resumen").value;
  let twitter = document.getElementById("twitter").value;
  let instagram = document.getElementById("instagram").value;
  let github = document.getElementById("github").value;
  let linkedin = document.getElementById("linkedin").value;
  localStorage.setItem('nombre' , nombre);
  localStorage.setItem('apellido' , apellido);
  localStorage.setItem('nacimiento' , nacimiento);
  localStorage.setItem('edad' , edad);
  localStorage.setItem('telefono' , telefono);
  localStorage.setItem('ciudad' , ciudad);
  localStorage.setItem('pais' , pais);
  localStorage.setItem('email' , email);
  localStorage.setItem('cargo' , cargo);
  localStorage.setItem('descripcion' , descripcion);
  localStorage.setItem('resumen' , resumen)
  localStorage.setItem('twitter' , twitter)
  localStorage.setItem('instagram' , instagram)
  localStorage.setItem('github' , github)
  localStorage.setItem('linkedin' , linkedin)
  window.location="portfolio.html";
}


