import "bootstrap/dist/css/bootstrap.css";
import {Link} from "react-router-dom";

const Buttons = props => [
    <button type="submit" className="my-1 w-100 btn btn-primary">
        {props.major}
    </button>,
    <Link to={`/${props.minor.toLowerCase()}`} className="my-1 w-50 btn btn-primary">
        {props.minor}
    </Link>,
    <Link to="/" className="my-1 w-50 btn btn-danger">
        Cancel
    </Link>
];

export default Buttons;