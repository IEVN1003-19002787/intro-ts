
interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;

}
interface Detalles{
    autor:string;
    year:number;
}
const reproductor:Reproductor={
    volumen:50,
    segundo:10,
    cancion:"valiente",
    detalles:{
        autor:"peso pluma",
        year:2018
    }
}
/*console.log(`Elvolumen actual es: ${reproductor.volumen}`);
console.log(`Los segundo son: ${reproductor.segundo}`);
console.log(`La cancion es: ${reproductor.cancion}`);
console.log(`El año es: ${reproductor.detalles.year}`);*/

const{volumen, segundo, cancion, detalles}=reproductor;
const{autor, year}=detalles;

console.log(`Elvolumen actual es: ${volumen}`);
console.log(`Los segundo son: ${segundo}`);
console.log(`La cancion es: ${cancion}`);
console.log(`El aut es: ${autor}`);
console.log(`El año es: ${year}`);

const dbz:string[]=['Goku','Majinbu','Babidy','friser']
console.log(`Personaje 1 ${dbz[0]}`);
console.log(`Personaje 2 ${dbz[1]}`);
console.log(`Personaje 3 ${dbz[2]}`);
console.log(`Personaje 4 ${dbz[3]}`);

const[a,,b]=dbz;
console.log(`Personaje 1 ${a}`);
console.log(`Personaje 1 ${b}`);