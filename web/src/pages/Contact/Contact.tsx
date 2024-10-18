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
                <div className={styles['container-image-Contact']}>
                    <img className={styles['image-Contact']} src={imageContact} alt="Pianists"/>
                </div>
                <div className={styles['div-form']}>
                    <h1>—Contacto</h1>
                    <form className={styles['container-form-contact']}>
                        <label htmlFor="name">Nombre</label>
                        <input className={styles['input-form']} id="name" type="text" />

                        <label htmlFor="email">Correo electrónico</label>
                        <input className={styles['input-form']} id="email" type="text" />

                        <label htmlFor="subject">Asunto</label>
                        <input className={styles['input-form']} id="subject" type="text" />

                        <label htmlFor="message">Mensaje
                            <textarea className={styles['input-form']} id="message" rows={7}></textarea>
                        </label>

                        <label htmlFor="checkbox" className="checkbox-label">
                            <input type="checkbox" id="checkbox" />
                            He leído y acepto los <span>términos y condiciones</span> y acepto la <span>política de privacidad</span>
                        </label>

                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
