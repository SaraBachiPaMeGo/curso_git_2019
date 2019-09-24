export class MiComponente extends HTMLElement {
    get template() {

        return `
    <style>
        div{
            background-color: bisque;
        }
        h1 {
            color: bisque;
            background-color: rgb(255, 140, 0);
        }
        header h1 {font-size: 3rem}
        mi-componente {
            display: block; /* Por defecto los objetos son inline y no tienen ancho */
            width: 80%;
        }
    </style>
    <div>
 <h1>Ejemplo de Componente</h1>
 <p>Esto es un componente</p>
 </div>
`
/* Tienes que poner algo de cógido de HTML para que lo renderice, sino no pinta nada. */
    }
    constructor() {
        super()
        // Creo un nuevo objeto para registrar un componente, generando un nuevo prototipo
  var elemento = Object.create(HTMLElement.prototype);

  // Defino una función callback para el instante del ciclo de vida "created"
  elemento.createdCallback = function() {
    console.log('se ha creado un elemento');
  };

  // Defino una función callback para el instante del ciclo de vida "attached"
  elemento.attachedCallback = function() {
    console.log('se ha añadido un elemento al DOM');
  };

  // Defino una función callback para el instante del ciclo de vida "detached
  elemento.detachedCallback = function() {
    console.log('se ha retirado un elemento del DOM');
  };

  // Defino una función callback para el instante del ciclo de vida "attributeCanged"
  elemento.attributeChangedCallback = function(attr, oldVal, newVal) {
    console.log('Cambiado ', attr, ' al valor: ', newVal);
  };

  // Este es el código para registrar el componente, en el que indicamos su prototipo que acabamos de definir
  document.registerElement('ciclo-de-vida', {
      prototype: elemento
  });
        const shadow = this.attachShadow({ mode: 'open' })
        shadow.innerHTML = this.template /* Es un string, no tiene innerHTML */
    }
}

customElements.define('mi-componente', MiComponente) /* La etiqueta que pones para inyectar lo que quieres, NOMBRE de la Etiqueta html + OBJETO (qué clase va a crear el objeto) */ /* Se hace por detrás new MiComponente (), instanciamos un objeto de forma declarativa */
