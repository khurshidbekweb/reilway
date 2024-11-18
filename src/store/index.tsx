import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'uz' | 'ru';

interface filter {
    mark: number | null
    reviewType: string | null
}

interface LanguageContextType {
    language: Language;
    changeLanguage: (lang: Language) => void;
    filter: Partial<filter>,
    changeFilter: (filter: Partial<filter>) => void,
}



const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('uz');
    const [filter, setFilter] = useState<Partial<filter>>({mark: null, reviewType: null})


    const changeLanguage = (lang: Language) => {
        setLanguage(lang);
    };
    const changeFilter = (payload: Partial<filter>) => {
        setFilter(payload);
    };

    return (
        <LanguageContext.Provider value={{ language, filter, changeLanguage, changeFilter }}>
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
