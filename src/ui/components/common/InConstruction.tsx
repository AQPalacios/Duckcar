import Image from "next/image";

export default function InContruction() {
    return (
        <>
            <div className="flex justify-center items-center gap-3 h-[250px] w-fit bg-[#fce8ad] rounded-lg overflow-hidden min-w-[400px] relative">
                <div className="absolute text-5xl p-2 text-primary font-bold rotate-[-25deg]">
                    {"En construcción"}
                </div>
                <div>
                    <Image
                        src={"/en-construccion.jpg"}
                        width={250}
                        height={250}
                        alt="En construcción"
                    />
                </div>
            </div>
        </>
    );
}
