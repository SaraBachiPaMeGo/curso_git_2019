export class BtnComprar extends HTMLElement {

    get template() {
        return `
        <style>
        :host {
            display:block;
            margin:1rem;
        }
        button {
            background-color: orange;
            border:0;
            border-radius:5px;
            color:white;
        }
        </style>
        <div>
              <button id='btn'>Comprar</button>
        </div>
        `
    }

    constructor() {
        super() /* No instancio correctamente sino pongo super */
        console.log('Seré un botón')

    }

    connectedCallback() {
        console.log('Renderizado el botón')
        let shadow = this.attachShadow({ mode: 'open' })
        shadow.innerHTML = this.template /* Nos permite enganchar la shadow(el attach) y el modo de shadow: si lo quieres en modo open o close.(tipo de aislamiento)*/
        //this.btn = document.querySelector('#btn') /* No va a funcionar porque pone NULL, ya que está actuando en el shadow */
        this.btn = shadow.querySelector('#btn')
        this.btn.addEventListener('click', this.onClick.bind(this))
    }

    onClick() {
        console.log('Enviando datos')

    }

}

customElements.define('boton-comprar', BtnComprar) /* Propiedad de window (customElements) */