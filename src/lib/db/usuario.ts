import { getSedeAutoescuelas } from "./sede_autoescuela";
interface Usuario {
    usuario_id?: string;
    sede_autoescuela_id: string;
    rol_id: string;
    usuario_dni: string;
    usuario_nombre: string;
    usuario_email: string;
    usuario_telefono?: string;
    usuario_contrasenya: string;
}

interface InputValues {
    email: string;
    password: string;
}

export const createUniqueIdUsuario = (numero: Number = 0): string => {
    const randomId = Math.random().toString(36).slice(2, 11);
    // Obtener una marca de tiempo única
    const timestamp = Date.now().toString(36);
    // Combinar el número aleatorio y la marca de tiempo para crear un ID único
    const uniqueId = "usuario_" + randomId + timestamp + numero;
    // Devolver el ID único generad
    return uniqueId;
};

export const isUsuarioExist = (): string | null => {
    const isExist = localStorage.getItem("usuario");
    if (isExist) return isExist;
    return null;
};

export const initUsuario = (): void => {
    const sedeAutoescuelas = getSedeAutoescuelas();
    if (isUsuarioExist()) return;

    localStorage.setItem(
        "usuario",
        JSON.stringify([
            {
                usuario_id: "superadmin",
                sede_autoescuela_id: "superadmin",
                rol_id: "superadmin",
                usuario_dni: "superadmin",
                usuario_nombre: "superadmin",
                usuario_email: "superadmin@superadmin.com",
                usuario_telefono: "superadmin",
                usuario_contrasenya: "superadmin",
            },
            {
                usuario_id: createUniqueIdUsuario(13),
                sede_autoescuela_id: sedeAutoescuelas[0].sede_autoescuela_id,
                rol_id: "admin",
                usuario_dni: "11111111A",
                usuario_nombre: "Juan Perez Pons",
                usuario_email: "admin1sede0@admin.com",
                usuario_telefono: "600123456",
                usuario_contrasenya: "admin1sede0",
            },
            {
                usuario_id: createUniqueIdUsuario(14),
                sede_autoescuela_id: sedeAutoescuelas[0].sede_autoescuela_id,
                rol_id: "admin",
                usuario_dni: "22222222A",
                usuario_nombre: "María García",
                usuario_email: "admin2sede0@admin.com",
                usuario_telefono: "600234567",
                usuario_contrasenya: "admin2sede0",
            },
            {
                usuario_id: createUniqueIdUsuario(15),
                sede_autoescuela_id: sedeAutoescuelas[0].sede_autoescuela_id,
                rol_id: "profesor",
                usuario_dni: "33333333A",
                usuario_nombre: "Carlos Rodríguez",
                usuario_email: "profesor1sede0@profesor.com",
                usuario_telefono: "600345678",
                usuario_contrasenya: "profesor1sede0",
            },
            {
                usuario_id: createUniqueIdUsuario(16),
                sede_autoescuela_id: sedeAutoescuelas[0].sede_autoescuela_id,
                rol_id: "estudiante",
                usuario_dni: "44444444A",
                usuario_nombre: "Laura Fernández",
                usuario_email: "laura.fernandez@example.com",
                usuario_telefono: "600456789",
                usuario_contrasenya: "44444444A",
            },
            {
                usuario_id: createUniqueIdUsuario(17),
                sede_autoescuela_id: sedeAutoescuelas[0].sede_autoescuela_id,
                rol_id: "estudiante",
                usuario_dni: "55555555E",
                usuario_nombre: "José Martínez",
                usuario_email: "jose.martinez@example.com",
                usuario_telefono: "600567890",
                usuario_contrasenya: "55555555E",
            },
            {
                usuario_id: createUniqueIdUsuario(18),
                sede_autoescuela_id: sedeAutoescuelas[0].sede_autoescuela_id,
                rol_id: "estudiante",
                usuario_dni: "66666666F",
                usuario_nombre: "Ana López",
                usuario_email: "ana.lopez@example.com",
                usuario_telefono: "600678901",
                usuario_contrasenya: "66666666F",
            },
            {
                usuario_id: createUniqueIdUsuario(19),
                sede_autoescuela_id: sedeAutoescuelas[0].sede_autoescuela_id,
                rol_id: "estudiante",
                usuario_dni: "77777777G",
                usuario_nombre: "Luis Sánchez",
                usuario_email: "luis.sanchez@example.com",
                usuario_telefono: "600789012",
                usuario_contrasenya: "77777777G",
            },
            {
                usuario_id: createUniqueIdUsuario(20),
                sede_autoescuela_id: sedeAutoescuelas[0].sede_autoescuela_id,
                rol_id: "estudiante",
                usuario_dni: "88888888H",
                usuario_nombre: "Elena Gómez",
                usuario_email: "elena.gomez@example.com",
                usuario_telefono: "600890123",
                usuario_contrasenya: "88888888H",
            },
            {
                usuario_id: createUniqueIdUsuario(21),
                sede_autoescuela_id: sedeAutoescuelas[0].sede_autoescuela_id,
                rol_id: "estudiante",
                usuario_dni: "99999999I",
                usuario_nombre: "Miguel Díaz",
                usuario_email: "miguel.diaz@example.com",
                usuario_telefono: "600901234",
                usuario_contrasenya: "99999999I",
            },
            {
                usuario_id: createUniqueIdUsuario(22),
                sede_autoescuela_id: sedeAutoescuelas[0].sede_autoescuela_id,
                rol_id: "estudiante",
                usuario_dni: "00000000J",
                usuario_nombre: "Isabel Álvarez",
                usuario_email: "isabel.alvarez@example.com",
                usuario_telefono: "601012345",
                usuario_contrasenya: "00000000J",
            },
            {
                usuario_id: createUniqueIdUsuario(23),
                sede_autoescuela_id: sedeAutoescuelas[0].sede_autoescuela_id,
                rol_id: "estudiante",
                usuario_dni: "12345678A",
                usuario_nombre: "Fernando Ramírez",
                usuario_email: "fernando.ramirez@example.com",
                usuario_telefono: "601123456",
                usuario_contrasenya: "12345678A",
            },
            {
                usuario_id: createUniqueIdUsuario(24),
                sede_autoescuela_id: sedeAutoescuelas[0].sede_autoescuela_id,
                rol_id: "estudiante",
                usuario_dni: "23456789B",
                usuario_nombre: "Marta Torres",
                usuario_email: "marta.torres@example.com",
                usuario_telefono: "601234567",
                usuario_contrasenya: "23456789B",
            },
            {
                usuario_id: createUniqueIdUsuario(25),
                sede_autoescuela_id: sedeAutoescuelas[0].sede_autoescuela_id,
                rol_id: "estudiante",
                usuario_dni: "34567890C",
                usuario_nombre: "Raúl Romero",
                usuario_email: "raul.romero@example.com",
                usuario_telefono: "601345678",
                usuario_contrasenya: "34567890C",
            },
            {
                usuario_id: createUniqueIdUsuario(26),
                sede_autoescuela_id: sedeAutoescuelas[0].sede_autoescuela_id,
                rol_id: "estudiante",
                usuario_dni: "45678901D",
                usuario_nombre: "Rosa Serrano",
                usuario_email: "rosa.serrano@example.com",
                usuario_telefono: "601456789",
                usuario_contrasenya: "45678901D",
            },
            {
                usuario_id: createUniqueIdUsuario(27),
                sede_autoescuela_id: sedeAutoescuelas[0].sede_autoescuela_id,
                rol_id: "estudiante",
                usuario_dni: "56789012E",
                usuario_nombre: "Pedro Navarro",
                usuario_email: "pedro.navarro@example.com",
                usuario_telefono: "601567890",
                usuario_contrasenya: "56789012E",
            },
            {
                usuario_id: createUniqueIdUsuario(28),
                sede_autoescuela_id: sedeAutoescuelas[0].sede_autoescuela_id,
                rol_id: "estudiante",
                usuario_dni: "67890123F",
                usuario_nombre: "Lucía Ramos",
                usuario_email: "lucia.ramos@example.com",
                usuario_telefono: "601678901",
                usuario_contrasenya: "67890123F",
            },
            {
                usuario_id: createUniqueIdUsuario(29),
                sede_autoescuela_id: sedeAutoescuelas[0].sede_autoescuela_id,
                rol_id: "estudiante",
                usuario_dni: "78901234G",
                usuario_nombre: "Javier Gil",
                usuario_email: "javier.gil@example.com",
                usuario_telefono: "601789012",
                usuario_contrasenya: "78901234G",
            },
            {
                usuario_id: createUniqueIdUsuario(30),
                sede_autoescuela_id: sedeAutoescuelas[0].sede_autoescuela_id,
                rol_id: "estudiante",
                usuario_dni: "89012345H",
                usuario_nombre: "Patricia Ortega",
                usuario_email: "patricia.ortega@example.com",
                usuario_telefono: "601890123",
                usuario_contrasenya: "89012345H",
            },
            {
                usuario_id: createUniqueIdUsuario(31),
                sede_autoescuela_id: sedeAutoescuelas[0].sede_autoescuela_id,
                rol_id: "estudiante",
                usuario_dni: "90123456I",
                usuario_nombre: "Alberto Medina",
                usuario_email: "alberto.medina@example.com",
                usuario_telefono: "601901234",
                usuario_contrasenya: "90123456I",
            },
            {
                usuario_id: createUniqueIdUsuario(32),
                sede_autoescuela_id: sedeAutoescuelas[0].sede_autoescuela_id,
                rol_id: "estudiante",
                usuario_dni: "01234567J",
                usuario_nombre: "Carmen Ruiz",
                usuario_email: "carmen.ruiz@example.com",
                usuario_telefono: "602012345",
                usuario_contrasenya: "01234567J",
            },
            {
                usuario_id: createUniqueIdUsuario(33),
                sede_autoescuela_id: sedeAutoescuelas[0].sede_autoescuela_id,
                rol_id: "admin",
                usuario_dni: "74859648E",
                usuario_nombre: "Enrique",
                usuario_email: "enrique@admin.com",
                usuario_telefono: "600234555",
                usuario_contrasenya: "enrique",
            },
            {
                usuario_id: createUniqueIdUsuario(34),
                sede_autoescuela_id: sedeAutoescuelas[0].sede_autoescuela_id,
                rol_id: "admin",
                usuario_dni: "15693854J",
                usuario_nombre: "Joan Melsion",
                usuario_email: "joanMelsion@admin.com",
                usuario_telefono: "600234333",
                usuario_contrasenya: "joanMelsion",
            },
        ])
    );
};

