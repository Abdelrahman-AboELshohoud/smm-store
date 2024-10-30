import { createContext, useContext, useState } from "react";

type TranslateContext = {
  language: string;
  changeLanguage: (lang: string) => void;
};

const TranslateContext = createContext<TranslateContext | undefined>(undefined);

export default function TranslateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = localStorage.getItem("lang") || "en";
  const [language, setLanguage] = useState(lang);
  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };
  return (
    <TranslateContext.Provider value={{ language, changeLanguage }}>
      {children}
    </TranslateContext.Provider>
  );
}

const useTranslateContext = () => {
  const context = useContext(TranslateContext);
  return context as TranslateContext;
};

export { useTranslateContext, TranslateProvider };
