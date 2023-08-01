
import {useState} from "react"

// Componentes
import Header from './components/Header/Header'
import Formulario from './components/Formulario/Formulario'
import ListadoPacientes from './components/ListadoPacientes/ListadoPacientes'




import './App.css'

function App() {

  const [pacientes, setPacientes] = useState([]);



  return (
    <div className='container mx-auto mt-20'>
      <Header
        
        
        />
      <div className='mt-12 md:flex'>
        <Formulario 
        pacientes={pacientes}
        setPacientes ={setPacientes}
        
        />
        <ListadoPacientes pacientes ={pacientes}/>
        
      </div>
      
    
    </div>
      
    
   
  )
}

export default App
