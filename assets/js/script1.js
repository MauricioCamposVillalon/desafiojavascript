
let formula = document.getElementById("formulario");
formula.addEventListener("submit", function (event) {
   event.preventDefault();
   limpiarErrores();
  // document.querySelector(".errorNombre").innerHTML = "Error ";
  let txtnombre = document.getElementById('nombre').value;
  let txtasunto = document.getElementById('asunto').value;
  let txtmensaje = document.getElementById('mensaje').value;

  console.log(txtnombre);
  let res = validar(txtnombre,txtasunto,txtmensaje);
   if(res === true) {
      exito();
      };

});


function limpiarErrores() {
   document.querySelector(".errorNombre").innerHTML = "";
   document.querySelector(".errorAsunto").innerHTML = "";
   document.querySelector(".errorMensaje").innerHTML = "";
};

function exito() {
   document.querySelector(".resultado").innerHTML = "Formulario pasó la    validación";
};


function validar(nombre,asunto,mensaje) {
   let estado = true;
   let validacion = /[a-zA-Z]/gim;
   if (validacion.test(nombre) == false) {
   document.querySelector(".errorNombre").innerHTML = "Nombre es Requerido."
   estado = false;
   };
   if (validacion.test(asunto) == false) {
   document.querySelector(".errorAsunto").innerHTML = "Asunto es requerido."
   estado = false;
   };
   if (validacion.test(mensaje) == false ) {
   document.querySelector(".errorMensaje").innerHTML = "Mensaje es requerido"
   estado = false;
   };
   return estado;
   };



