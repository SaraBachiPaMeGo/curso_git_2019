
class Pais {
    constructor(code){
        this.code = code
    }
    get lang(){
        let language = 'Otros'
        if(this.code== 'es'){
            language = 'Español'
        }
        return language
    } /* Nos devuelve un valor, es una propiedad temporal. Para guardarla como propiedad se debería de llamar de otra manera. El nombre del get o set no tieene que ser la misma que la rpopiedad */

    set setJefe(name){
        this.jefe = name.toLowerCase()
    }
    /* Accesos: crear propiedades. funciones que devuelven x y a las que les ponemos por delante 'get' o 'set'. Se invocan como propiedades */
}

let p1 = new Pais('es')
console.log(p1.lang)/* En node no puede haber un export, por eso me salía mal. Parece una propiedad pero es un método  */
p1.setJefe = 'Pepe'
p1.jefe = 'Pepe' /* También nos podemos saltar el método. Se solían utilizar para las variables privadas.  */
console.log(p1) /* De esta manera guardamos el nombre en jefe. invocamos un método que recibe un parámetro y en este caso lo guarda como 'jefe'.  */

/* OBJETIVO: Crear propiedades que entran y salen de forma dinámica. */