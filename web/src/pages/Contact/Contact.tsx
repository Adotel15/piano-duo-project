import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Navbar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';

import imageContact from '../../assets/Contact/Estudi_003.jpg';

import styles from './Contact.module.css';

const Contact = () => {
    const { t } = useTranslation();
    type Event = React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        terms: false,
    });

    const handleSubmit = () => {
        if (!formData.name || !formData.email || !formData.message || !formData.subject){
            alert('Completa todos los campos.');
            return;
        }
        if (!formData.terms){
            alert('Debes aceptar los términos y condiciones.');
            return;
        }
        alert('Formulario enviado');
    };

    const onChange = (event: Event) => {
        const target = event.target as HTMLInputElement;
        const {name, value, type, checked } = target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    return (
        <main className={styles['page-container']}>
            <Navbar/>
            <div className={styles['contact-container']}>

                <section className={styles['section-contact']}>
                    <div className={styles['container-image-contact']}>
                        <img className={styles['image-contact']} src={imageContact} alt="Pianists"/>
                    </div>
                    <div className={styles['form-container']}>
                        <Header content={t('contact.title')}></Header>
                        <form className={styles['contact-form-container']} onSubmit={handleSubmit}>
                            <label htmlFor="name">{t('contact.form.name')}</label>
                            <input className={styles['input-form']} name='name' id="name" type="text" onChange={e => onChange(e)}/>

                            <label htmlFor="email">{t('contact.form.email')}</label>
                            <input className={styles['input-form']} name='email' id="email" type="text" onChange={e => onChange(e)} />

                            <label htmlFor="subject">{t('contact.form.case')}</label>
                            <input className={styles['input-form']} name='subject' id="subject" type="text" onChange={e => onChange(e)}/>

                            <label htmlFor="message">{t('contact.form.message')}
                                <textarea className={[styles['input-form'], styles['contact-textarea']].join(' ')} id="message" rows={7} onChange={e => onChange(e)}/>
                            </label>

                            <div className={styles['terms-and-conditions-container']}>
                                <div className={styles['checkbox-container']}>
                                    <input name='terms' id="checkbox" type="checkbox" className={styles['checkbox-style']} checked={formData.terms} onChange={e => onChange(e)}/>
                                </div>
                                <label className={styles['terms-conditions']} dangerouslySetInnerHTML={{__html: t('contact.form.terms')}}/>

                            </div>
                            <input type="submit" value={t('contact.form.send')}/>
                        </form>
                    </div>
                </section>
            </div>
            <Footer/>
        </main>
    );
};

export default Contact;
