import "./Navbar.css";
import navigation from "../../data/navigation.json";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";



const Navbar = () => {
  const context = useContext(LanguageContext);
  
  if (!context) return null;

  const { t, language, setLanguage } = context;


  return (
    <nav className='navbar'>
      <div className="Navbar__logo">
        <span className="logo-r">R</span>
        <span className="logo-s">S</span>
        <span className="logo-h">H</span>
      </div>

    

      <ul className="navbar__links">
        {navigation.map((item) => (
  <li key={item.id}>
    <a href={`#${item.id}`}>
      {t(`nav.${item.id}`)}
    </a>
  </li>
))}



    </ul >
      <button onClick={() => setLanguage(language === "es" ? "en" : "es")}>
        {language.toUpperCase()}
      </button>
    </nav>
    
  );
};

export default Navbar;


