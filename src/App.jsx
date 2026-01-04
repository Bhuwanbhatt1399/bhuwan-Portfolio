import React, { useState } from "react"
import LoadingScreen from "./components/LoadingScreen"
import { Navbar } from "./components/Navbar"
import { MobileMenu } from "./components/MobileMenu"
import "./index.css"
import { Home } from "./components/sections/Home"
import { About } from "./components/sections/About"
import { Projects } from "./components/sections/Projects"
import { Contact } from "./components/sections/Contact"


const App = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      {/* // when loading is finished this will call the function 
    //If loading is not finished, show the LoadingScreen component When the LoadingScreen finishes, it will call a function that marks loading as complete */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{""}
      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
          } bg-black text-gray-100`}>

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        

      </div>
    </>
  )

};

export default App




