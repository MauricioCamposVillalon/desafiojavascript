let color1 = document.getElementById('btn-1');
let color2 = document.getElementById('btn-2');
let color3 = document.getElementById('btn-3');
let color4 = document.getElementById('btn-4');
let color5 = document.getElementById('btn-5');
let color6 = document.getElementById('btn-6');

color1.addEventListener('click', function () {
    let color1 = document.getElementById('btn-1').style.backgroundColor;
    document.getElementById('caja').style.backgroundColor = color1;
});

color2.addEventListener('click', function () {
    let color2 = document.getElementById('btn-2').style.backgroundColor;
    document.getElementById('caja').style.backgroundColor = color2;
});
color3.addEventListener('click', function () {
    let color3 = document.getElementById('btn-3').style.backgroundColor;
    document.getElementById('caja').style.backgroundColor = color3;
});
color4.addEventListener('click', function () {
    let color4 = document.getElementById('btn-4').style.backgroundColor;
    document.getElementById('caja').style.backgroundColor = color4;
});
color5.addEventListener('click', function () {
    let color5 = document.getElementById('btn-5').style.backgroundColor;
    document.getElementById('caja').style.backgroundColor = color5;
});
color6.addEventListener('click', function () {
    let color6 = document.getElementById('btn-6').style.backgroundColor;
    document.getElementById('caja').style.backgroundColor = color6;
});