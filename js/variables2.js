
const productos = document.querySelector("#productos")
const kilos = document.querySelector("#kilos")
const cantidad = document.querySelector("#cantidad")
const botonCalcular = document.querySelector("#botonCalcular")
const importe = document.querySelector("span")
const btnEnviar = document.querySelector("span.guardar")



const datosProductos = [
    {
        nombre: 'CatChow Adulto',
        kilos: 1,
        precio: 350

    },
    {
        nombre: 'CatChow Adulto',
        kilos: 3,
        precio: 850
    }, {

        nombre: 'CatChow Adulto',
        kilos: 7.5,
        precio: 1500
    }, {

        nombre: 'CatChow Adulto',
        kilos: 15,
        precio: 3000
    }, /* {

        nombre: ,
        precio:,
        kilos:
    }, {

        nombre: ,
        precio:,
        kilos:
    }, {

        nombre: ,
        precio:,
        kilos:
    }, {

        nombre: ,
        precio:,
        kilos:
    }, {

        nombre: ,
        precio:,
        kilos:
    }, {

        nombre: ,
        precio:,
        kilos:
    }, {

        nombre: ,
        precio:,
        kilos:
    }, {

        nombre: ,
        precio:,
        kilos:
    }, */

];


const datosKilos = [
    { tipo: 1, factor: 1 },
    { tipo: 3, factor: 0.9 },
    { tipo: 7.5, factor: 0.8 },
    { tipo: 15, factor: 0.6 },]

/* const costoKilo = 350 */

let costoKilo = 0
for (index = 0; index < datosProductos.length; index++) {
 costoKilo = datosProductos[index].precio   
 console.table(costoKilo)
}
