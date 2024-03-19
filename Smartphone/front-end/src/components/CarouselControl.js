import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const CarouselControl = props => (
    <button type="button" data-bs-target={"#" + props.id} data-bs-slide={props.direction} className={"carousel-control-" + props.direction}>
        <span className={"carousel-control-" + props.direction + "-icon"}/>
    </button>
);

export default CarouselControl;