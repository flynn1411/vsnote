import { useState } from "react";


function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  function changeTheme(){
    setDarkTheme(!darkTheme);
  }

  return (
    <div className={`App ${darkTheme && 'dark'}`}>
      <div className="
        bg-beige
        dark:bg-darkBrown
        transition-all
        duration-1000
        ">

        <div className='
          h-[50vh]
          bg-transparent
          grid
          place-items-center
        '>
          <button 
            onClick={()=>{changeTheme()}}
            className="
              text-lightText
              "
          >
            Tema oscuro
          </button>
        </div>
        <div className='
          h-[50vh]
          bg-transparent
        '>

        </div>
      </div>
    </div>
  );
}

export default App;
