import Menu from '../../components/Menu/Menu';
import styles from './Contact.module.css';
import imageContact from '../../assets/Contact/Concerts_017.png';
import React, {useState} from 'react';

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
