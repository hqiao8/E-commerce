import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const CarouselControl = props => {
    const direction = props.direction;
    return (
        <button type="button" data-bs-slide={direction} data-bs-target={`#${props.id}`} className={`carousel-control-${direction}`}>
            <span className={`bg-primary carousel-control-${direction}-icon`}/>
        </button>
    );
};

export default CarouselControl;