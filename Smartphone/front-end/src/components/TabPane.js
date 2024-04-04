import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Card from "./Card";

const TabPane = props => {
    let cards = [];
    for (let i = 0; i < props.products.length; i++) {
        cards.push(<Card product={props.products[i]}/>);
    }
    return (
        <section className={"tab-pane " + (props.number === "0" ? "active" : "fade")} id={props.id.toLowerCase()}>
            <section className="d-flex flex-wrap">
                {cards}
            </section>
        </section>
    );
};

export default TabPane;