import {useState} from 'react'
import { Formulario } from './compoments/Formulario'
import { Header } from './compoments/Header'
import { ListadoPacientes } from './compoments/ListadoPacientes'

function App() {

  const [pacientes, setPacientes] = useState(() => JSON.parse(window.localStorage.getItem('pacientes') || [] ));

  return (
    <div className='container mx-auto mt-14'>
      <Header/>

      <div className='my-14 mx-5 flex flex-col md:flex-row gap-10'>
        <Formulario pacientes={pacientes} setPacientes={setPacientes} />
          
        <ListadoPacientes pacientes={pacientes} setPacientes={setPacientes}/>
      </div>
        
    </div>
  )
}

export default App