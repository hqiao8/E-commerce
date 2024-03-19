import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const CarouselIndicator = props => (
    <button type="button" data-bs-target={"#" + props.id} data-bs-slide-to={props.number} className={props.number === "0" ? "active" : ""}/>
);

export default CarouselIndicator;