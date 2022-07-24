import Usuario from '../Usuario/Usuario';
import './Time.css';

function Time (props) {
    return (
        props.usuarios.length > 0 &&
        <section className="time" style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className="usuarios">
                {
                    props.usuarios.map(usuario => 
                        <Usuario corFundo={props.corPrimaria} key={usuario.nome} nome={usuario.nome} cargo={usuario.cargo} imagem={usuario.imagem}/>
                    )
                }
            </div>
        </section>
    )
}

export default Time;