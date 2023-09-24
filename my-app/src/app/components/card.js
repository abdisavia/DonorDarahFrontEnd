import Image from "next/image";

export default function Card(props){
    return(
        <>
        <div className="w-[20rem] h-[25rem] px-[2rem] py-[2rem] rounded-xl bg-red flex justify-center items-center">
            <div className="grid grid-rows-3 h-[20rem] w-[20rem]">
                <div className=" row-span-2 flex items-center">
                    <Image src={props.path} alt={props.alt} width={600} height={15} />
                </div>
                <div className="relative">
                    <h1 className="w-full text-center flex justify-center items-center absolute bottom-0 font-Title rounded-xl bg-white h-[70px] my-auto text-2xl">{props.alt}</h1>
                </div>
            </div>
        </div>
        </>
    )
}