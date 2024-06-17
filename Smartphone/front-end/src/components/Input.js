import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const Input = props => {
    const id = props.id.toLowerCase().replace(/\s+/g, "-");
    return (
        <section className="form-floating">
            <input type={props.type} id={id} onChange={event => props.setInput(event.target.value)} className="my-1 form-control" required/>
            <label htmlFor={id} className="form-label">
                {props.id}
            </label>
        </section>
    );
};

export default Input;