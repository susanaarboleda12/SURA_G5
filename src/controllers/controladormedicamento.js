let nombreMedicamento=document.getElementById("nombremedicamento")
let presentacionMedicamento=document.getElementById("presentacionmedicamento")
let dosisMedicamento=document.getElementById("dosismedicamento")
let laboratorioMedicamento=document.getElementById("laboratoriomedicamento")
let fechaCaducidadMedicamento=document.getElementById("fechacaducidadmedicamento")
let contraindicacionesMedicamento=document.getElementById("contraindicacionesmedicamento")
let registroMedicamento=document.getElementById("registromedicamento")
let copagoMedicamento=document.getElementById("copagomedicamento")


let botonRegistroMedicamento=document.getElementById("botonregistromedicamento")

botonRegistroMedicamento.addEventListener("click",function(evento){
    evento.preventDefault()
    


let datosFormularioMedicamento={
    nombre:nombreMedicamento.value, 
    presentacion:presentacionMedicamento.value,
    dosis:dosisMedicamento.value,
    laboratorio:laboratorioMedicamento.value,
    fechaCaducidad:fechaCaducidadMedicamento.value,
    contraindicaciones:contraindicacionesMedicamento.value,
    registro:registroMedicamento.value,
    copago:copagoMedicamento.value
}

console.log(datosFormularioMedicamento)

Swal.fire({
    title: "Registro Exitoso!",
    text: "Ya eres parte de nuestra gran familia!",
    icon: "success"
  });
})