export const createUsuario = ({
    sede_autoescuela_id,
    rol_id,
    usuario_dni,
    usuario_nombre,
    usuario_email,
    usuario_telefono,
    usuario_contrasenya,
}: Usuario) => {
    const storedUsuario = isUsuarioExist();
    if (storedUsuario) {
        const usuarios: Usuario[] = JSON.parse(storedUsuario);
        const newUsuario = [
            ...usuarios,
            {
                usuario_id: createUniqueIdUsuario(),
                sede_autoescuela_id,
                rol_id,
                usuario_dni,
                usuario_nombre,
                usuario_email,
                usuario_telefono,
                usuario_contrasenya,
            },
        ];
        localStorage.setItem("usuario", JSON.stringify(newUsuario));
        console.log("Usuario guardado en la base de datos");
        return;
    }
    console.log("No se pudo crear el usuario");
};

export const editUsuario = ({
    usuario_id,
    sede_autoescuela_id,
    rol_id,
    usuario_dni,
    usuario_nombre,
    usuario_email,
    usuario_telefono,
    usuario_contrasenya,
}: Usuario) => {
    const storedUsuario = isUsuarioExist();
    if(!storedUsuario) return;
    const usuarios: Usuario[] = JSON.parse(storedUsuario);
    const usuariosWithoutEditUser = usuarios.filter((u) => u.usuario_id !== usuario_id);
    const usuariosWithEditUser = [...usuariosWithoutEditUser, {
        usuario_id,
        sede_autoescuela_id,
        rol_id,
        usuario_dni,
        usuario_nombre,
        usuario_email,
        usuario_telefono,
        usuario_contrasenya,
    }]
    localStorage.setItem("usuario", JSON.stringify(usuariosWithEditUser));
    console.log("Usuario actualizado con exito");
}


