import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const Select = props => {
    const id = props.id.replace(/\s+/g, "-");
    const options = props.options;
    return (
        <section className="m-1 form-floating">
            <select id={id} onChange={event => props.setIndex(options.indexOf(event.target.value))} className="form-select" name={props.name}>
                {options.map(option => <option value={option} key={option}>{option}</option>)}
            </select>
            <label htmlFor={id} className="form-label">
                {props.label}
                <output name="">
                    {props.ouput}
                </output>
            </label>
        </section>
    );
};

export default Select;