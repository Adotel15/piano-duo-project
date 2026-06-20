/**
 * Contenido legal estático y trilingüe de las páginas /terms y /privacy.
 *
 * ⚠ AVISO: estos textos son una BASE GENÉRICA redactada para un dúo de pianistas
 * profesionales. NO constituyen asesoramiento legal. Antes de publicar conviene
 * que un profesional los revise y se completen los datos identificativos reales
 * del responsable (nombre fiscal, NIF, dirección y, si procede, DPO/email de
 * privacidad). Los textos se renderizan con dangerouslySetInnerHTML: es contenido
 * propio y controlado, no introducir aquí entradas de terceros.
 */

export type LegalDoc = 'terms' | 'privacy';
export type LegalLang = 'es' | 'ca' | 'en';

export interface LegalEntry {
    title: string;
    body: string;
}

export const legalContent: Record<LegalDoc, Record<LegalLang, LegalEntry>> = {
    terms: {
        es: {
            title: '—Términos y condiciones',
            body: `
                <p>Bienvenido al sitio web de Pérez Molina Piano Dúo. El acceso y uso de este sitio implica la aceptación de los presentes términos y condiciones.</p>

                <h3>1. Titularidad</h3>
                <p>Este sitio web es titularidad de Pérez Molina Piano Dúo (en adelante, «el Dúo») y tiene como finalidad la presentación de su actividad artística, repertorio, grabaciones y datos de contacto.</p>

                <h3>2. Uso del sitio</h3>
                <p>El usuario se compromete a hacer un uso adecuado de los contenidos del sitio y a no emplearlos para actividades ilícitas o que puedan dañar la imagen del Dúo o de terceros.</p>

                <h3>3. Propiedad intelectual</h3>
                <p>Todos los contenidos del sitio —textos, fotografías, vídeos, grabaciones de audio, el repertorio publicado y los signos distintivos— están protegidos por los derechos de propiedad intelectual e industrial y pertenecen al Dúo o a sus legítimos titulares. Queda prohibida su reproducción, distribución o comunicación pública sin autorización previa por escrito.</p>

                <h3>4. Enlaces y servicios de terceros</h3>
                <p>El sitio puede incluir enlaces a plataformas externas (como Spotify o YouTube). El Dúo no se responsabiliza de los contenidos ni de las políticas de privacidad de dichos servicios.</p>

                <h3>5. Responsabilidad</h3>
                <p>El Dúo procura mantener la información actualizada y libre de errores, pero no garantiza la disponibilidad continua del sitio ni se hace responsable de los daños derivados de su uso.</p>

                <h3>6. Modificaciones</h3>
                <p>El Dúo se reserva el derecho a modificar estos términos en cualquier momento. La versión vigente será siempre la publicada en esta página.</p>

                <h3>7. Legislación aplicable</h3>
                <p>Estos términos se rigen por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales que correspondan conforme a derecho.</p>
            `,
        },
        ca: {
            title: '—Termes i condicions',
            body: `
                <p>Benvingut al lloc web de Pérez Molina Piano Dúo. L'accés i l'ús d'aquest lloc impliquen l'acceptació d'aquests termes i condicions.</p>

                <h3>1. Titularitat</h3>
                <p>Aquest lloc web és titularitat de Pérez Molina Piano Dúo (d'ara endavant, «el Duo») i té com a finalitat la presentació de la seva activitat artística, repertori, enregistraments i dades de contacte.</p>

                <h3>2. Ús del lloc</h3>
                <p>L'usuari es compromet a fer un ús adequat dels continguts del lloc i a no emprar-los per a activitats il·lícites o que puguin perjudicar la imatge del Duo o de tercers.</p>

                <h3>3. Propietat intel·lectual</h3>
                <p>Tots els continguts del lloc —textos, fotografies, vídeos, enregistraments d'àudio, el repertori publicat i els signes distintius— estan protegits pels drets de propietat intel·lectual i industrial i pertanyen al Duo o als seus legítims titulars. Queda prohibida la seva reproducció, distribució o comunicació pública sense autorització prèvia per escrit.</p>

                <h3>4. Enllaços i serveis de tercers</h3>
                <p>El lloc pot incloure enllaços a plataformes externes (com Spotify o YouTube). El Duo no es responsabilitza dels continguts ni de les polítiques de privacitat d'aquests serveis.</p>

                <h3>5. Responsabilitat</h3>
                <p>El Duo procura mantenir la informació actualitzada i lliure d'errors, però no garanteix la disponibilitat contínua del lloc ni es fa responsable dels danys derivats del seu ús.</p>

                <h3>6. Modificacions</h3>
                <p>El Duo es reserva el dret de modificar aquests termes en qualsevol moment. La versió vigent serà sempre la publicada en aquesta pàgina.</p>

                <h3>7. Legislació aplicable</h3>
                <p>Aquests termes es regeixen per la legislació espanyola. Per a qualsevol controvèrsia, les parts se sotmeten als jutjats i tribunals que corresponguin conforme a dret.</p>
            `,
        },
        en: {
            title: '—Terms and conditions',
            body: `
                <p>Welcome to the Pérez Molina Piano Duo website. Accessing and using this site implies acceptance of these terms and conditions.</p>

                <h3>1. Ownership</h3>
                <p>This website is owned by Pérez Molina Piano Duo (hereinafter, «the Duo») and its purpose is to present its artistic activity, repertoire, recordings and contact details.</p>

                <h3>2. Use of the site</h3>
                <p>The user agrees to make appropriate use of the site's contents and not to use them for unlawful activities or for any purpose that could harm the image of the Duo or of third parties.</p>

                <h3>3. Intellectual property</h3>
                <p>All content on the site —texts, photographs, videos, audio recordings, the published repertoire and distinctive signs— is protected by intellectual and industrial property rights and belongs to the Duo or its rightful owners. Reproduction, distribution or public communication without prior written authorisation is prohibited.</p>

                <h3>4. Links and third-party services</h3>
                <p>The site may include links to external platforms (such as Spotify or YouTube). The Duo is not responsible for the content or the privacy policies of those services.</p>

                <h3>5. Liability</h3>
                <p>The Duo strives to keep the information up to date and free of errors, but does not guarantee the continuous availability of the site nor is it liable for damages arising from its use.</p>

                <h3>6. Changes</h3>
                <p>The Duo reserves the right to modify these terms at any time. The version in force will always be the one published on this page.</p>

                <h3>7. Applicable law</h3>
                <p>These terms are governed by Spanish law. For any dispute, the parties submit to the courts and tribunals that apply under the law.</p>
            `,
        },
    },
    privacy: {
        es: {
            title: '—Política de privacidad',
            body: `
                <p>En Pérez Molina Piano Dúo respetamos tu privacidad y protegemos los datos personales que nos facilitas a través de este sitio web.</p>

                <h3>1. Responsable</h3>
                <p>El responsable del tratamiento de los datos es Pérez Molina Piano Dúo. Puedes contactar con nosotros a través del formulario de contacto disponible en esta web.</p>

                <h3>2. Datos que recogemos</h3>
                <p>Únicamente tratamos los datos que nos proporcionas voluntariamente a través del formulario de contacto: nombre, correo electrónico, asunto y el contenido del mensaje.</p>

                <h3>3. Finalidad</h3>
                <p>Los datos se utilizan exclusivamente para atender y responder a tu consulta o solicitud. No se emplean para envíos comerciales ni se elaboran perfiles.</p>

                <h3>4. Base legal</h3>
                <p>La base legal del tratamiento es tu consentimiento, otorgado al marcar la casilla de aceptación y enviar el formulario.</p>

                <h3>5. Conservación</h3>
                <p>Conservamos los datos durante el tiempo necesario para gestionar tu consulta y, posteriormente, durante los plazos legalmente exigibles.</p>

                <h3>6. Destinatarios</h3>
                <p>Para el envío de los mensajes del formulario utilizamos un proveedor de servicios de correo electrónico que actúa como encargado del tratamiento. No cedemos tus datos a terceros salvo obligación legal.</p>

                <h3>7. Tus derechos</h3>
                <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiéndonos a través del formulario de contacto. También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos.</p>

                <h3>8. Cambios</h3>
                <p>Podemos actualizar esta política para adaptarla a cambios normativos o de funcionamiento. La versión vigente será siempre la publicada en esta página.</p>
            `,
        },
        ca: {
            title: '—Política de privacitat',
            body: `
                <p>A Pérez Molina Piano Dúo respectem la teva privacitat i protegim les dades personals que ens facilites a través d'aquest lloc web.</p>

                <h3>1. Responsable</h3>
                <p>El responsable del tractament de les dades és Pérez Molina Piano Dúo. Pots contactar amb nosaltres a través del formulari de contacte disponible en aquesta web.</p>

                <h3>2. Dades que recollim</h3>
                <p>Només tractem les dades que ens proporciones voluntàriament a través del formulari de contacte: nom, correu electrònic, assumpte i el contingut del missatge.</p>

                <h3>3. Finalitat</h3>
                <p>Les dades s'utilitzen exclusivament per atendre i respondre la teva consulta o sol·licitud. No s'empren per a enviaments comercials ni s'elaboren perfils.</p>

                <h3>4. Base legal</h3>
                <p>La base legal del tractament és el teu consentiment, atorgat en marcar la casella d'acceptació i enviar el formulari.</p>

                <h3>5. Conservació</h3>
                <p>Conservem les dades durant el temps necessari per gestionar la teva consulta i, posteriorment, durant els terminis legalment exigibles.</p>

                <h3>6. Destinataris</h3>
                <p>Per a l'enviament dels missatges del formulari utilitzem un proveïdor de serveis de correu electrònic que actua com a encarregat del tractament. No cedim les teves dades a tercers excepte obligació legal.</p>

                <h3>7. Els teus drets</h3>
                <p>Pots exercir els teus drets d'accés, rectificació, supressió, oposició, limitació i portabilitat escrivint-nos a través del formulari de contacte. També tens dret a presentar una reclamació davant l'Agència Espanyola de Protecció de Dades.</p>

                <h3>8. Canvis</h3>
                <p>Podem actualitzar aquesta política per adaptar-la a canvis normatius o de funcionament. La versió vigent serà sempre la publicada en aquesta pàgina.</p>
            `,
        },
        en: {
            title: '—Privacy policy',
            body: `
                <p>At Pérez Molina Piano Duo we respect your privacy and protect the personal data you provide to us through this website.</p>

                <h3>1. Data controller</h3>
                <p>The data controller is Pérez Molina Piano Duo. You can contact us through the contact form available on this website.</p>

                <h3>2. Data we collect</h3>
                <p>We only process the data you voluntarily provide through the contact form: name, email address, subject and the content of the message.</p>

                <h3>3. Purpose</h3>
                <p>The data is used solely to handle and respond to your enquiry or request. It is not used for marketing communications and no profiling is carried out.</p>

                <h3>4. Legal basis</h3>
                <p>The legal basis for processing is your consent, given by ticking the acceptance box and submitting the form.</p>

                <h3>5. Retention</h3>
                <p>We keep the data for as long as necessary to manage your enquiry and, thereafter, for the periods required by law.</p>

                <h3>6. Recipients</h3>
                <p>To send the messages from the form we use an email service provider acting as a data processor. We do not share your data with third parties except where legally required.</p>

                <h3>7. Your rights</h3>
                <p>You may exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to us through the contact form. You also have the right to lodge a complaint with the Spanish Data Protection Agency.</p>

                <h3>8. Changes</h3>
                <p>We may update this policy to adapt it to regulatory or operational changes. The version in force will always be the one published on this page.</p>
            `,
        },
    },
};
