import {CRMController} from "./controllers/crm.controller";
import type { Usuario } from "./models/interfaces";
//Instanciamos la clase CRMController
const miEscuelaCRM = new CRMController("1.0.0");

  const nuevoUsuario: Usuario = {
	id: 7,
	nombre: "Laura Sánchez",
	rol: "alumno",
	activo: true,
}; 

miEscuelaCRM.agregarUsuario(nuevoUsuario); 

//Usamos sus métodos.
const profesores = miEscuelaCRM.filtrarUsuariosPorRol("profesor");

console.log("Profesores del centro: ", profesores);

/* console.log(miEscuelaCRM); */

console.log("Versión actual del CRM: ", miEscuelaCRM.verVersion());







