import {Calculadora} from './Calculadora.js'

const calculadora = new Calculadora();

// botones de calculadora
const btn = document.querySelectorAll('button#btn');
const btnNum = document.querySelectorAll('button#btn_numero');
const borrar = document.getElementById('btn_borrar');
const enter = document.getElementById('btn_enter');

// pantalla de calculadora 
const salida = document.getElementById('salida');
const residuo = document.getElementById('residuo');

// acciones de la calculadora
btnNum.forEach(btn => {
    btn.addEventListener('click', (btn) => {
        if (btn.target.innerHTML === '.' && salida.textContent.includes('.')) {
            return
        }

        if (btn.target.innerHTML === '.' && salida.textContent == '') {
            salida.textContent += 0
        }

        salida.textContent += btn.target.innerHTML;
    })
})

borrar.addEventListener('click', () => {
    salida.textContent = '';
    residuo.textContent = '';
})

btn.forEach(btn => {
    btn.addEventListener('click', (btn) => {

        if (residuo.textContent == '') {

            residuo.textContent += salida.textContent;
            salida.textContent = '';
            calculadora.primerNum = parseFloat(residuo.textContent);
            
            if (residuo.textContent == '' && !btn.target.innerHTML == '√') {
                residuo.textContent += 0;
            }

            residuo.textContent += ' ' + btn.target.innerHTML + ' ';
            calculadora.operador = btn.target.innerHTML;
        } 
    });
})

enter.addEventListener('click', () => {

    calculadora.segundoNum = parseFloat(salida.textContent);
    residuo.textContent += salida.textContent;
    salida.textContent = calculadora.hacerOperacion(calculadora.operador);
})