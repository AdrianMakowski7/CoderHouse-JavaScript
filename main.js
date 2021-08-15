class cliente{
  constructor(sexo,edad,nombre,apellido,pais){
    this.sex = sexo;
    this.age = edad;
    this.name = nombre;
    this.surname = apellido;
    this.country = pais;
    this.info= "Hola "+ this.name+" "+this.surname+", tienes "+this.age+" años, eres del sexo "+this.sex+" y de "+this.country;
  }
}
let cliente1 = new cliente("Masculino", 27, "Adrian", "Makowski", "Uruguay");
let cliente2 = new cliente("Masculino", 24, "Carlos", "Fernandez", "Chile");
let cliente3 = new cliente("Femenino", 42, "Maria", "Rodriguez", "Argentina");

document.write(cliente1.info + "<br>")
document.write(cliente2.info + "<br>")
document.write(cliente3.info + "<br>")
