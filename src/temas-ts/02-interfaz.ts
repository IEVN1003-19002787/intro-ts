interface Alumno{
    nombre:string;
    edad:number;
    email:string;
    calificacion?:number;
}

const alumno:Alumno = {

    nombre: 'Mario',
    edad: 23,
    email: 'mario@gmail.com',
}
console.log(alumno);

let mascotas =['perro','gato','perico'];
mascotas[1]='Nuevo gato';
mascotas.push('Leon');
console.log(mascotas)

let tem:(string|number)[]=[]
tem.push(11)
tem.push('hola')
console.log(tem)