const my_h1 = document.querySelectorAll(".ul_container li")

for (let i = 0; i < my_h1.length; i++) {
    if(i == 1 || i == 3){
        my_h1[i].classList.add("selection")
    }
}

// import informacion from "./components/funciones.js"
// console.log(informacion.nombre(), informacion.edad())

// Cálculo del promedio de tres números e indicar si el estudiante aprobó o reprobó

// let num1;
// let num2;
// let num3;

// do{
//     num1 = Number(prompt("Dame la nota 1"))
//     num2 = Number(prompt("Dame la nota 2"))
//     num3 = Number(prompt("Dame la nota 3"))
// }while(isNaN(num1, num2, num3))

// let prom = (num1 + num2 + num3) / 3;
// console.log(`La nota final es: ${prom}`)



// Determinar si un número es par o impar usando prompt

// let num;

// do{
//     num = Number(prompt("Dame un numero"))
// }while(isNaN(num))

// if (num % 2 == 0){
//     console.log('El numero es par')
// }else{
//     console.log('El numero es impar')
// }



// Suma de los primeros n números naturales usando un ciclo for

// let n;

// do{
//     n = Number(prompt("Dame un numero"))
// }while(isNaN(n))


// function primerosnNaturales(n){
//     let suma = 0;

//     for (let i = 0; i <= n; i++) {
//         suma += i;
//     }

//     return suma
// }


// let resultado = primerosnNaturales(n);
// console.log('La suma de los primeros ' + n + ' numeros naturales es ' + resultado)


// Validar si un número es positivo, negativo o cero con while

// let n;

// do{
//     n = Number(prompt("Dame un numero"))
// }while(isNaN(n))

// while (n > 0){
//     console.log("El numero es positivo")
//     break
// }

// while (n < 0){
//     console.log("El numero es negativo")
//     break
// }

// while (n == 0){
//     console.log("El numero es cero")
//     break
// }


// Verificar si un número es primo con un ciclo while

// let n;

// do{
//     n = Number(prompt("Escribe un numero"))
// }while(isNaN(n))

// while (){

//}
