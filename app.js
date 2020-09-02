// const argv = require("yargs").argv;
const argv = require("./config/yargs").argv;
const colors = require("colors");
const porHacer = require("./por-hacer/por-hacer");

let comando = argv._[0];

switch (comando) {
    case "crear":
        let Tarea = porHacer.crear(argv.descripcion);
        console.log(Tarea);
        break;
    case "listar":
        let Listado = porHacer.getListado();
        for (let tarea of Listado) {
            console.log("====================================".green);
            console.log("Descripción: ".green, colors.green(tarea.descripcion));
            console.log("Estado:      ".green, colors.green(tarea.completado));
            console.log("====================================".green);
        }
        break;
    case "actualizar":
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case "borrar":
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("Comando no reconocido.");
        break;
}