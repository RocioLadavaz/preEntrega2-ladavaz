class Alimento {
    constructor(nombre, familia, nutrientePrimario, caloria){
        this.nombre = nombre;
        this.familia = familia;
        this.nutrientePrimario = nutrientePrimario;
        this.caloria = caloria;
    }
}
const queso = new Alimento ("queso","lacteo", "proteina", 600);
const lenteja = new Alimento ("lenteja", "legumbre","hidrato de carbono",350);
const tomate = new Alimento ("tomate", "fruta", "vitaminas, minerales y fibra", 50);
const mayonesa = new Alimento ("mayonesa", "adereso", "grasas", 800);
const aceite = new Alimento ("aceite", "grasa", "acidos grasos", 900);
const pan = new Alimento ("pan", "cereal", "hidrato de carbono", 270);
const banana = new Alimento ("banana", "fruta", "fibra, vitaminas y minerales", 100);
const manzana = new Alimento ("manzana", "fruta", "fibra, vitaminas y minerales", 80);
const yogur = new Alimento ("yogur", "lácteo", "proteina", 230);



const arrayAlimentos = [queso, lenteja, tomate, mayonesa, aceite, pan, banana, manzana, yogur];

console.log (arrayAlimentos);


alert ("Bienvenido al simulador de diccionario de alimentos");

function eleccion() {
   let elegir = parseInt(prompt("Por favor elija entre las siguientes opciones:\n1)Buscar un alimento en la base de datos\n2)Agregar un alimento nuevo\n3)Organizar el diccionario segun menor cantidad de calorias\n4)Eliminar un alimento de la base de datos\n5)Conocer calorias de alimentos según gramaje\n6)Salir"));
   return elegir;
}

//1) buscar alimento
function buscaAlimento(){
    let buscarMas = "si";
    do{
        const nombre = prompt("Ingrese el alimento que le interese conocer-en singular").toLowerCase();
        let alimentoBaseDatos = arrayAlimentos.some(alimento => alimento.nombre === nombre);
        if (alimentoBaseDatos === true){
            const alimento = arrayAlimentos.find(alimento => alimento.nombre === nombre);
            alert ( "El alimento " + nombre + " es un alimento de tipo " + alimento.familia + " que es rico en  " + alimento.nutrientePrimario + " aportando " + alimento.caloria+ " calorias por cada 100gr de alimento.");
        } else if ( alimentoBaseDatos === false){
            alert ("Este alimento no se encuentra en la base de datos");
        }
        buscarMas = prompt ("Desea buscar otro alimento?")
    } while (buscarMas.toLowerCase()== "si");
}


//2) agregar alimento
function alimentoNuevo(){
    let otroAlimento = "si";
    do {
        const nombre = prompt("ingrese el nombre del alimento nuevo");
        let alimentoNo = arrayAlimentos.some(alimento => alimento.nombre === nombre);
        console.log(alimentoNo);
        if (alimentoNo === false){
            const familia = prompt("ingrese el tipo del alimento nuevo");
            const nutrientePrimario = prompt("ingrese el nutriente principal del alimento");
            const caloria = prompt("ingrese la cantidad de calorias que aporta 100 gr de alimento");
            const alimento = new Alimento (nombre, familia, nutrientePrimario,caloria);
            arrayAlimentos.unshift(alimento);
        }else if (alimentoNo === true) {
            alert ("Este alimento ya se encuentra en nuestra base de datos");
        }
        otroAlimento = prompt ("Desea agregar otro alimento?");
    } while (otroAlimento.toLowerCase() == "si");
}


//3 ) ordenar el diccionario de alimentos de menos calorias a mas:
function ordenHipoCal(){
    let alimentoMenosCalorias = arrayAlimentos.sort ((a,b) => {
     if (a.caloria > b.caloria){
         return 1;
        } 
        if (a.caloria < b.caloria) {
          return -1;
        } 
        return 0;
    }) 
    console.log("Alimentos ordenados de menos a más calorias", alimentoMenosCalorias);
}


// 4) eliminar un alimento
function borrarAlim(){ 
    const nombre = prompt("Ingrese el alimento que desea eliminar del diccionario");
    let alimentoNo = arrayAlimentos.some(alimento => alimento.nombre === nombre);
    console.log(alimentoNo);
    if (alimentoNo === true){
        const alimento = arrayAlimentos.find(alimento => alimento.nombre === nombre);
        let indice = arrayAlimentos.indexOf(alimento);
        arrayAlimentos.splice(indice,1);
        alert("El alimento ha sido eliminado");
        console.log(arrayAlimentos);
    } else {
        alert ("Este alimento no se encuentra en la base de datos");
    }
}


//5) calorias segun gramaje de alimento
function caloriaAlimento(){
    let buscarMas = "si";
    do{
        const nombre = prompt("Ingrese el alimento que le interese conocer sus calorias").toLowerCase();
        let alimentoBaseDatos = arrayAlimentos.some(alimento => alimento.nombre === nombre);
        if (alimentoBaseDatos === true){
            let gramos = parseInt(prompt("Ingrese cuantos gramos de " + nombre + " quiere transformar en calorías"));
            const alimento = arrayAlimentos.find(alimento => alimento.nombre === nombre);
            let resultado = alimento.caloria * (gramos/100);
            alert ( "El alimento " + nombre + " aporta " + resultado + " calorias por "+ gramos + " gramos del alimento.");
        } else if ( alimentoBaseDatos === false){
            alert ("Este alimento no se encuentra en la base de datos");
        }
        buscarMas = prompt ("Desea buscar otro alimento?")
    } while (buscarMas.toLowerCase()== "si");
    
}


//6) salir
function salir(){
    alert ("Gracias por su visita!")
}


// aplicación del programa:

let elegir = eleccion();

switch (elegir){
    case 1:
        buscaAlimento();
        break;
    case 2:
        alimentoNuevo();
        break;
    case 3: 
        ordenHipoCal();
        break;
    case 4:
        borrarAlim();
        break;
    case 5:
        caloriaAlimento();
        break;
    case 6: 
        salir();
        break;
    default:
        alert ("Esa opción no es valida!");
        break;
}


