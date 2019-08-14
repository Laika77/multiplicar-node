const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');
const argv = require('./config/yargs').argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
            .catch(err => console.log(err))
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');


}
// let base = "a";

// console.log(process);
// let argv2 = process.argv;
// let varible = argv[2];
// let base = varible.split('=')[1];
// console.log(varible);
// console.log(base);
//TODO: hacer algo
console.log(argv);
console.log('Limite', argv.limite);
// console.log(argv2);