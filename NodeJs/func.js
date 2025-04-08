const _ = require('lodash')

const fn = (arr) => {
    return _.flatten(arr)
};

const utils = (arr) => {
    return arr
}

//module.exports = fn // exporta solo la funcion con ese nombre


/// CONTINUACION Hacer seguidor web:

const callApi = async () => {
    try {
        const resultado = await fetch("http://jsonplaceholder.typicode.com/posts"); // me devuelve una promesa que espero cargar datos
        const data = await resultado.json(); // ttambien una promesa que me da un resolve pero para que me devuelva el json de la api pero los datos
        return data
    } catch (error) {
       return error
        
    }
};
module.exports = {k1 : fn, k2 : utils, callApi} // un key para cada funcion