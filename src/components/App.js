import { useContext, useState } from "react";
import { AuthContext } from "../contexts/firebaseContext";
import Home from "./Home";
import SignIn from "./SignIn";


function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const {user} = useContext(AuthContext);

  function changeTheme(){
    setDarkTheme(!darkTheme);
  }

  //console.log(user);

  return (
    <div className={`App ${darkTheme && 'dark'}`}>
      <div className="
        bg-beige
        dark:bg-darkBrown
        transition-all
        duration-1000
        text-lightText
        ">
          { user ? 
            <Home changeTheme={changeTheme}/> : 
            <SignIn setTemaActual={changeTheme} /> 
          }
      </div>
    </div>
  );
}

export default App;
