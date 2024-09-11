interface Reproductor{
    volume:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}
interface Detalles{
    autor:string;
    year:number;

}
const reproductor:Reproductor={
    volume:50,
    segundo:10,
    cancion:'Valiente',
    detalles:{
        autor:'paty cantu',
        year:2010
    }
}
/*
console.log(`El volumen actual es: ${reproductor.volume}`);
console.log(`Segundo actuales: ${reproductor.segundo}`);
console.log(`La cancion actual es: ${reproductor.cancion}`);
console.log(`El artista actual es: ${reproductor.detalles.autor}`);
console.log(`El año es: ${reproductor.detalles.year}`);
*/
const{volume,segundo,cancion,detalles}=reproductor;
const{autor,year}=detalles;
console.log(`El volumen actual es: ${volume}`);
console.log(`Segundo actuales: ${segundo}`);
console.log(`La cancion actual es: ${cancion}`);
console.log(`El artista actual es: ${autor}`);
console.log(`El año es: ${year}`);

const dbz:string[]=['Goku','Majinbu','Babidy','Freezer'];
console.log(`Personake 1 ${dbz[0]}`);
console.log(`Personake 2 ${dbz[1]}`);
console.log(`Personake 3 ${dbz[2]}`);
console.log(`Personake 4 ${dbz[3]}`);


const[a,,b]=dbz;
console.log(`Personaje 1 ${a}`);
console.log(`Personaje 2 ${b}`);