import {  useState } from 'react';
import { useTranslation } from 'react-i18next';

import Navbar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';

import imageContact from '../../assets/Contact/Estudi_003.jpg';

import styles from './Contact.module.css';

const Contact = () => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        terms: false,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        const fields = ['name', 'email', 'subject', 'message'] as const;

        fields.forEach(field => {
            if (!formData[field]) {
                newErrors[field] = t(`contact.form.error.${field}`);
            }
        });

        if (!formData.terms) {
            newErrors.terms = t('contact.form.error.terms');
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validateForm()) {
            // TODO: Call api
        }
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const target = event.target as HTMLInputElement;
        const { name, value, type, checked } = target;
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
                            <div className={styles['input-container']}>
                                <input
                                    className={styles['input-form']}
                                    placeholder={t('contact.form.name')}
                                    name='name'
                                    id="name"
                                    type="text"
                                    onChange={e => onChange(e)}
                                />
                                <p className={styles['error-message']}>{errors.name}</p>
                            </div>
                            <div className={styles['input-container']}>
                                <input
                                    className={styles['input-form']}
                                    name='email'
                                    placeholder={t('contact.form.email')}
                                    id="email"
                                    type="text"
                                    onChange={e => onChange(e)}
                                />
                                <p className={styles['error-message']}>{errors.email}</p>
                            </div>
                            <div className={styles['input-container']}>
                                <input
                                    className={styles['input-form']}
                                    name='subject'
                                    placeholder={t('contact.form.case')}
                                    id="subject"
                                    type="text"
                                    onChange={e => onChange(e)}
                                />
                                <p className={styles['error-message']}>{errors.subject}</p>
                            </div>
                            <div className={styles['input-container']}>
                                <textarea
                                    className={[styles['input-form'], styles['contact-textarea']].join(' ')}
                                    id="message"
                                    name='message'
                                    rows={7}
                                    onChange={e => onChange(e)}
                                    placeholder={t('contact.form.message')}
                                />
                                <p className={styles['error-message']}>{errors.message}</p>
                            </div>
                            <div className={styles['terms-and-conditions-container']}>
                                <div className={styles['checkbox-container']}>
                                    <input name='terms' id="checkbox" type="checkbox" className={styles['checkbox-style']} checked={formData.terms} onChange={e => onChange(e)}/>
                                </div>
                                <label className={styles['terms-conditions']} dangerouslySetInnerHTML={{__html: t('contact.form.terms')}}/>
                            </div>
                            <p className={styles['error-message']}>{errors.terms}</p>
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
