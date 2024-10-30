let nombreMedico=document.getElementById("nombremedico")
let matriculaProfesionalMedico=document.getElementById("matriculaprofesionalmedico")
let especialidadMedico=document.getElementById("especialidadmedico")
let salarioMedico=document.getElementById("salariomedico")
let ipsMedico=document.getElementById("ipsmedico")
let correoElectronicoMedico=document.getElementById("correomedico")
let telefonoMedico=document.getElementById("telefonomedico")
let direccionMedico=document.getElementById("direccionmedico")
let disponibleFindeSemanaMedico=document.getElementById("disponibleFindeSemana")

let botonRegistroMedico=document.getElementById("botonregistromedico")

botonRegistroMedico.addEventListener("click",function(evento){
    evento.preventDefault()
    


let datosFormularioMedico={
    nombre:nombreMedico.value,
    matriculaProfesional:matriculaProfesionalMedico.value,
    especialidad:especialidadMedico.value,
    salario:salarioMedico.value,
    ips:ipsMedico.value,
    correoElectronico:correoElectronicoMedico.value,
    telefono:telefonoMedico.value,
    direccion:direccionMedico.value,
    disponibleFindeSemana:disponibleFindeSemanaMedico.value

}

console.log(datosFormularioMedico)

Swal.fire({
    title: "Registro Exitoso!",
    text: "Ya eres parte de nuestra gran familia!",
    icon: "success"
  });
})
