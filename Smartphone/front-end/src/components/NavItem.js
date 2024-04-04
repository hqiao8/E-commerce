import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const NavItem = props => (
    <li className="nav-item">
        <a data-bs-toggle="tab" href={"#" + props.id.toLowerCase()} className={"nav-link" + (props.number === "0" ? " active" : "")}>
            {props.id}
        </a>
    </li>
);

export default NavItem;