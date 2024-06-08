import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const NavItem = props => {
    const id = props.id;
    return (
        <li className="nav-item">
            <a data-bs-toggle="tab" href={"#" + id.toLowerCase()} className={"nav-link" + (props.number === "0" ? " active" : "")}>
                {id}
            </a>
        </li>
    );
};

export default NavItem;