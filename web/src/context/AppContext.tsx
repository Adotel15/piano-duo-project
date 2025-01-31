import {
    createContext,
    useState,
    useContext,
    Dispatch,
    SetStateAction,
    ReactNode,
} from 'react';

type AppContextType = {
    isMenuOpen: boolean;
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
    language: 'es' | 'cat' | 'en';
    setLanguage: Dispatch<SetStateAction<'es' | 'cat' | 'en'>>;
}

const AppContext = createContext<AppContextType>({
    isMenuOpen: false,
    setIsMenuOpen: () => {},
    language: 'es',
    setLanguage: () => {},
});

const AppProvider = ({ children }:{ children: ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [language, setLanguage] = useState<'es'|'cat'|'en'>('es');

    // Cuando se ponga la música se puede manejar por aquí
    // const [isMusicPlaying, setIsMusicPlaying] = useState(false);

    return (
        <AppContext.Provider value={{
            isMenuOpen,
            language,
            setIsMenuOpen,
            setLanguage,
        }}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
