import "./contacts.css"
import Telegram from "../../img/icons/Telegram.png";
import Gmail from "../../img/icons/Gmail.png";
import Smartphone from "../../img/icons/smartphone.png"
import { useRef } from "react";

const Contacts = () => {

    const formRef = useRef();

    const sendData = (e) => {
        e.preventDefault();
    }

    return (
        <div className="contacts">
            <div className="contacts-wrapper">
                <div className="contacts-left">
                    <h1 className="contacts-title">GET IN TOUCH</h1>
                    <div className="contacts-info-item">
                        <img src={Smartphone} alt="" className="contacts-icon"/>
                        +375 29 191-95-65
                    </div>
                    <div className="contacts-info-item">
                        <img src={Gmail} alt="" className="contacts-icon"/>
                        shpoisnik@gmail.com
                    </div>
                    <div className="contacts-info-item">
                        <img src={Telegram} alt="" className="contacts-icon"/>
                        @shponik
                    </div>
                </div>
                <div className="contacts-right">
                    <h1 className="contacts-title">GET IN TOUCH</h1>
                    <form ref={formRef} onSubmit={sendData}>
                        <input type="text" placeholder="Name" name="user_name"/>
                        <input type="text" placeholder="Subject" name="subject"/>
                        <input type="text" placeholder="Email" name="user_email"/>
                        <textarea rows="5" placeholder="Message" name="message"></textarea>
                        <button className="sumbit-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacts;