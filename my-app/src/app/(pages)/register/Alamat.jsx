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
        <>
            <label htmlFor="Alamat">Alamat</label>
            <input type="text" name="Alamat"/>
            <div className="grid grid-cols-2 container mx-auto">
                <Dropdown category="provinsi" action/>
                <Dropdown category="kabupaten"/>
                <Dropdown category="kelurahan"/>
                <Dropdown category="kecamatan"/>
            </div>
        </>
    )
}