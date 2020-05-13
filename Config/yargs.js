const argv = require('yargs')
    .command('crear', 'Se creara una tarea por hacer en nuestro fichero', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea'
        }
    })
    .command('actualizar', 'Se actualiza el estado de una tarea del fichero a completada', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completada la tarea'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}