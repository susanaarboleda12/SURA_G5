let nombreSignoVital=document.getElementById("nombresignovital")
let valorSignoVital=document.getElementById("valorsignovital")
let fechaMedidaSignoVital=document.getElementById("fechamedidasignovital")

let botonRegistroSignoVital=document.getElementById("botonregistrosignovital")

botonRegistroSignoVital.addEventListener("click",function(evento){
    evento.preventDefault()
    


let datosFormularioSignoVital={
    nombre:nombreSignoVital.vaue,
    valor:valorSignoVital.value,
    fechaMedida:fechaMedidaSignoVital.value
}

console.log(datosFormularioSignoVital)

Swal.fire({
    title: "Registro Exitoso!",
    text: "Ya eres parte de nuestra gran familia!",
    icon: "success"
  });
})