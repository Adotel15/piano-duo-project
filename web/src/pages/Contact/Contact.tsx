import { useTranslation } from 'react-i18next';

import FadeIn from 'react-fade-in';

import { contactInfo } from '../../constants/ui';

import Navbar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';
import Background from '../../components/Background/Background';

import imageContact from '../../assets/Contact/Estudi_003.jpg';

import styles from './Contact.module.css';

const MailIcon = () =>
    <svg className={styles['card-icon']} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' aria-hidden='true'>
        <rect x='3' y='5' width='18' height='14' rx='2' />
        <path d='m3.5 6.5 8.5 6.5 8.5-6.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
;

const WhatsappIcon = () =>
    <svg className={styles['card-icon']} viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
        <path d='M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.14.17-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z' />
    </svg>
;

const Contact = () => {
    const { t } = useTranslation();

    const mailtoLink = `mailto:${contactInfo.emails.join(',')}?subject=${encodeURIComponent(t('contact.email.subject'))}`;
    const whatsappLink = `https://wa.me/${contactInfo.whatsappPhone.replace(/\D/g, '')}?text=${encodeURIComponent(t('contact.whatsapp.message'))}`;

    return (
        <>
            <main className={styles['page-container']}>
                <Navbar/>
                <div className={styles['contact-container']}>
                    <section className={styles['section-contact']}>
                        <div className={styles['container-image-contact']}>
                            <img className={styles['image-contact']} src={imageContact} alt='Pianists'/>
                        </div>
                        <div className={styles['info-container']}>
                            <Header content={t('contact.title')}></Header>
                            <FadeIn className={styles['cards-container']}>
                                <p className={styles['intro']}>{t('contact.intro')}</p>
                                <article className={styles['contact-card']}>
                                    <div className={styles['card-header']}>
                                        <MailIcon />
                                        <h3 className={styles['card-title']}>{t('contact.email.title')}</h3>
                                    </div>
                                    <ul className={styles['card-details']}>
                                        {contactInfo.emails.map(email =>
                                            <li key={email}>
                                                <a href={`mailto:${email}`} className={styles['detail-link']}>{email}</a>
                                            </li>
                                        )}
                                    </ul>
                                    <a href={mailtoLink} className={`${styles['contact-button']} ${styles['contact-button-primary']}`}>
                                        {t('contact.email.button')}
                                    </a>
                                </article>
                                <article className={styles['contact-card']}>
                                    <div className={styles['card-header']}>
                                        <WhatsappIcon />
                                        <h3 className={styles['card-title']}>{t('contact.whatsapp.title')}</h3>
                                    </div>
                                    <p className={styles['card-details']}>{contactInfo.whatsappPhone}</p>
                                    <a
                                        href={whatsappLink}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className={`${styles['contact-button']} ${styles['contact-button-secondary']}`}
                                    >
                                        {t('contact.whatsapp.button')}
                                    </a>
                                </article>
                            </FadeIn>
                        </div>
                    </section>
                </div>
                <Footer/>
            </main>
            <Background />
        </>
    );
};

export default Contact;
