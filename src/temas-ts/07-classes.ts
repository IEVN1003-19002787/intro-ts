class Persona{
    nombre:string;
    edad:number;
    constructor(nombre:string,edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}

let persona:Persona;
persona= new Persona("Antonio",24);
persona.imprimir();


class Dado{
    private valor:number=0;
    public tirar(){
        this.valor=Math.floor(Math.random()*6)+1;
        
    }
    public imprimir(){
        console.log(`El valor del dado es ${this.valor}`)
    }
}

let dado:Dado;
dado = new Dado();
dado.tirar();
dado.imprimir();