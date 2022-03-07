import "./contacts.css"
import Telegram from "../../img/icons/Telegram.png";
import Gmail from "../../img/icons/Gmail.png";
import Smartphone from "../../img/icons/smartphone.png"
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useState } from "react";

const Contacts = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false);

    const sendData = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_h8fuxnx', 'template_cdto75o', formRef.current, 'I-sVFmjXGCpl4NZAv')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        }).finally (() => {
            e.target.reset(); 
        })
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
                        <div className="message">{done && "Thank you! your message has been sent"}</div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacts;