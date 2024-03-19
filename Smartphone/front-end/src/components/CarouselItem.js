import "bootstrap/dist/css/bootstrap.css";

const CarouselItem = props => (
    <figure className={"carousel-item" + (props.number === "0" ? " active" : "")}>
        <img src={props.source} alt={props.alternate} className="w-100"/>
    </figure>
);

export default CarouselItem;