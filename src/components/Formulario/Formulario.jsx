//TODO: htmlFor sirve para cuando se de click en el label se active el input
//TODO: onChange es el evento change en js y se activa mientras se escriba en el input
//TODO: con el operador && aplicamos solo un condicional
import {useState, useEffect} from "react"
import Error from "../Error/Error"

const Formulario = ({pacientes, setPacientes}) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    //validacion del formulario
    if([nombre,propietario,email,fecha,sintomas].includes('')){
      setError(true)
      return;
    }
    //?lo cambiamos a false por si ya se llenaron todos los campos el mensaje desaparecera :D
    setError(false)

    /* construimos el objeto paciente */

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }
    
    /* no podemos usar push ya que siempre el estado se modifica solo con su funcion set entonces modificamos el arreglo original haciendo el straetoperator  */
    setPacientes([...pacientes,objetoPaciente])


    /* dejamos los state vacios para que cuando se envie el formulario los inputs se reseteen */
    setNombre('')
    setEmail('')
    setPropietario('')
    setSintomas('')
    setFecha('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text- text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
       onSubmit={handleSubmit}
       className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5">
        {/* si error es true se aplicara el mensaje sino no hara nada */}
        {error && 
          <Error>
            {/* agregamos la prop como children */}
            <p>Todos los campos son obligatorios</p>
          </Error>}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>

          <input 
          id="mascota"
          type="text"
          placeholder="nombre de la mascota" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={nombre}
          onChange={(e) => {
            //? vamos tomando el valor del input y lo añadimos al estado nombre
            setNombre(e.target.value)
            console.log('la variable cambio a', nombre)
          }}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario</label>

          <input 
          id="propietario"
          type="text"
          placeholder="nombre del propietario" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={propietario}
          onChange={(e) => {
            //? vamos tomando el valor del input y lo añadimos al estado propietario
            setPropietario(e.target.value)
            
          }}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email</label>

          <input 
          id="email"
          type="email"
          placeholder="Email contacto propietario" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={email}
          onChange={(e) => {
            //? vamos tomando el valor del input y lo añadimos al estado email
            setEmail(e.target.value)
            
          }}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta</label>

          <input 
          id="alta"
          type="date" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={fecha}
          onChange={(e) => {
            //? vamos tomando el valor del input y lo añadimos al estado propietario
            setFecha(e.target.value)
            
          }}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Sintomas</label>

          <textarea 
          id="sintomas" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Describe los sintomas"
          value={sintomas}
          onChange={(e) => {
            //? vamos tomando el valor del input y lo añadimos al estado propietario
            setSintomas(e.target.value)
            
          }}
          ></textarea>
        </div>

        <input type="submit"
        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" 
        value="Agregar Paciente"/>
      </form>
    </div>
  )
}

export default Formulario