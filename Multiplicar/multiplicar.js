const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject('Debe introducir numeros!!');
            return;
        }
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${i * base}`.green);
        }
    })
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject('Debe introducir numeros!!');
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${i * base}\n`;
        }

        fs.writeFile(`Tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}