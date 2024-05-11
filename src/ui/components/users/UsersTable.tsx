import Image from "next/image";
import { FC } from "react";
import { Button } from "../common";
import { DeleteIcon, EditIcon } from "../icons";

export const UsersTable: FC = () => {
    return (
        <div className="scroll relative grid bg-primary-light rounded overflow-auto ">
            <div className="sticky top-0 grid grid-cols-12 space-x-4 bg-primary-light h-[50px]">
                {/* <div className="col-span-1">ID</div> */}
                <div className="col-span-2 text-lg flex items-center justify-center">
                    DNI
                </div>
                <div className="col-span-2 text-lg flex items-center justify-center">
                    Teléfono
                </div>
                <div className="col-span-3 text-lg flex items-center justify-center">
                    Usuario
                </div>
                <div className="col-span-2 text-lg flex items-center justify-center">
                    Rol
                </div>
                <div className="col-span-3 text-lg flex items-center justify-center"></div>
            </div>

            <div className="rounded text-sm">
                <div className=" hover:bg-input-color grid grid-cols-12 space-x-4 p-1.5">
                    {/* <div className="col-span-1">1</div> */}
                    <div className="col-span-2 flex items-center justify-center">
                        41640014D
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                        631956919
                    </div>
                    <div className="col-span-3 flex items-center justify-center">
                        <div className="flex gap-2 text-start rounded">
                            <Image
                                src={"/logo-sin-fondo-sin-titulo.webp"}
                                alt="Imagen de usuario"
                                width={50}
                                height={50}
                            />
                            <div className="flex flex-col ">
                                <span>Alvaro Alonso Quispe Palacios</span>
                                <span className="text-sm">
                                    alonsol1569@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                        Profesor
                    </div>
                    <div className=" col-span-3 flex items-center justify-end gap-2">
                        <Button className="hover:bg-primary">
                            <DeleteIcon />
                        </Button>
                        <Button className="hover:bg-primary">
                            <EditIcon />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="rounded text-sm">
                <div className=" hover:bg-input-color grid grid-cols-12 space-x-4 p-1.5">
                    {/* <div className="col-span-1">1</div> */}
                    <div className="col-span-2 flex items-center justify-center">
                        41640014D
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                        631956919
                    </div>
                    <div className="col-span-3 flex items-center justify-center">
                        <div className="flex gap-2 text-start rounded">
                            <Image
                                src={"/logo-sin-fondo-sin-titulo.webp"}
                                alt="Imagen de usuario"
                                width={50}
                                height={50}
                            />
                            <div className="flex flex-col ">
                                <span>Alvaro Alonso Quispe Palacios</span>
                                <span className="text-sm">
                                    alonsol1569@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-5 flex items-center justify-end gap-2">
                        <Button className="hover:bg-primary">
                            <DeleteIcon />
                        </Button>
                        <Button className="hover:bg-primary">
                            <EditIcon />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="rounded text-sm">
                <div className=" hover:bg-input-color grid grid-cols-12 space-x-4 p-1.5">
                    {/* <div className="col-span-1">1</div> */}
                    <div className="col-span-2 flex items-center justify-center">
                        41640014D
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                        631956919
                    </div>
                    <div className="col-span-3 flex items-center justify-center">
                        <div className="flex gap-2 text-start rounded">
                            <Image
                                src={"/logo-sin-fondo-sin-titulo.webp"}
                                alt="Imagen de usuario"
                                width={50}
                                height={50}
                            />
                            <div className="flex flex-col ">
                                <span>Alvaro Alonso Quispe Palacios</span>
                                <span className="text-sm">
                                    alonsol1569@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-5 flex items-center justify-end gap-2">
                        <Button className="hover:bg-primary">
                            <DeleteIcon />
                        </Button>
                        <Button className="hover:bg-primary">
                            <EditIcon />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="rounded text-sm">
                <div className=" hover:bg-input-color grid grid-cols-12 space-x-4 p-1.5">
                    {/* <div className="col-span-1">1</div> */}
                    <div className="col-span-2 flex items-center justify-center">
                        41640014D
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                        631956919
                    </div>
                    <div className="col-span-3 flex items-center justify-center">
                        <div className="flex gap-2 text-start rounded">
                            <Image
                                src={"/logo-sin-fondo-sin-titulo.webp"}
                                alt="Imagen de usuario"
                                width={50}
                                height={50}
                            />
                            <div className="flex flex-col ">
                                <span>Alvaro Alonso Quispe Palacios</span>
                                <span className="text-sm">
                                    alonsol1569@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-5 flex items-center justify-end gap-2">
                        <Button className="hover:bg-primary">
                            <DeleteIcon />
                        </Button>
                        <Button className="hover:bg-primary">
                            <EditIcon />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="rounded text-sm">
                <div className=" hover:bg-input-color grid grid-cols-12 space-x-4 p-1.5">
                    {/* <div className="col-span-1">1</div> */}
                    <div className="col-span-2 flex items-center justify-center">
                        41640014D
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                        631956919
                    </div>
                    <div className="col-span-3 flex items-center justify-center">
                        <div className="flex gap-2 text-start rounded">
                            <Image
                                src={"/logo-sin-fondo-sin-titulo.webp"}
                                alt="Imagen de usuario"
                                width={50}
                                height={50}
                            />
                            <div className="flex flex-col ">
                                <span>Alvaro Alonso Quispe Palacios</span>
                                <span className="text-sm">
                                    alonsol1569@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-5 flex items-center justify-end gap-2">
                        <Button className="hover:bg-primary">
                            <DeleteIcon />
                        </Button>
                        <Button className="hover:bg-primary">
                            <EditIcon />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="rounded text-sm">
                <div className=" hover:bg-input-color grid grid-cols-12 space-x-4 p-1.5">
                    {/* <div className="col-span-1">1</div> */}
                    <div className="col-span-2 flex items-center justify-center">
                        41640014D
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                        631956919
                    </div>
                    <div className="col-span-3 flex items-center justify-center">
                        <div className="flex gap-2 text-start rounded">
                            <Image
                                src={"/logo-sin-fondo-sin-titulo.webp"}
                                alt="Imagen de usuario"
                                width={50}
                                height={50}
                            />
                            <div className="flex flex-col ">
                                <span>Alvaro Alonso Quispe Palacios</span>
                                <span className="text-sm">
                                    alonsol1569@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-5 flex items-center justify-end gap-2">
                        <Button className="hover:bg-primary">
                            <DeleteIcon />
                        </Button>
                        <Button className="hover:bg-primary">
                            <EditIcon />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="rounded text-sm">
                <div className=" hover:bg-input-color grid grid-cols-12 space-x-4 p-1.5">
                    {/* <div className="col-span-1">1</div> */}
                    <div className="col-span-2 flex items-center justify-center">
                        41640014D
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                        631956919
                    </div>
                    <div className="col-span-3 flex items-center justify-center">
                        <div className="flex gap-2 text-start rounded">
                            <Image
                                src={"/logo-sin-fondo-sin-titulo.webp"}
                                alt="Imagen de usuario"
                                width={50}
                                height={50}
                            />
                            <div className="flex flex-col ">
                                <span>Alvaro Alonso Quispe Palacios</span>
                                <span className="text-sm">
                                    alonsol1569@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-5 flex items-center justify-end gap-2">
                        <Button className="hover:bg-primary">
                            <DeleteIcon />
                        </Button>
                        <Button className="hover:bg-primary">
                            <EditIcon />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="rounded text-sm">
                <div className=" hover:bg-input-color grid grid-cols-12 space-x-4 p-1.5">
                    {/* <div className="col-span-1">1</div> */}
                    <div className="col-span-2 flex items-center justify-center">
                        41640014D
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                        631956919
                    </div>
                    <div className="col-span-3 flex items-center justify-center">
                        <div className="flex gap-2 text-start rounded">
                            <Image
                                src={"/logo-sin-fondo-sin-titulo.webp"}
                                alt="Imagen de usuario"
                                width={50}
                                height={50}
                            />
                            <div className="flex flex-col ">
                                <span>Alvaro Alonso Quispe Palacios</span>
                                <span className="text-sm">
                                    alonsol1569@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-5 flex items-center justify-end gap-2">
                        <Button className="hover:bg-primary">
                            <DeleteIcon />
                        </Button>
                        <Button className="hover:bg-primary">
                            <EditIcon />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="rounded text-sm">
                <div className=" hover:bg-input-color grid grid-cols-12 space-x-4 p-1.5">
                    {/* <div className="col-span-1">1</div> */}
                    <div className="col-span-2 flex items-center justify-center">
                        41640014D
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                        631956919
                    </div>
                    <div className="col-span-3 flex items-center justify-center">
                        <div className="flex gap-2 text-start rounded">
                            <Image
                                src={"/logo-sin-fondo-sin-titulo.webp"}
                                alt="Imagen de usuario"
                                width={50}
                                height={50}
                            />
                            <div className="flex flex-col ">
                                <span>Alvaro Alonso Quispe Palacios</span>
                                <span className="text-sm">
                                    alonsol1569@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-5 flex items-center justify-end gap-2">
                        <Button className="hover:bg-primary">
                            <DeleteIcon />
                        </Button>
                        <Button className="hover:bg-primary">
                            <EditIcon />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="rounded text-sm">
                <div className=" hover:bg-input-color grid grid-cols-12 space-x-4 p-1.5">
                    {/* <div className="col-span-1">1</div> */}
                    <div className="col-span-2 flex items-center justify-center">
                        41640014D
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                        631956919
                    </div>
                    <div className="col-span-3 flex items-center justify-center">
                        <div className="flex gap-2 text-start rounded">
                            <Image
                                src={"/logo-sin-fondo-sin-titulo.webp"}
                                alt="Imagen de usuario"
                                width={50}
                                height={50}
                            />
                            <div className="flex flex-col ">
                                <span>Alvaro Alonso Quispe Palacios</span>
                                <span className="text-sm">
                                    alonsol1569@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-5 flex items-center justify-end gap-2">
                        <Button className="hover:bg-primary">
                            <DeleteIcon />
                        </Button>
                        <Button className="hover:bg-primary">
                            <EditIcon />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="rounded text-sm">
                <div className=" hover:bg-input-color grid grid-cols-12 space-x-4 p-1.5">
                    {/* <div className="col-span-1">1</div> */}
                    <div className="col-span-2 flex items-center justify-center">
                        41640014D
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                        631956919
                    </div>
                    <div className="col-span-3 flex items-center justify-center">
                        <div className="flex gap-2 text-start rounded">
                            <Image
                                src={"/logo-sin-fondo-sin-titulo.webp"}
                                alt="Imagen de usuario"
                                width={50}
                                height={50}
                            />
                            <div className="flex flex-col ">
                                <span>Alvaro Alonso Quispe Palacios</span>
                                <span className="text-sm">
                                    alonsol1569@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-5 flex items-center justify-end gap-2">
                        <Button className="hover:bg-primary">
                            <DeleteIcon />
                        </Button>
                        <Button className="hover:bg-primary">
                            <EditIcon />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="rounded text-sm">
                <div className=" hover:bg-input-color grid grid-cols-12 space-x-4 p-1.5">
                    {/* <div className="col-span-1">1</div> */}
                    <div className="col-span-2 flex items-center justify-center">
                        41640014D
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                        631956919
                    </div>
                    <div className="col-span-3 flex items-center justify-center">
                        <div className="flex gap-2 text-start rounded">
                            <Image
                                src={"/logo-sin-fondo-sin-titulo.webp"}
                                alt="Imagen de usuario"
                                width={50}
                                height={50}
                            />
                            <div className="flex flex-col ">
                                <span>Alvaro Alonso Quispe Palacios</span>
                                <span className="text-sm">
                                    alonsol1569@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-5 flex items-center justify-end gap-2">
                        <Button className="hover:bg-primary">
                            <DeleteIcon />
                        </Button>
                        <Button className="hover:bg-primary">
                            <EditIcon />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
