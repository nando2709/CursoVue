
//se llama a vue y se puede acceder si se llama al cdn
const app = Vue.createApp({
    data() {

        return {
            titulo: 'Mi cuenta bancaria',
            cantidad: 500,
            enlace: 'https://www.netflix.com/',
            estado: true,
            desactivar: false,

            servicios: [
                'tranferencias', 'pagos', 'giros', 'cheques'
            ]
        }
    },
    //Es un objeto que va a recibir diferentes funciones
    methods: {
        agregarSaldo() {
            this.cantidad = this.cantidad + 100;
        },
        disminuirSaldo(valor) {
            if (this.cantidad === 0) {
                this.desactivar = true;
                alert("Fondos insuficientes")
                //para salir del metodo
                return
            }

            this.cantidad = this.cantidad - valor;
        }

    },

    computed:{
        colorCantidad(){
            return this.cantidad >500 ? 'text-success' :'text-danger'
        },
        mayusculasTexto(){
            return this.titulo.toUpperCase()
        }

    }
})