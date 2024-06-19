import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import products from "../data/products";
import NavItem from "./NavItem";
import TabPane from "./TabPane";

const Tabs = () => {
    let navItems = [];
    let tabPanes = [];
    for (let i = 0; i < products.length; i++) {
        let key = Object.keys(products[i])[0];
        navItems.push(<NavItem key={i} id={key} number={`${i}`}/>);
        tabPanes.push(<TabPane products={Object.values(products[i])[0]} key={i} id={key} number={`${i}`}/>);
    }
    return (
        <section className="p-1">
            <ul className="nav nav-justified nav-tabs nav-pills">
                {navItems}
            </ul>
            <section className="tab-content">
                {tabPanes}
            </section>
        </section>
    );
};

export default Tabs;