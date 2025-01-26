import { useState } from 'react';

import Navbar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import Socials from '../../components/Socials/Socials';
import Footer from '../../components/footer/Footer';

import location from '../../assets/Contact/location.png';
import imageContact from '../../assets/Contact/Concerts_017.png';
import phone from '../../assets/Contact/phone.png';
import mail from '../../assets/Contact/mail.png';

import styles from './Contact.module.css';

const Contact = () => {
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
                        <Header content='—Contacto'></Header>
                        <form className={styles['contact-form-container']} onSubmit={handleSubmit}>
                            <label htmlFor="name">Nombre</label>
                            <input className={styles['input-form']} name='name' id="name" type="text" onChange={e => onChange(e)}/>

                            <label htmlFor="email">Correo electrónico</label>
                            <input className={styles['input-form']} name='email' id="email" type="text" onChange={e => onChange(e)} />

                            <label htmlFor="subject">Asunto</label>
                            <input className={styles['input-form']} name='subject' id="subject" type="text" onChange={e => onChange(e)}/>

                            <label htmlFor="message">Mensaje
                                <textarea className={[styles['input-form'], styles['contact-textarea']].join(' ')} id="message" rows={7} onChange={e => onChange(e)}/>
                            </label>

                            <div className={styles['terms-and-conditions-container']}>
                                <div className={styles['checkbox-container']}>
                                    <input name='terms' id="checkbox" type="checkbox" className={styles['checkbox-style']} checked={formData.terms} onChange={e => onChange(e)}/>
                                </div>
                                <label className={styles['terms-conditions']}>
                                He leído y acepto los <span>términos y condiciones</span> y acepto la <span>política de privacidad</span>
                                </label>
                            </div>
                            <input type="submit" value="Enviar"/>
                        </form>
                    </div>
                </section>
                <div className={styles['contact-information-container']}>
                    <div className={styles['info-container']}>
                        <img src={location} alt="location icon" className={styles['icon']}/>
                        <p>Barcelona, España</p>
                    </div>
                    <div className={styles['info-container']}>
                        <img src={phone} alt="telephone icon" className={styles['icon']}/>
                        <p>00000000</p>
                    </div>
                    <div className={styles['info-container']}>
                        <img src={mail} alt="mail icon" className={styles['icon']}/>
                        <p>admin@pianoduo.com</p>
                    </div>
                    <Socials/>
                </div>
            </div>
            <Footer/>
        </main>
    );
};

export default Contact;
