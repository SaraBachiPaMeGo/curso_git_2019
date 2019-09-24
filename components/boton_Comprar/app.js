export class App {
    constructor() {
        this.isConnected = false
        this.btnConnect = document.querySelector('button')
        this.aBtn = document.querySelectorAll('boton-comprar') /* Lo hacemos para cambiarle el valor de los atributos (además de los colores) */
        this.btnConnect.addEventListener('click', this.onClick.bind(this))
        this.aBtn.forEach(item=>{item.addEventListener('tramite', this.onOperacion.bind(this))})
    }

    onClick() {
        console.log('App cargada')
        this.isConnected = !this.isConnected /* Se pone en true */
        if(this.isConnected){
            this.aBtn.forEach(item=>{item.setAttribute('state',true)}) /* Le ponemos a cada etiqueta un atributo */
            this.btnConnect.innerHTML = 'Desconectar'
        }else{
            this.aBtn.forEach(item=>{item.removeAttribute('state')}) /* Quitamos el atributo a la etiqueta un atributo */
            this.btnConnect.innerHTML = 'Conectar'
        }
    }

   onOperacion(ev){
    console.log('Enviando datos', ev.detail)
   }
}