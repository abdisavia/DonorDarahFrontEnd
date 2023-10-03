import {useReducer,createContext,useContext} from "react";
import Dropdown from "@/_components/dropdown";
import Card from "@/_components/card";

const roleContext = createContext(null);
const roleDispatchContext = createContext(null);


export function useDispatch(){
  return useContext(roleDispatchContext);
}


export default function TutorialSingkatSection() {
    const [category, dispatch] = useReducer(
        categoryReducer,
        {kategori:"Pendonor"}
      );
    
      function categoryReducer(category,action){
        if (action.type == "Pendonor"){
          return {kategori: "Pendonor"};
        }else{
          return {kategori: "Akseptor"};
        }
      }
      return(
        <section className="w-full h-screen flex items-center">
            <div className="container mx-auto my-auto">
              <roleContext.Provider value={category}>
                <roleDispatchContext.Provider value={dispatch}>
                  <div className="flex items-center mb-14">
                    <h1 className="pe-2 text-xl">Cara menjadi</h1>
                    <Dropdown selection={["Pendonor", "Akseptor"]}/> 
                  </div>
                  {
                    category.kategori == "Pendonor" ?
                    <div className="flex flex-row justify-center gap-8 items-center">
                      <Card path="/img/Asset 18.png" alt="Registrasi"/>
                      <Card path="/img/email.png" alt="Tunggu"/>
                      <Card path="/img/Frame3.png" alt="Terima Broadcast"/> 
                    </div> : 
                    <div className="flex flex-row justify-center gap-8 items-center">
                    <Card path="/img/Asset 18.png" alt="Registrasi 1"/>
                    <Card path="/img/email.png" alt="Tunggu 1"/>
                    <Card path="/img/Frame3.png" alt="Terima Broadcast 1"/> 
                  </div>
                  }
                </roleDispatchContext.Provider>
              </roleContext.Provider>
            </div>
          </section>
      )
}
