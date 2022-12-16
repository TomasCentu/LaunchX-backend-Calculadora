export class Calculadora {

    primerNum = 0;
    segundoNum = 0;
    operador = '';
    
    sumar (num1, num2) {
        return num1 + num2;
    };
    
    restar (num1, num2) {
        return num1 - num2;
    };
    
    div (num1, num2) {
        return num1 / num2;
    };
    
    mult (num1, num2) {
        return num1 * num2;
    };
    
    potencia (base, exponente) {
        return Math.pow(base, exponente);
    };
    
    raiz (num) {
        return Math.sqrt(num);
    };

    hacerOperacion (operador) {

        switch (operador) {
            case '+':
                return this.sumar(this.primerNum, this.segundoNum)
            case '-':
                return this.restar(this.primerNum, this.segundoNum)
            case '/':
                return this.div(this.primerNum, this.segundoNum)
            case '*':
                return this.mult(this.primerNum, this.segundoNum)
            case '^':
                return this.potencia(this.primerNum, this.segundoNum)
            case '√':
                return this.raiz(this.segundoNum)
        }
    };
}