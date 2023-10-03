"use client";
import React,{useState} from "react";
import Image from "next/image";
import {useDispatch} from "../page";

export default function Dropdown(props){
    const dispatch=useDispatch();
    const[selection, setSelection] = useState(props.selection[0]);
    const[isActive,setIsActive] = useState(false);
    return(
        <>
            <div className="font-Subtitle relative">
                <button className="text-2xl w-40 font-bold text-left px-2 rounded-r-full bg-red text-white flex justify-between items-center" onClick={e => {
                    setIsActive(!isActive);
                    setSelection(selection);
                }}>
                    {selection}
                    <Image src="/img/iconArrowDown.png" width={15} height={15}/>
                </button>
            {isActive && <div className="w-40 border-2 mt-1 rounded-xl absolute bg-white">
                {
                props.selection.map(selection => <button className="block w-full h-full text-left px-2 py-2" onClick={e => {{dispatch({type:selection}); setIsActive(false); setSelection(selection)}}}>{selection}</button>)
                }
            </div>}
            </div>
        

        </>
    )
}