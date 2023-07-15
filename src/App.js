import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import "./style.css"

export default function App() {
    
    const [darkMode,setDarkMode]=React.useState(false)
    
    function toggled(){
        setDarkMode(!darkMode)
        console.log(darkMode)
    }
    
    return (
        <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={toggled} />
            <Main darkMode={darkMode} />
        </div>
    )
}
