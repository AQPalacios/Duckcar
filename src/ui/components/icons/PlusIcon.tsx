import { FC } from "react";

export const PlusIcon: FC = () => {
    return (
        <div className="rounded-full bg-primary hover:bg-secondary">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Bold"
                viewBox="0 0 24 24"
                width="40"
                height="40"
            >
                <path
                    fill="black"
                    d="M16.5,10.5h-3v-3a1.5,1.5,0,0,0-3,0v3h-3a1.5,1.5,0,0,0,0,3h3v3a1.5,1.5,0,0,0,3,0v-3h3a1.5,1.5,0,0,0,0-3Z"
                />
            </svg>
        </div>
    );
};
