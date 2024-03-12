import 'bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const Header = () => (
    <header className="bg-info p-3 clearfix">
        <span className="float-start p-3 display-5 text-success">
            SMARTphone
        </span>
        <span className="float-end p-2">
            <button type="button" className="m-2 btn btn-outline-primary rounded-pill">
                Login
            </button>
            <button type="button" className="m-2 btn btn-outline-primary rounded-pill">
                <FontAwesomeIcon icon={faShoppingCart}/>
                <span className="ms-2 badge bg-warning p-1">
                    0
                </span>
            </button>
        </span>
    </header>
);

export default Header;