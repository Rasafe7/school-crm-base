import type { Usuario, Rol } from "../models/interfaces";


export class CRMController {
    // Propiedades
    private usuarioDelCentro: Usuario[] = [];
    private readonly CLAVE_STORAGE = "school-crm-usuarios"; // Constante privada, no se puede cambiar; 

    //Constructor
    constructor(private version: string) {
        const datosLocales = localStorage.getItem(this.CLAVE_STORAGE);
        if (datosLocales) {
            this.usuarioDelCentro = JSON.parse(datosLocales);
        } else {
        this.usuarioDelCentro = [
            {
                id: 1,
                nombre: "Juan Pérez",
                rol: "profesor",
                activo: true,
            },
            {
                id: 2,
                nombre: "María López",
                rol: "alumno",
                activo: true,
            },
            {
                id: 3,
                nombre: "Carlos García",
                rol: "administrador",
                activo: true,
            },
            {
                id: 4,
                nombre: "Ana Torres",
                rol: "profesor",
                activo: false,
            },
            {
                id: 5,
                nombre: "Luis Fernández",
                rol: "alumno",
                activo: false,
            },
            {
                id: 6,
                nombre: "Elena Martínez",
                rol: "administrador",
                activo: false,
            },
        ];
    } 
    }


    // Métodos: Funcione de ayer qeu estaba en counter.ts, ahora en la clase CrmController convertida en un método de la clase.
    filtrarUsuariosPorRol(rolBuscado: Rol): Usuario[] {
        //Usamos this para refenciar la propiedad usuarioDelCentro en esta misma clase.
        return this.usuarioDelCentro.filter(
            (usuario) => usuario.rol === rolBuscado,
        );
    }

    actualizaVersion(nuevaVersion: string): void {
        this.version = nuevaVersion;
    }
    verVersion(): string {
        return this.version;
    }

   public agregarUsuario(nuevoUsuario: Usuario): void {
    if (!this.usuarioDelCentro.some((usuario) => usuario.id === nuevoUsuario.id)) {
        this.usuarioDelCentro.push(nuevoUsuario);

        console.log(
            "Usuario agregado:",
            nuevoUsuario,
            "Resultado:",
            this.usuarioDelCentro
        );

        this.guardarEnDisco();
    } else {
        console.log(
            "Usuario no agregado: el id ya existe.",
            "Resultado:",
            this.usuarioDelCentro
        );
    }
}
    private guardarEnDisco(): void {
        // Guardamos en disco el array de usuarios del centro;
        localStorage.setItem(this.CLAVE_STORAGE, JSON.stringify(this.usuarioDelCentro));
    }
}