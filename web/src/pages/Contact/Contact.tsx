import Menu from '../../components/Menu/Menu';
import styles from './Contact.module.css';
import imageContact from '../../assets/Contact/Concerts_017.png';

const Contact = () => {
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
                    <form className={styles['contact-form-container']}>
                        <label htmlFor="name">Nombre</label>
                        <input className={styles['input-form']} id="name" type="text" />

                        <label htmlFor="email">Correo electrónico</label>
                        <input className={styles['input-form']} id="email" type="text" />

                        <label htmlFor="subject">Asunto</label>
                        <input className={styles['input-form']} id="subject" type="text" />

                        <label htmlFor="message">Mensaje
                            <textarea className={[styles['input-form'], styles['contact-textarea']].join(' ')} id="message" rows={7} />
                        </label>

                        <div className={styles['terms-and-conditions-container']}>
                            <div className={styles['checkbox-container']}>
                                <input id="checkbox" type="checkbox" className={styles['checkbox-style']} />
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
