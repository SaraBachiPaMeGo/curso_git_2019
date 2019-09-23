class MiComponente extends HTMLElement{ /* Creamos un nodo, que luego implementaremos en el html a través de define */
    constructor(){
        super()
        let temp = document.querySelector('[rel="import"]').import.querySelector('template') /* Entramos al documento que está en nuestro propio documento (primera parte) y hacemos un query selector para coger el template. (Ref de la caja) */
        
        console.dir(temp)

        const shadow = this.attachShadow({mode:'open'})/* Queremos crear un estorno especial de scope reestringido (ámbito como el de las variables). Esto lo utilizamos para que los dos h1 no tengan el mismo color  */
        shadow.innerHTML = temp.innerHTML /* temp es un nodo del DOM , no es de tipo input para que tenga un value. Lo tenemos que guardar en un innerHTML */
    }
}

customElements.define('mi-componente',MiComponente) /* La etiqueta que pones para inyectar lo que quieres, NOMBRE de la Etiqueta html + OBJETO (qué clase va a crear el objeto) */ /* Se hace por detrás new MiComponente (), instanciamos un objeto de forma declarativa */