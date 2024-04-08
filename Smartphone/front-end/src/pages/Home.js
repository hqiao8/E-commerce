import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Tabs from "../components/Tabs";

const Home = () => {
    const images = [
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-1-202309?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693010533609",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-model-unselect-gallery-1-202309?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692810665888",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-model-unselect-gallery-1-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660689596976"
    ];
    return (
        <div>
            <Header/>
            <Carousel id="Carousel" images={images}/>
            <Tabs/>
        </div>
    );
}

export default Home;