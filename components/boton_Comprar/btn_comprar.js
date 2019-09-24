export class BtnComprar extends HTMLElement {

    static get observedAttributes(){ /* Cuano queremos que hyaan atributos, tenemos que observarlos de esta manera. sólo queremos ver el state. */
        return ['state']
    }

    get template() {
        return `
        <style>
        :host {
            display:block;
            margin:1rem;
            --color-boton: ${this.color}
        }
        button {
            background-color: var(--color-boton);
            border:0;
            border-radius:5px;
            color:white;
        }
        </style>
        <div>
              <button id='btn'>Comprar</button>              
              <p><slot name="slot1">Slot 1</slot></p>     
        </div>
        `
        /* Los slots son partes de código en donde vas a escribir algo desde fuera. Debemos de ponerle el atributo slot y con un nombre dentro. Transcluímos, insetamos textos desde fuera */
    }

    constructor() {
        super() /* No instancio correctamente sino pongo super */
        console.log('Seré un botón')
        this.color = 'gray'

    }

    connectedCallback() { /* Se ejecuta cuando se renderiza */
        console.log('Renderizado el botón')
        this.shadow = this.shadow ? this.shadow :
            this.attachShadow({ mode: 'open' })
            this.shadow.innerHTML = this.template /* Nos permite enganchar la shadow(el attach) y el modo de shadow: si lo quieres en modo open o close.(tipo de aislamiento)*/
        //this.btn = document.querySelector('#btn') /* No va a funcionar porque pone NULL, ya que está actuando en el shadow */
        this.btn = this.shadow.querySelector('#btn')
        this.btn.addEventListener('click', this.onClick.bind(this))
    }

    attributeChangedCallback(attr, oldVal, newVal) { /* Cambia cuando el atributo de una atiqueta cambia, de esta manera los botones se enterarán de cómo están. Sólo responden a los observedAtributes() */
        console.log('Cambiado ', attr, ' al valor: ', newVal);
        
        if(newVal){
            this.color ='orange'
        }else{
            this.color = 'gray'
        }
        this.connectedCallback()
      };

    onClick() {
        
        if(this.color == 'orange'){
            console.log('Enviando datos',this.getAttribute('id')) // Tambien se puede poner this.id (porque lo mapea)
            /* Generamos un evento a través de dispatch event */
            this.dispatchEvent(new CustomEvent('tramite',{detail: this.id})) /* Creamos un evento a medida, es como cuando haces un "new Error", es una subclase de event  */
            /* Dependiendo del id que nos dé (si compra, reserva,etc) haga x. 'tramite' es el evento que nos dará el id */ /* Ponemos detail porque es donde recoge el id */
        }

    }

}

customElements.define('boton-comprar', BtnComprar) /* Propiedad de window (customElements) */