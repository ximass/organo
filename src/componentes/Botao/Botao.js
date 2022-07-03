import './Botao.css';

function Botao (props) {
    return (
        <div className="botao">
            <button>{props.texto}</button>
        </div>
    )
}

export default Botao;