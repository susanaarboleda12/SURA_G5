let nombreEnfermedad=document.getElementById("nombreenfermedad")
let sintomasEnfermedad=document.getElementById("sintomasenfermedad")
let clasificacionEnfermedad=document.getElementById("clasificacionenfermedad")
let probabilidadVidaEnfermedad=document.getElementById("probabilidadvidaenfermedad")
let gradoEnfermedad=getElementById("gradoenfermedad")

let botonRegistroEnfermedad=document.getElementById("botonregistroenfermedad")

botonRegistroEnfermedad.addEventListener("click",function(evento){
    evento.preventDefault()
    


let datosFormularioEnfermedad={
    nombre:nombreEnfermedad.value,
    sintomas:sintomasEnfermedad.value,
    clasificacion:clasificacionEnfermedad.value,
    probabilidad:probabilidadVidaEnfermedad.value

}

console.log(datosFormularioEnfermedad)

Swal.fire({
    title: "Registro Exitoso!",
    text: "Ya eres parte de nuestra gran familia!",
    icon: "success"
  });
})