interface Rol{
    rol_id: string,
    rol_nombre: string,
    rol_permisos: Object
}

const createUniqueIdRol = (numero: Number = 0): string => {
    const randomId = Math.random().toString(36).slice(2, 11);
    // Obtener una marca de tiempo única
    const timestamp = Date.now().toString(36);
    // Combinar el número aleatorio y la marca de tiempo para crear un ID único
    const uniqueId = "rol_" + randomId + timestamp + numero;
    // Devolver el ID único generad
    return uniqueId;
};

const isRolExist = (): string | null => {
    const isExist = localStorage.getItem("rol");
    if (isExist) return isExist;
    return null;
};

export const initRol = (): void => {
    if (isRolExist()) return;

    localStorage.setItem(
        "rol",
        JSON.stringify([
            {
                rol_id: createUniqueIdRol(9),
                rol_nombre: "superadmin",
                rol_permisos: {},
            },
            {
                rol_id: createUniqueIdRol(10),
                rol_nombre: "admin",
                rol_permisos: {},
            },
            {
                rol_id: createUniqueIdRol(11),
                rol_nombre: "profesor",
                rol_permisos: {},
            },
            {
                rol_id: createUniqueIdRol(12),
                rol_nombre: "estudiante",
                rol_permisos: {},
            },
        ])
    );
};

export const createRol = (rolNombre: string, rolPermisos: Object) => {
    const storedRol = isRolExist();
    if (storedRol) {
        const rol: Rol[] = JSON.parse(storedRol);
        const newRol = [
            ...rol,
            {
                rol_id: createUniqueIdRol(),
                rol_nombre: rolNombre,
                rol_permisos: rolPermisos,
            },
        ];
        localStorage.setItem("rol", JSON.stringify(newRol));
        return;
    }

    console.log(
        "El rol no se puedo crear porque no existe la base de datos de Rol"
    );
};

export const getRoles = () => {
    const storedRol = isRolExist();
    if(storedRol){
        return JSON.parse(storedRol);
    }
    console.log("Error al obtener los roles");
}