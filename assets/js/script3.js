let btnsumar = document.getElementById('btn-sumar');
let btnrestar = document.getElementById('btn-restar');

btnsumar.addEventListener('click', function () {
    let val1 = document.getElementById('valor1').value;
    let val2 = document.getElementById('valor2').value;
    val1 = parseInt(val1);
    val2 = parseInt(val2);
    let resultado = validar(val1, val2);
    if (resultado === true) {
        console.log(reSuma(val1, val2));
        document.querySelector(".resultado").innerHTML = reSuma(val1, val2);

    } else if (resultado === false) {
        console.log(reSuma(val1, val2));
        console.log(resultado);
        document.querySelector(".resultado").innerHTML = "Debe ingresar valores numericos";
    };
});

btnrestar.addEventListener('click', function () {
    let val1 = document.getElementById('valor1').value;
    let val2 = document.getElementById('valor2').value;
    val1 = parseInt(val1);
    val2 = parseInt(val2);
    let resultado = validar(val1, val2);
    if (resultado === true) {
        console.log(reResta(val1, val2));
        document.querySelector(".resultado").innerHTML = reResta(val1, val2);

    } else if (resultado === false) {
        console.log(reResta(val1, val2));
        console.log(resultado);
        document.querySelector(".resultado").innerHTML = "Debe ingresar valores numericos";
    };
});

let reSuma = (val1, val2) => {
    let n1 = val1;
    let n2 = val2;
    let reSuma = n1 + n2;
    return reSuma;
}

let reResta = (val1, val2) => {
    let n1 = val1;
    let n2 = val2;
    let reResta = n1 - n2;
    if (reResta < 0) {
        reResta = 0;
    }
    return reResta;

}


function validar(val1, val2) {
    let estado = true;
    let validacion = /^\d*$/;
    if (validacion.test(val1) === false) {
        estado = false;
    };
    if (validacion.test(val2) == false) {
        estado = false;
    };
    return estado;
}