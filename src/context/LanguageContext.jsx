import {
  createContext,
  useState,
  useEffect,
  useMemo,
} from "react";

import es from "../data/i18n/es.json";
import en from "../data/i18n/en.json";

export const LanguageContext = createContext({
  language: "es",
  changeLanguage: () => {},
  t: () => "",
});

const languages = {
  es,
  en,
};

// Idiomas disponibles
const AVAILABLE_LANGUAGES = ["es", "en"];

// Detecta idioma del navegador
const detectLanguage = () => {
  const lang = (navigator.language || "").toLowerCase();

  if (lang.startsWith("es")) return "es";

  return "en";
};

// Obtiene idioma inicial
const getInitialLanguage = () => {
  const saved = localStorage.getItem("language");

  if (
    saved &&
    AVAILABLE_LANGUAGES.includes(saved)
  ) {
    return saved;
  }

  return detectLanguage();
};

export const LanguageProvider = ({ children }) => {

  const [language, setLanguage] = useState(
    getInitialLanguage()
  );

  // Guarda la preferencia
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Cambiar idioma
  const changeLanguage = (lang) => {

    if (!AVAILABLE_LANGUAGES.includes(lang))
      return;

    setLanguage(lang);

    /*
      FUTURO (FastAPI)

      await api.put("/user/language", {
        language: lang,
      });
    */
  };

  // Traducción
  const t = (path) => {

    const keys = path.split(".");

    let value = languages[language];

    for (const key of keys) {

      value = value?.[key];

      if (value === undefined)
        return path;

    }

    return value;

  };

  // Evita renders innecesarios
  const value = useMemo(
    () => ({
      language,
      changeLanguage,
      t,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};