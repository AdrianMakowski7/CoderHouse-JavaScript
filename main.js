let usuarios= [{
  usuario: "Carlos23",
  nombre: "Carlos Rodriguez",
  edad: 31
},{
  usuario: "Marcos51",
  nombre: "Marcos Fernandez",
  edad: 82
},{
  usuario: "Ezeeeee",
  nombre: "Ezequiel Gonzalez",
  edad: 18
},{
  usuario: "Maritoel1",
  nombre: "Mario Garrido",
  edad: 52
},{
  usuario: "Karita",
  nombre: "Karen Porras",
  edad: 41
},{
  usuario: "Mica12",
  nombre: "Micaela Rodriguez",
  edad: 21
},{
  usuario: "Fran007",
  nombre: "Franco Alaniz",
  edad: 32
},{
  usuario: "MoniMedi",
  nombre: "Monica Medina",
  edad: 19
},{
  usuario: "Anacletaparavos",
  nombre: "Anacleta Perez",
  edad: 74
}];

const boton = document.querySelector(".boton-confirmar")

for (user in usuarios){
  let datos = usuarios[user];
  let usuario = datos["usuario"];
  let nombre = datos["nombre"];
  let edad = datos["edad"];
  let htmlCode = '<div class="grid-item usuario">'+ usuario + '</div><div class="grid-item nombre">' + nombre + '</div><div class="grid-item edad">' + edad + '</div><div class="grid-item edad title"><div class="grid-item accesos"><select class="accesos1"><option value="Normal">Normal</option><option value="vip">VIP</option></select></div></div>';
  document.querySelector(".grid-conteiner").innerHTML+= htmlCode;
}

boton.addEventListener("click", ()=>{
  let confirmar = confirm("Seguro que desea confirmar?")
  if (confirmar) {
    document.body.removeChild(boton)
    let elementos= document.querySelectorAll(".accesos");
    let accesoElegido = document.querySelectorAll(".accesos1");
    for(elemnto in elementos){
      accesos = elementos[elemnto];
      accesos.innerHTML = accesoElegido[elemnto].value;
    }
  }
})