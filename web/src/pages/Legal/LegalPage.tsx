import FadeIn from 'react-fade-in';

import Navbar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';
import Background from '../../components/Background/Background';

import styles from './LegalPage.module.css';

import i18n from '../../../i18n';
import { legalContent, type LegalDoc, type LegalLang } from '../../data/legalContent';

const SUPPORTED_LANGS: LegalLang[] = ['es', 'ca', 'en'];

const LegalPage = ({ doc }: { doc: LegalDoc }) => {
    const lang = (SUPPORTED_LANGS.includes(i18n.language as LegalLang)
        ? i18n.language
        : 'es') as LegalLang;
    const entry = legalContent[doc][lang];

    return (
        <>
            <main className={styles['page-container']}>
                <Navbar />
                <div className={styles['header-container']}>
                    <Header content={entry.title} />
                </div>
                <div className={styles['content-container']}>
                    <FadeIn>
                        <article
                            className={styles['legal-content']}
                            dangerouslySetInnerHTML={{ __html: entry.body }}
                        />
                    </FadeIn>
                </div>
                <Footer />
            </main>
            <Background />
        </>
    );
};

export default LegalPage;
