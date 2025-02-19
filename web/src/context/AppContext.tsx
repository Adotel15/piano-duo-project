import { i18n } from 'i18next';
import {
    createContext,
    useState,
    useContext,
    Dispatch,
    SetStateAction,
    ReactNode,
} from 'react';
import { useTranslation } from 'react-i18next';

type AppContextType = {
    isMenuOpen: boolean;
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
    i18n: i18n | null;
}

const AppContext = createContext<AppContextType>({
    isMenuOpen: false,
    setIsMenuOpen: () => {},
    i18n: null,
});

const AppProvider = ({ children }:{ children: ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { i18n } = useTranslation();

    // Cuando se ponga la música se puede manejar por aquí
    // const [isMusicPlaying, setIsMusicPlaying] = useState(false);

    return (
        <AppContext.Provider value={{
            isMenuOpen,
            setIsMenuOpen,
            i18n
        }}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
