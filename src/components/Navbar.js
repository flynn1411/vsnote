import { useContext, useState } from "react";
import { AuthContext } from "../contexts/firebaseContext";


export default function Navbar(){

    const {user} = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    //console.log(user)

    function handleOpen(){
        setOpen(!open);
    }

    return (
        <nav
            className="
                w-full
                h-[12vh]
                bg-mint
                flex
                justify-between
                items-center
                px-6
            "
        >
            <div className="h-full w-[40vw] flex justify-between items-center">
                <img src="resources/vsnote.png" className="w-[15vw]"/>

                <p className="font-bold text-2xl font-ubuntu italic text-lightText">
                    VSNotes
                </p>
            </div>
            <div className="w-[50%]">
                <div className="grid place-content-end">
                    <img src={`${user.photoURL}`} className="w-[10vw] rounded-xl float-right" onClick={()=>handleOpen()}/>
                    {open ?
                        <ul className="z-10">
                            <li className="block float-right">
                                {user.displayName}
                            </li>
                            <li className="block float-right">
                                Cerrar Sesión
                            </li>
                        </ul>
                        : <></>}
                </div>
            </div>
        </nav>
    );
}