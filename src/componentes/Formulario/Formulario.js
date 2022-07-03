import { useState } from 'react';
import Botao from '../Botao/Botao';
import Campo from '../Campo/Campo';
import Select from '../Select/Select';
import './Formulario.css';

function Formulario (props) {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const salvar = function (e) {
        e.preventDefault();

        props.aoCadastrar({
            nome, cargo, imagem, time
        });

        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return (
        <section className="formulario">
            <form onSubmit={salvar}>
                <h2>Preencha os dados</h2>
                <Campo valor={nome} aoAlterar={valor => setNome(valor)} label="Nome" placeholder="Digite o seu nome" obrigatorio={true}/>
                <Campo valor={cargo} aoAlterar={valor => setCargo(valor)} label="Cargo" placeholder="Digite o seu cargo" obrigatorio={true}/>
                <Campo valor={imagem} aoAlterar={valor => setImagem(valor)} label="Imagem" placeholder="Digite o endereço da imagem" obrigatorio={true}/>
                <Select valor={time} aoAlterar={valor => setTime(valor)} label="Time" times={props.times} obrigatorio={true}></Select>
                <Botao texto="Criar card"></Botao>
            </form>
        </section>
    )
}

export default Formulario;