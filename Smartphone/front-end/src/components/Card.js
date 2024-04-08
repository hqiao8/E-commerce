import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Carousel from "./Carousel";

const Card = props => {
    const product = props.product;
    const model = product.model;
    const id = model.replace(/\s+/g, "-");
    return [
        <figure className="card w-50">
            <img src={product.image} alt={model} className="card-img-top img-thumbnail w-100"/>
            <figcaption className="card-body">
                <h6 className="card-title">
                    {model}
                </h6>
                <button type="button" data-bs-toggle="modal" data-bs-target={"#" + id} className="btn btn-primary">
                    Details
                </button>
            </figcaption>
        </figure>,
        <section className="modal fade" id={id}>
            <section className="modal-dialog modal-fullscreen">
                <section className="modal-content">
                    <section className="modal-body">
                        <Carousel id={model + " Carousel"} images={product.images[0]}/>
                        <button type="button" data-bs-dismiss="modal" className="btn btn-danger">
                            Cancel
                        </button>
                    </section>
                </section>
            </section>
        </section>
    ];
};

export default Card;