import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import CarouselIndicator from "./CarouselIndicator";
import CarouselItem from "./CarouselItem";
import CarouselControl from "./CarouselControl";

const Carousel = () => {
    let indicators = [];
    let items = [];
    const images = [
        [
            "iphone15Pro",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-1-202309?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693010533609"
        ],
        [
            "iphone15",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-model-unselect-gallery-1-202309?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692810665888"
        ],
        [
            "iphone14",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-model-unselect-gallery-1-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660689596976"
        ]
    ];
    for (let i = 0; i < images.length; i++) {
        indicators.push(<CarouselIndicator id="carousel" number={i.toString()}/>);
        items.push(<CarouselItem source={images[i][1]} alternate={"Carousel" + images[i][0]} number={i.toString()}/>);
    }
    return (
        <section data-bs-ride="carousel" className="carousel slide" id="carousel">
            <span className="carousel-indicators">
                {indicators}
            </span>
            <section className="carousel-inner">
                {items}
            </section>
            <CarouselControl id="carousel" direction="prev"/>
            <CarouselControl id="carousel" direction="next"/>
        </section>
    );
};

export default Carousel;