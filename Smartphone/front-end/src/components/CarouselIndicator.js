import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const CarouselIndicator = props => {
    const number = props.number;
    return (
        <button type="button" data-bs-slide-to={number} data-bs-target={`#${props.id}`} className={`bg-primary${number === "0" ? " active" : ""}`}/>
    );
};

export default CarouselIndicator;