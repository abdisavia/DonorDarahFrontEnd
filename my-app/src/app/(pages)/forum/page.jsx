"use client";
import Navbar from "@/_components/navbar";
import React, { useState } from "react";
import "@/_styles/css/forum.css";

export default function Forum() {
  const [Text, setText] = useState("");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);

  const handleButtonClick = (style) => {
    switch (style) {
      case "bold":
        setBold(!bold);
        break;
      case "italic":
        setItalic(!italic);
        break;
      case "underline":
        setUnderline(!underline);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="my-bg">
        <Navbar itemsColor="text-black" />
        <div className="mt-20 pt-20 ">
          <div className="rectangle-36 border-2 border-red rounded-lg w-[40rem] h-[3rem] ps-[4rem]">
            <div className="flex items-top justify-left">
              <textarea
                value={Text}
                onChange={(e) => setText(e.target.value)}
                style={{
                  fontWeight: bold ? "bold" : "normal",
                  fontStyle: italic ? "italic" : "normal",
                  textDecoration: underline ? "underline" : "none",
                  resize:"none",
                  height:"13rem"
                }}
                className="border-transparent rounded-lg w-[35rem] h-[5rem] ps-[2rem] text-[20px] mt-[2rem] ml-[-2rem]"
                type="text"
              />
              <div className="relative">
                <div className="absolute bottom-0 left-[-35rem]">
                  <button
                    onClick={() => handleButtonClick("bold")}
                    className="font-bold text-[19px] mb-4"
                  >
                    B
                  </button>
                  <button
                    onClick={() => handleButtonClick("italic")}
                    className="text-[19px] mb-4 ml-5"
                  >
                    /
                  </button>
                  <button
                    onClick={() => handleButtonClick("underline")}
                    className="underline text-[19px] mb-4 ml-5"
                  >
                    U
                  </button>
                </div>
              </div>
              <div className="button ml-[-7rem] mt-[16rem]">
                <button className="tombol font-bold text-l text-white rounded-lg px-3 py-2 h-10 w-[8rem] bg-red">
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
