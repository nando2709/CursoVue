//funciones 
 function sumar(){
     console.log(10)
 }
 sumar();

 //funcion con flecha

 const sumar2 =(numero)=>{
    console.log(20);
 }
 sumar2();

 //Reduccion de codigo
 const sumar3=numero=>{
     console.log(30);
 }
 sumar3();

 //Funcion de flecha con return
 const sumar4=(numero1,numero2)=>{
     return `La suma es:${numero1 + numero2}`;

 }
 const resultado=sumar4(40,20);
//  console.log(resultado);

 //arrow function reducida
  const sumar5=(numero1,numero2)=>`La suma es:${numero1 + numero2}`;
 const resultados=sumar4(60,30);
 //console.log(resultados);



