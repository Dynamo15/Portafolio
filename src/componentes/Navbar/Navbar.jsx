import "./Navbar.css";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Navbar = () => {
  const context = useContext(LanguageContext);

  if (!context) return null;

  const { language, changeLanguage } = context;

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="Navbar__logo">
        <span className="logo-r">R</span>
        <span className="logo-s">S</span>
        <span className="logo-h">H</span>
      </div>

      {/* LANGUAGE */}
      <button
        className={`language-btn ${language === "en" ? "reverse" : ""}`}
        onClick={() =>
          changeLanguage(language === "es" ? "en" : "es")
        }
      >
        <span className="orbit-ring">
          <span className="orbit-dot"></span>
        </span>

        {language.toUpperCase()}
      </button>

    </nav>
  );
};

export default Navbar;