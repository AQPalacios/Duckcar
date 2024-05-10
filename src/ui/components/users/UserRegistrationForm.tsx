import { FC } from "react";

export const UserRegistrationForm: FC = () => {
    return (
        <form>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 xl:col-span-6 flex flex-col gap-2 bg-primary-light p-5 rounded">
                    <div className="flex flex-col gap-1">
                        <span className="text-lg">DNI - NIE</span>
                        <input
                            type="text"
                            className="bg-primary text-white outline-none p-2 rounded focus:bg-input-color hover:bg-input-color"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <span>Nombre</span>
                        <input
                            type="text"
                            className="bg-primary text-white outline-none p-2 rounded focus:bg-input-color hover:bg-input-color"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <span>Apellidos</span>
                        <input
                            type="text"
                            className="bg-primary text-white outline-none p-2 rounded focus:bg-input-color hover:bg-input-color"
                        />
                    </div>
                </div>

                <div className="col-span-12 xl:col-span-6 flex flex-col gap-2 bg-primary-light p-5 rounded">
                    <div className="flex flex-col gap-1">
                        <span>Teléfono</span>
                        <input
                            type="text"
                            className="bg-primary text-white outline-none p-2 rounded focus:bg-input-color hover:bg-input-color"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <span>Email</span>
                        <input
                            type="email"
                            className="bg-primary text-white outline-none p-2 rounded focus:bg-input-color hover:bg-input-color"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};
