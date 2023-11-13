import { useState } from "react";

export default function Pekerjaan(){
    const [selectedOption, setSelectedOption] = useState("");

    const handleDropdownChange = (e) => {
        setSelectedOption(e.target.value);
      };

    function Lain_Lain(){
        if(selectedOption == "lain-lain"){
            return(
                <>
                    <input type="text" name="Lain-lain" placeholder="Masukkan Nama pekerjaan"/>
                </>
            )
        }
    }
    return(
        <>
        <select className="h-14 w-[400px] border-2 border-stone-950 rounded-md block mb-3 text-[20px] ps-[4rem]"
        value={selectedOption}
        onChange={handleDropdownChange}
        >
        <option value="">Pekerjaan</option>
        <option value="TNI/POLRI">TNI/POLRI</option>
        <option value="PegawaiNegeri">Pegawai Negeri</option>
        <option value="Pelajar/Mahasiswa">Pelajar/Mahasiswa</option>
        <option value="Wiraswasta/Pedagang">Wiraswasta/Pedagang</option>
        <option value="Petani">Petani</option>
        <option value="KaryawanSwasta">Karyawan Swasta</option>
        <option value="lain-lain">Lain-Lain</option>
        {<Lain_Lain/>}
      </select>
      </>
    )
}