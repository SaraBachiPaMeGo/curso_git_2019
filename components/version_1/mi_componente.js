class MiComponente extends HTMLElement{ /* Creamos un nodo, que luego implementaremos en el html a través de define */
    constructor(){
        super()
        let temp = document.querySelector('[rel="import"]')
        console.dir(temp)
        this.innerHTML = `
        <p> Soy un componente </p>
        `
    }
}

customElements.define('mi-componente',MiComponente) /* La etiqueta que pones para inyectar lo que quieres, NOMBRE de la Etiqueta html + OBJETO (qué clase va a crear el objeto) */ /* Se hace por detrás new MiComponente (), instanciamos un objeto de forma declarativa */