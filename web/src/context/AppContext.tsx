import { i18n } from 'i18next';
import {
    createContext,
    useState,
    useContext,
    Dispatch,
    SetStateAction,
    ReactNode,
    useEffect
} from 'react';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';
import fetchData from '../utils/api';
import { AudioPlayerType } from '../types';

type AppContextType = {
    isMenuOpen: boolean;
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
    i18n: i18n | null;
    isMusicPlaying: boolean;
    setIsMusicPlaying: Dispatch<SetStateAction<boolean>>;
};

const AppContext = createContext<AppContextType>({
    isMenuOpen: false,
    setIsMenuOpen: () => {},
    i18n: null,
    isMusicPlaying: false,
    setIsMusicPlaying: () => {},
});

const AppProvider = ({ children }: { children: ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    const [audio, setAudio] = useState<AudioPlayerType | null>();
    const { i18n } = useTranslation();

    const getData = async () => {
        try {
            // TODO: Decide the audio
            const audiosResponse = await fetchData<AudioPlayerType[]>('audios', i18n.language);
            if(audiosResponse && audiosResponse?.length > 0) setAudio(audiosResponse[2]);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Error fetching audio', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <AppContext.Provider
            value={{
                isMenuOpen,
                i18n,
                isMusicPlaying,
                setIsMenuOpen,
                setIsMusicPlaying,
            }}
        >
            {children}
            <ReactPlayer
                url={audio?.link}
                volume={0.2}
                playing={isMusicPlaying}
                style={{ display: 'none' }}
                onEnded={() => setIsMusicPlaying(false)}
            />
        </AppContext.Provider>
    );
};

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
