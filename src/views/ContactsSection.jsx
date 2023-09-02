import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreenButton,faMapLocationDot ,faEnvelopesBulk,faHourglassStart } from '@fortawesome/free-solid-svg-icons'
import EmailForm from '../components/sendMailForm/EmailForm.jsx';
import './css/Contacts.scss'
import  {ContactsContentByLanguage} from "./MultiLanguageContent/MultiLanguageContentGenerator.jsx";
import textSpliter from "./js/textSplitter.js";

function Contacts() {
    let content = ContactsContentByLanguage();
    function ContactSlot (icon, headerText , body) {
        let BodyText = textSpliter(body,  '\n');
        return (
            <div>
                <div className='contactSlotImg'>
                    <FontAwesomeIcon className='contactsFontAwesome' icon={icon} />
                </div>
                <div className='contactSlotText'>
                    <h4 className='contactSlotHeader'> {headerText} </h4>
                    <div> {BodyText} </div>
                </div>
            </div>
        )
    }

    return (
        <div id="contacts" className='contactsContainer'>
            <div  className="Contacts">
                <div className="FormContainer">
                    <EmailForm />
                </div>

                <div className='ContactsDetails'>  
                    <h3 className='ContactFormHeader'>
                        {content.ContactFormHeader}
                    </h3>

                    <div className='ContactsWrapper'> 
                        {ContactSlot(faMobileScreenButton ,content.phone,'+371 2000 6560 \n \n +371 2592 7333')}
                        {ContactSlot(faEnvelopesBulk ,content.mail,'ecowatt.riga@gmail.com')}
                        {ContactSlot(faMapLocationDot ,content.address , 'Salaspils iela 10 , Rīga, LV-1057')}

                        <div className='openTime'>
                            <div className='contactSlotImg'>
                                <FontAwesomeIcon className='contactsFontAwesome' icon={faHourglassStart} />
                            </div>
                            <div className='contactSlotText'>
                                <h4 className='contactSlotHeader'> {content.contactSlotHeader}</h4>
                                <p> {content.contactSlotBody}</p>
                            </div>
                        </div>
                    </div>       
                </div>
            </div>
 
            <div className='googleMapWrapper'>
                <iframe title="googleMap" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2177.6879834412475!2d24.179732500000004!3d56.9198765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eed20280ce101f%3A0x818462dbe93ec486!2sSalaspils%20iela%2010%2C%20Latgales%20priek%C5%A1pils%C4%93ta%2C%20R%C4%ABga%2C%20LV-1057!5e0!3m2!1sen!2slv!4v1688990444019!5m2!1sen!2slv"
                    style={{width: '80%', flex: '1 0 45%'}} 
                    height={320}  
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">     
                </iframe>
            </div>
        </div>
    )
}

export default Contacts;