import LinkedIn from "../assets/linkedin.png";
import Facebook from "../assets/facebook.png";

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://www.linkedin.com/in/linda-nelson-2667114/" target="_blank">
            <img src={LinkedIn} alt="Linked in" width="25px" height="25px" className="logo"/>
            </a>
            <a href="https://www.facebook.com/linda.m.nelson.98" target="_blank">
            <img src={Facebook} alt="Face book" width="25px" height="25px" className="logo"/>
            </a>
        </div>
    )
}