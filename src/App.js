import { useState } from 'react';
import Formulario from './componentes/Formulario/Formulario';
import Time from './componentes/Time/Time';

function App() {

  const times = [
    {
      nome: 'Backend',
      corPrimaria: '#11d577',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Frontend',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    }
  ];

  const [usuarios, setUsuarios] = useState([]); 

  const cadastrar = (usuario) => {
    setUsuarios([...usuarios, usuario]);
  }

  return (
    <div className="App">
      <Formulario aoCadastrar={ usuario => cadastrar(usuario)} times={times.map(time => time.nome)}/>
      {
        times.map(time => 
          <Time key={time.nome} usuarios={usuarios.filter(usuario => usuario.time === time.nome)} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>
        )
      }
    </div>
  );
}

export default App;
