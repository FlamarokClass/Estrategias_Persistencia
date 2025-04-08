const { reject } = require('lodash');
const exrpess = require('express');
const { callApi, k2} = require("./func")

const func = require('./func') // si esta en la misma carpeta sino './nombrecarpeta/archivo'

let array = [1,[2,3]];
console.log(func.k1(array));

// Promesas
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({resultado: 'Ok', cantidad:3})
    }, 3000); // resolve() ejecuto la funcion pasada por parametro
})

// Promesa 2

const np = (ms) => {
    return new Promise((resolve, reject) => {
        if(ms <= 0)
            setTimeout(() => {
        reject(new Error("No se puede"));
    }, 1000);
    else
    setTimeout(() => {
        resolve({resultado : "Ok", Tardo: ms});
    },ms);
    });
};

np(3000)
  .then((data => {
    console.log(data);
  }))
  .catch(() => {
    console.log(err);
  })
  .finally(() => {
    console.log()
  })
console.log('Paso 3');

// ASYNC AWAIT

(async () => { // funcion anonima
const np2 = async (ms) => {
    return new Promise((resolve, reject) => {
        if(miliseg <= 0)
            setTimeout(() => {
        reject(new Error("No se puede"));
    }, 1000);
    else
    setTimeout(() => {
        resolve({resultado : "Ok", Tardo: ms});
    },ms);
    });
};
try {
    const resultado = await np(3000);
    console.log(resultado)
} catch (error) {
    console.log(error);
}

console.log('Paso 3')

})();

// Consulta a API
(async () => {
    const { k2 } = require("./func")
    console.log("Paso 1");
    try {
        const resultado = await fetch("http://jsonplaceholder.typicode.com/posts"); // me devuelve una promesa que espero cargar datos
        const data = await resultado.json(); // ttambien una promesa que me da un resolve pero para que me devuelva el json de la api pero los datos
        console.log(k2(data))
    } catch (error) {
        console.log(error)
        
    }
})();

// SIGUE EN ARCHIVO FUNC + ACÁ

const app = express();
app.get('/poke', async (req , res)=> {
    res.status(200).json(k2(await callApi()) ) // json({message: "Hola Mundo"})
}); // ruta donde esta cuando entren a mi localhost:4003/poke (el puerto)

/*
const app = express();
app.get('/poke:id', async (req , res)=> {
    const idPoke = req.params.id;
    const datos = await callApi();
    res.status(200).json(datos.filter(p=> p.userId == IdPoke)) // json({message: "Hola Mundo"})
}); // ruta donde esta cuando entren a mi localhost:4003/poke:id  lo ultimo varía segun la id de los datos traidos (el puerto)
*/

app.listen(4002, () => {
    console.log("La app esta escuchando")
});