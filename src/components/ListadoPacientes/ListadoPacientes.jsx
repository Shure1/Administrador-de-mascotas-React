//TODO: overflow-y-scroll sirve para los contenedores que tienen una altura que exceden la altura de la pag, coloca una barra lateral para que se deslize y no sobrepase la altura del contenedor

//TODO: md:h-screen fuerza a tener el 100% disponible de la altura del contenedor, con esto puesto podemos usar el overflow-y-scroll

import Paciente from "../Pacientes/Paciente.jsx"


const ListadoPacientes = ({pacientes}) => {
  console.log(pacientes)
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">Administra tus{' '}<span className="text-indigo-600 font-bold">Pacientes y citas</span></p>
      { pacientes.map( paciente  => (
        <Paciente paciente={paciente}/>
        
      ))}
      
      

      

      
    </div>
    

   
  )
}

export default ListadoPacientes