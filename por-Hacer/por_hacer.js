const fs = require('fs');
const color = require('colors');

let ListadoPorHacer = [];

const Crear = (descripcion) => {
    loadDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    ListadoPorHacer.push(porHacer);
    saveDB();

    return porHacer;

};

const getListado = () => {
    loadDB();
    return ListadoPorHacer;
};

const saveDB = () => {
    let data = JSON.stringify(ListadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo Grabar');
        console.log(`Registro realizado con exito`);
    });
};

const loadDB = () => {
    try {
        ListadoPorHacer = require('../db/data.json');
    } catch (error) {
        ListadoPorHacer = [];
    }
};

module.exports = {
    Crear,
    getListado
}