export const deleteUsuarioById = (usuarioId: string) => {
    const storedUsuario = isUsuarioExist();
    if (storedUsuario) {
        const usuarios = JSON.parse(storedUsuario);
        const nuevosUsuarios = usuarios.filter(
            (u: Usuario) => u.usuario_id !== usuarioId
        );
        localStorage.setItem("usuario", JSON.stringify(nuevosUsuarios));
    }
};


// Obtiene todos los usuarios de todas las autoescuelas
export const getUsuarios = () => {
    const storedUsuario = isUsuarioExist();
    if (storedUsuario) {
        return JSON.parse(storedUsuario);
    }
    console.log("No se pudo obtener los usuarios");
};

export const getUsuariobyId = (usuarioId: string) => {
    const storedUsuario = isUsuarioExist();
    if(storedUsuario){
        const usuarios = JSON.parse(storedUsuario);
        const usuario = usuarios.find((u: Usuario) => u.usuario_id === usuarioId);
        return usuario;
    }
}

// Obtiene los usuarios de una sede_autoescuela_id
export const getUsuariosBySedeAutoescuelaId = (sedeAutoescuelaId: string) => {
    const storedUsuario = isUsuarioExist();
    if (storedUsuario) {
        const usuarios = JSON.parse(storedUsuario);
        const usuariosBySedeAutoescuelaId = usuarios.filter(
            (usuario: Usuario) =>
                usuario.sede_autoescuela_id === sedeAutoescuelaId
        );
        return usuariosBySedeAutoescuelaId;
    }
    console.log("No se pudo obtener los usuario de la sede");
};

// Login -> si existe la base de datos pero el usuario no existe retorna undefined
export const getUsuariobyEmailAndPassword = (inputValues: InputValues) => {
    const storedUsuario = isUsuarioExist();
    if (storedUsuario) {
        const usuarios = JSON.parse(storedUsuario);
        const usuario = usuarios.find(
            (u: Usuario) =>
                u.usuario_email === inputValues.email &&
                u.usuario_contrasenya === inputValues.password
        );
        if (usuario !== undefined) {
            console.log("El usuario existe");
            return usuario;
        }
    }
    console.log("El usuario no existe");
    return undefined;
};
