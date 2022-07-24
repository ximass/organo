import './Select.css';

function Select (props) {

    const aoDigitar = (e) => {
        props.aoAlterar(e.target.value);
    }

    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select value={props.valor} onChange={aoDigitar} required={props.obrigatorio}>
                <option value=""></option>
                {
                    props.times.map((time) =>
                        <option key={time}>{time}</option>
                    )
                }
            </select>
        </div>
    )
}

export default Select;