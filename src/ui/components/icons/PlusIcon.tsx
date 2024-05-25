import { FC } from "react";
interface PlusIconProps{
    width?: string,
    height?: string
}
export const PlusIcon: FC<PlusIconProps> = ({width = "25", height = "25"}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Bold"
            viewBox="0 0 24 24"
            width={width}
            height={height}
        >
            <path
                fill="white"
                d="M16.5,10.5h-3v-3a1.5,1.5,0,0,0-3,0v3h-3a1.5,1.5,0,0,0,0,3h3v3a1.5,1.5,0,0,0,3,0v-3h3a1.5,1.5,0,0,0,0-3Z"
            />
        </svg>
    );
};
