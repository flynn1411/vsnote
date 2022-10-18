import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../contexts/firebaseContext";

export default function SignIn(){

    const {googleProvider, firebaseAuth, firestoreDB} = useContext(AuthContext);

    function manejarAuth(authedUser){

        if(authedUser){
            //console.log(authedUser);
            const docRef = doc(firestoreDB, "usuarios", authedUser.uid);

            getDoc(docRef).then( respuesta => {
                //console.log(respuesta.exists());
                if(respuesta.exists()){
                    let datos = respuesta.data();
    
    
                    const noteDoc =  doc(firestoreDB, "notas", authedUser.uid);
                    getDoc(noteDoc).then(
                        respuesta => {
                            if(respuesta.exists()){
                                //onsole.log(respuesta);
                            }
                        }
                    ).catch( error => {
                        console.log(error);
                    });
                }else{
                    const userDoc = doc(firestoreDB,"usuarios",authedUser.uid);
                    
                    setDoc( userDoc ,{
                        nombre : `${authedUser.displayName}`,
                        correo : `${authedUser.email}`,
                        correoVerificado : `${authedUser.emailVerified}`,
                        id : `${authedUser.uid}`,
                        "visibility" : "public",
                    }, {merge: true}
                    ).then( () => {
                        console.log("Success");
                    }
                    ).catch( error => {
                        console.log(error);
                    });
                }
            } ).catch();
        }
        
    }

    function googleAuth(){

        signInWithPopup(firebaseAuth, googleProvider).then((result)=>{
            console.log("se registró");
            const credential = GoogleAuthProvider.credentialFromResult(result);
            manejarAuth(result.user);
        }).catch((error) => {
            console.log("Error");
            const errorCode = error.code;
            const errorMessage = error.message;
            //const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }

    return(
        <div className="h-screen w-screen grid place-items-center">
            <div className="w-5/6 text-center">
                <div className="w-full grid place-content-center py-5">
                    <img src="resources/vsnote.png"/>
                </div>
                <h1 className="text-5xl font-ubuntu font-bold pb-5">
                    Todas tus notas, en un solo lugar...
                </h1>
                <button
                    onClick={()=>{googleAuth()}}
                    className="
                        w-full
                        bg-darkPurple
                        hover:bg-lightPurple
                        text-beige 
                        font-bold 
                        font-firasans 
                        py-4
                        rounded-xl
                        text-3xl"
                >
                    Ingresa con Google
                </button>
            </div>
        </div>
    );

}