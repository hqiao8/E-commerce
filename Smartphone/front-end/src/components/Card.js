import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const Card = props => {
    return [
        <figure className="card w-50">
            <img src={props.product.image} alt={props.product.model} className="card-img-top img-thumbnail w-100"/>
            <figcaption className="card-body">
                <h6 className="card-title">
                    {props.product.model}
                </h6>
                <button type="button" data-bs-toggle="modal" data-bs-target={"#" + props.product.model.replace(/\s+/g, "")} className="btn btn-primary">
                    Details
                </button>
            </figcaption>
        </figure>,
        <section className="modal fade" id={props.product.model.replace(/\s+/g, "")}>
            <section className="modal-dialog modal-fullscreen">
                <section className="modal-content">
                    <section className="modal-body">
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