import { uuidv4 } from "@firebase/util";
import { signOut } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/firebaseContext";
import Navbar from "./Navbar";
import EditNote from "./EditNote";
import Notes from "./Notes";

export default function Home({changeTheme}) {

    const {firebaseAuth, setUser} = useContext(AuthContext);
    const [notes, setNotes] = useState([]);
    const [editMode, setEditMode] = useState(false)

    function firebaseSignOut(){
        setUser(null);
        return signOut(firebaseAuth);
    }

    function getID(){
        return uuidv4();
    }

    return(
        <div className="h-screen">
            { editMode ? 
            <EditNote/> :
            <>
                <Navbar/>
                <Notes/>
            </>
             }
        </div>
    );
}