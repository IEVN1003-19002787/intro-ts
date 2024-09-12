class FormGeneral{
    a:number;
    b:number;
    c:number;
    constructor(a:number,b:number,c:number){
        this.a=a;
        this.b=b;
        this.c=c;
    }
    calcular(): { x1: number, x2: number } {
        let discriminante = Math.pow(this.b, 2) - 4 * this.a * this.c;
        let x1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
        let x2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
        return { x1, x2 };
    }
    imprimir() {
        
            const { x1, x2 } = this.calcular();
            console.log(Los resultados son: ${x1} y ${x2});
        
    }
}

const ecuacion=new Ecuacion(1,6,8);
ecuacion.imprimir();

/*class Area{
    protected num1:number;
    protected num2:number;
    constructor(num1:number, num2:number){
        this.num1 =num1;
        this.num2= num2;
    }
}
const area=new Area(55, 44);*/