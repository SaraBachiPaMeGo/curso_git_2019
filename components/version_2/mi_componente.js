const template = `
<style>
        div{
            background-color: bisque;
        }
        h1 {
            color: bisque;
            background-color: rgb(255, 140, 0);
        }
    </style>
`

export class MiComponente extends HTMLElement {
    constructor() {
        super()
        let element =

            console.dir(temp)

        const shadow = this.attachShadow({ mode: 'open' }) 
            shadow.innerHTML = template /* Es un string, no tiene innerHTML */
    }
}

customElements.define('mi-componente', MiComponente) /* La etiqueta que pones para inyectar lo que quieres, NOMBRE de la Etiqueta html + OBJETO (qué clase va a crear el objeto) */ /* Se hace por detrás new MiComponente (), instanciamos un objeto de forma declarativa */