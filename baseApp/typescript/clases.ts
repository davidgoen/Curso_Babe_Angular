interface Fullname {
    nombre: string;
    apellidos: string;
}

class FullnameCl {
    constructor(public nombre: string, public apellidos: string) {}
}

class User {
   /* private nombre: string;
    private apellidos: string;
    private edad: number;
    private genero: any;
    constructor(nombre, apellidos, edad, genero) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.genero = genero;
    }
    */
        saludar() {
            console.log(` Hola, soy ${this.fullname.nombre} ya somos muchos`);
        }
        constructor(public fullname: Fullname,
            public fullnameCl: FullnameCl,
            public edad: any,
            public genero: any) {
        }
}

class Alumno extends User {
    curso;
    constructor(fullname, fullnameCl, edad, genero, curso) {
        super(fullname, fullnameCl, edad, genero);
        this.curso = curso;
    }
}

let oUser1 = new User({nombre: 'Juan', apellidos: 'lopez'}, {nombre: 'Juan', apellidos: 'lopez'}, 33, 'h');
oUser1.saludar();
console.log(oUser1);
