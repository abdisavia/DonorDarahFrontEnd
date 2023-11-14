import Dropdown from "@/_components/Dropdown/dropdown";
import { idProv } from "@/_components/Dropdown/dropdown_provinsi";
import { idKab } from "@/_components/Dropdown/dropdown_kabupaten";
import { idKec } from "@/_components/Dropdown/dropdown_kecamatan";
import { idKelu } from "@/_components/Dropdown/dropdown_kelurahan";
import { golongan_darah } from "@/_components/Dropdown/golongan_darah";

export default function Alamat({data}){
    const onActionOnchange = (newValue) => {
        
    }
    return(
        <div className="px-5 pt-10 font-Subtitle">
            <div className="py-3">
                <input type="text" name="Alamat" placeholder="Alamat" className="border border-black w-[409px] h-[50px] rounded-md px-2 text-xl font-Subtitle"/>
            </div>
            <div className="border-2 inline-block font-Subtitle text-[20px]">
                <Dropdown category="provinsi" action/>
                <Dropdown category="kabupaten"/>
                <div className="grid grid-cols-2 gap-2">
                    <Dropdown category="kelurahan"/>
                    <Dropdown category="kecamatan"/>
                </div>
            </div>
        </div>
    )
}