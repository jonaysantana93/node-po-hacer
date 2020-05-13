//const argv = require('yargs').argv;

const argv = require('./Config/yargs').argv;
const porHacer = require('./por-Hacer/por_hacer');


let comando = argv._[0];


switch (comando) {
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('******* POR HACER *******'.green);
            console.log('Descripcion: ', tarea.descripcion);
            console.log('Estado:      ', tarea.completado);
            console.log('***************************\n'.green);
        }

        break;
    case 'crear':
        let tarea = porHacer.Crear(argv.descripcion);
        console.log(tarea)
        break;
    case 'actualizar':
        console.log('Actualiza una tarea por hacer');
        break;
    default:
        console.log('Comando no reconocido')
}