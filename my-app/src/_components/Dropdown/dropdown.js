"use client";
import TutorialSingkatDropdown from "./dropdown_tutorialSingkat";
import DropDownProvinsi from "./dropdown_provinsi";
import DropDownKabupaten from "./dropdown_kabupaten";
import DropDownKelurahan from "./dropdown_kelurahan";
import DropDownKecamatan from "./dropdown_kecamatan";
import DropDownGolonganDarah from "./golongan_darah";

function Dropdowns({category}) {
    if(category == "tutorialSingkat"){
        return <TutorialSingkatDropdown selection={selection}/>
    }else if(category == "provinsi"){
       return <DropDownProvinsi/>
    }else if(category == "kabupaten"){
        console.log("Kabupaten Added")
       return <DropDownKabupaten/>
    }else if(category == "kelurahan"){
       return <DropDownKelurahan/>
    }else if(category == "kecamatan"){
       return <DropDownKecamatan/>
    }else if(category == "golongan_darah"){
       return <DropDownGolonganDarah />
    }else{
        return "none"
    }
}

export default function Dropdown({category, selection}){
    

    return(
        <Dropdowns category={category}/>
    )
}