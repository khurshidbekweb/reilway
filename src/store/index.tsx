import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'uz' | 'ru';
type sort = number | null

interface LanguageContextType {
    language: Language;
    changeLanguage: (lang: Language) => void;
    mark: sort,
    changeSort: (sort: sort) => void
}



const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('uz');
    const [mark, setMark] = useState<sort>(null)

    const changeSort = (sort: sort) => {
        setMark(sort)
    }

    const changeLanguage = (lang: Language) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, mark,  changeLanguage, changeSort}}>
            {children}
        </LanguageContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
