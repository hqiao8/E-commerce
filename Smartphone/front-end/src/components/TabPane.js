import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Card from "./Card";

const TabPane = props => {
    const products = props.products;
    let cards = [];
    for (let i = 0; i < products.length; i++) {
        cards.push(<Card product={products[i]}/>);
    }
    return (
        <section className={"tab-pane " + (props.number === "0" ? "active" : "fade")} id={props.id}>
            <section className="d-flex flex-wrap">
                {cards}
            </section>
        </section>
    );
};

export default TabPane;