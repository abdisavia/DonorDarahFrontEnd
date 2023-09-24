import useState from "react";
export default function Dropdown(props){
    const[selection, setSelection] = useState(props.selection[0])
    const[isActive,setIsActive] = useState(false);
    return(
        <>
        <div className="dropdown">
            <button className="dropdown-btn" onclick={e => {
                setIsActive(!isActive);
                setSelection(selection);
            }}>
                {selection}
            
            </button>

        </div>
        </>
    )
}