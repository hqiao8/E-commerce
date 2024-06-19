import "bootstrap/dist/css/bootstrap.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faLinkedinIn, faXTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
    <footer className="bg-info p-3">
        <button type="button" className="m-4 btn btn-outline-primary rounded-pill">
            <FontAwesomeIcon icon={faFacebookF}/>
        </button>
        <button type="button" className="m-4 btn btn-outline-primary rounded-pill">
            <FontAwesomeIcon icon={faLinkedinIn}/>
        </button>
        <button type="button" className="m-4 btn btn-outline-primary rounded-pill">
            <FontAwesomeIcon icon={faXTwitter}/>
        </button>
        <button type="button" className="m-4 btn btn-outline-primary rounded-pill">
            <FontAwesomeIcon icon={faYoutube}/>
        </button>
    </footer>
);

export default Footer;