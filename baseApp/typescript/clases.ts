// SOLO en ES6
// Esto es de "mentira"


class User {
    private nombre: string;
    private apellidos: string;
    private edad: number;
    private genero: any;
    constructor(nombre, apellidos, edad, genero) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.genero = genero;
    }

        saludar() {
            console.log(` Hola, soy ${this.nombre} ya somos muchos`);
        }
}

class Alumno extends User {
    curso;
    constructor(nombre, apellidos, edad, genero, curso) {
        super(nombre, apellidos, edad, genero);
        this.curso = curso;
    }
}

let oUser1 = new User('Juan', 'lopez', 33, 'h');
oUser1.pais = 'España';
oUser1.saludar();
console.log(oUser1);
