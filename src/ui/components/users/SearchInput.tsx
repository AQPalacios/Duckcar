import { FC } from "react";
import { SearchIcon } from "../icons";

export const SearchInput: FC = () => {
    return (
        <div className="relative w-full xl:w-1/2">
            <input
                type="text"
                className=" bg-primary-light p-2 rounded-lg w-full outline-none hover:bg-input-color focus:bg-input-color"
            />
            <SearchIcon className="absolute top-1 right-1 bg-input-color p-1.5 rounded hover:bg-primary" />
        </div>
    );
};
