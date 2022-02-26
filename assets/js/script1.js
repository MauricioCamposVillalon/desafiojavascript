
let formula = document.getElementById("formulario");
formula.addEventListener("submit", function (event) {
   event.preventDefault();
   limpiarErrores();
   let txtnombre = document.getElementById('nombre').value;
   let txtasunto = document.getElementById('asunto').value;
   let txtmensaje = document.getElementById('mensaje').value;

   let res = validar(txtnombre, txtasunto, txtmensaje);
   if (res === true) {
      smsPaso();
   };

});

function limpiarErrores() {
   document.querySelector(".errorNombre").innerHTML = "";
   document.querySelector(".errorAsunto").innerHTML = "";
   document.querySelector(".errorMensaje").innerHTML = "";
};



function validar(nombre, asunto, mensaje) {
   let estado = true;
   let validacion = /[a-zA-Z]/gim;
   if (validacion.test(nombre) === false) {
      document.querySelector(".errorNombre").innerHTML = "Nombre es Requerido."
      estado = false;
   };
   if (validacion.test(asunto) === false) {
      document.querySelector(".errorAsunto").innerHTML = "Asunto es requerido."
      estado = false;
   };
   if (validacion.test(mensaje) === false) {
      document.querySelector(".errorMensaje").innerHTML = "Mensaje es requerido"
      estado = false;
   };
   return estado;
};


function smsPaso() {
   document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito !!!";
};
