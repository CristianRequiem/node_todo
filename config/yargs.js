const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Eliminar un elemento por hacer', { descripcion })
    .command('listar', 'Obtener listado de tareas con o sin filtro', {
        filtrar: {
            demand: false,
            alias: 'f',
            desc: 'Filtro opcional para obtener las tareas',
            default: false
        }
    })
    .help()
    .argv;

module.exports = { argv };