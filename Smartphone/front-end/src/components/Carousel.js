import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import CarouselIndicator from "./CarouselIndicator";
import CarouselItem from "./CarouselItem";
import CarouselControl from "./CarouselControl";

const Carousel = props => {
    const images = props.images;
    const id = props.id.toLowerCase().replace(/\s+/g, "-");
    let indicators = [];
    let items = [];
    for (let i = 0; i < images.length; i++) {
        indicators.push(<CarouselIndicator key={i} id={id} number={`${i}`}/>);
        items.push(<CarouselItem source={images[i]} alternate={`${props.id}: Slide ${i + 1}`} key={i} number={`${i}`}/>);
    }
    return (
        <section data-bs-ride="carousel" id={id} className="carousel slide">
            <span className="carousel-indicators">
                {indicators}
            </span>
            <section className="carousel-inner">
                {items}
            </section>
            <CarouselControl id={id} direction="prev"/>
            <CarouselControl id={id} direction="next"/>
        </section>
    );
};

export default Carousel;