import email from "../assets/email.png"
import QR from '../assets/lindaqr.png'

export default function Info() {
    return (
        <div className="info-section">
            <span>
                <h1>Linda Nelson</h1>
                <p>Director , Business Development & Marketing</p>
                <p>at Memorial Hermann</p>
                <p>The Woodlands Medical Center</p>
                
            </span>
            <a href="mailto:Linda.Nelson@memorialhermann.org">
            <button className="btn">
            <img src={email} alt="email" width="17px" height="17px" className="email" />Email
            </button>
            </a>
            <img src={QR} alt="QR code" className="qr-code" />
        </div>
    )
}