import {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Carousel from "./Carousel";
import Select from "./Select"

const Card = props => {
    const product = props.product;
    const model = product.model;
    const id = model.toLowerCase().replace(/\s+/g, "-");
    const [i, setI] = useState(0);
    const [j, setJ] = useState(0);
    let price = product.prices[j];
    return [
        <figure key="card" className="card w-50">
            <img src={product.image} alt={model} className="card-img-top img-thumbnail w-100"/>
            <figcaption className="card-body">
                <h6 className="card-title">
                    {model}
                </h6>
                <button type="button" data-bs-toggle="modal" data-bs-target={`#${id}`} className="btn btn-primary">
                    Details
                </button>
            </figcaption>
        </figure>,
        <section key="modal" id={id} className="modal fade">
            <section className="modal-dialog modal-fullscreen">
                <section className="modal-content">
                    <form className="modal-body">
                        <Carousel images={product.images[i]} id={`${model} Carousel`}/>
                        <Select options={product.colours} label="Colours" output="" id={`${model} Colours`} setIndex={setI} name=""/>
                        <Select options={product.storages} label={`Storages-$${price}`} output={price} id={`${model} Storages`} setIndex={setJ} name=""/>
                        <button type="submit" className="m-1 w-25 btn btn-primary">
                            Add
                        </button>
                        <button type="button" data-bs-dismiss="modal" className="m-1 w-25 btn btn-danger">
                            Cancel
                        </button>
                    </form>
                </section>
            </section>
        </section>
    ];
};

export default Card;