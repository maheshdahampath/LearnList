import { useEffect, useState } from "react";
import Logo from "../assests/logo.svg";

export const Header = () => {
  const [theme, setTheme] =useState(JSON.parse(localStorage.getItem("theme")) || "medium");

  const [messageVisible, setMessageVisible] = useState(false);

  const toggleMessage = () => {
    setMessageVisible(!messageVisible);
  };
  
useEffect(() => {
  localStorage.setItem("theme", JSON.stringify(theme));
  document.documentElement.removeAttribute("class");
  document.documentElement.classList.add(theme);
}, [theme]);

  return (
    <header>

    <div className="logo">
    <img src={Logo} alt="Taskmate Logo" />
    <span>LearnList</span>
    </div>

    <div className="themeSelector">
    <i
        onClick={toggleMessage}
        className="bi bi-info-circle"
        style={{ cursor: 'pointer', fontSize: '24px', marginRight: '80px' }}
      ></i>
      {messageVisible && <p>Track and organize your study tasks effectively</p>}

        <span onClick={() => setTheme("light")} className={theme === "light" ? "light activeTheme" : "light"}></span>
        <span onClick={() => setTheme("medium")} className={theme === "medium" ? "medium activeTheme" : "medium"}></span>
        <span onClick={() => setTheme("dark")} className={theme === "dark" ? "dark activeTheme" : "dark"}></span>
       
    </div>
    
    </header>
  )
}
