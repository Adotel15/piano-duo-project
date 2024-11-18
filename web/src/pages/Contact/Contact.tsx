import Menu from '../../components/Menu/Menu';
import styles from './Contact.module.css';
import imageContact from '../../assets/Contact/Concerts_017.png';
import React, {useState} from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [terms, setTerms] = useState(false);

    const handleSubmit = () => {
        if (!name || !email || !subject || !message){
            alert('Completa todos los campos.');
            return;
        }
        if (!terms){
            alert('Debes aceptar los términos y condiciones.');
            return;
        }
    };

    return (
        <div>
            <div>
                <Menu />
            </div>
            <section className={styles['section-contact']}>
                <div className={styles['container-image-contact']}>
                    <img className={styles['image-Contact']} src={imageContact} alt="Pianists"/>
                </div>
                <div className={styles['form-container']}>
                    <h1>—Contacto</h1>
                    <form className={styles['contact-form-container']} onSubmit={handleSubmit}>
                        <label htmlFor="name">Nombre</label>
                        <input className={styles['input-form']} id="name" type="text" value={name} onChange={e => setName(e.target.value)}/>

                        <label htmlFor="email">Correo electrónico</label>
                        <input className={styles['input-form']} id="email" type="text" value={email} onChange={e => setEmail(e.target.value)} />

                        <label htmlFor="subject">Asunto</label>
                        <input className={styles['input-form']} id="subject" type="text" value={subject} onChange={e => setSubject(e.target.value)}/>

                        <label htmlFor="message">Mensaje
                            <textarea className={[styles['input-form'], styles['contact-textarea']].join(' ')} id="message" rows={7} value={message} onChange={e => setMessage(e.target.value)}/>
                        </label>

                        <div className={styles['terms-and-conditions-container']}>
                            <div className={styles['checkbox-container']}>
                                <input id="checkbox" type="checkbox" className={styles['checkbox-style']} checked={terms} onChange={e => setTerms(e.target.checked)}/>
                            </div>
                            <label>
                                He leído y acepto los <span>términos y condiciones</span> y acepto la <span>política de privacidad</span>
                            </label>
                        </div>

                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
