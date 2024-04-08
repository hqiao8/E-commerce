import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const CarouselControl = props => {
    const direction = props.direction;
    return (
        <button type="button" data-bs-target={"#" + props.id} data-bs-slide={direction} className={"carousel-control-" + direction}>
            <span className={"carousel-control-" + direction + "-icon"}/>
        </button>
    );
};

export default CarouselControl;