import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Card from "./Card";

const TabPane = props => (
    <section id={props.id} className={"tab-pane " + (props.number === "0" ? "active" : "fade")}>
        <section className="d-flex flex-wrap">
            {props.products.map((product, index) => <Card product={product} key={index}/>)}
        </section>
    </section>
);

export default TabPane;