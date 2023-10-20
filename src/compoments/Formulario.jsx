import { useState } from 'react'

export const Formulario = ({setPacientes,pacientes}) => {

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [telefono, setTelefono] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    /// validacion de formulario
    if ([nombre, apellido, telefono, fecha, sintomas].includes('')) {
      setError(true)
     
    } else {
      setError(false)
      setPacientes([
        ...pacientes, 
        {
        'nombre': nombre,
        'apellido': apellido,
        'telefono': telefono,
        'fecha': fecha,
        'sintomas': sintomas
      }])

      // reseteo los valores de los estados
      setNombre('');
      setApellido('');
      setTelefono('');
      setFecha('');
      setSintomas('');
    }
  }
  


  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className="font-black md:text-2xl text-xl text-center">Seguiminetos Pacientes</h2>

      <form 
      onSubmit={handleSubmit}
      className="bg-zinc-800 shadow-md rounded-lg pt-5 pb-8 px-5 mt-3">

        <div>
          <label className="block text-white uppercase font-bold md:text-base text-xs">Nombre Paciente:</label>
          <input
            id='nombre'
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400"
            type="text"
            placeholder="Nombre Paciente *"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
        </div>

        <div className='mt-3'>
          <label className="block text-white uppercase font-bold md:text-base text-xs">Apellido Paciente:</label>
          <input
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400"
            type="text"
            placeholder="Apellido Paciente *"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            />
        </div>
        <div className='mt-3'>
          <label className="block text-white uppercase font-bold md:text-base text-xs">Telefono Paciente:</label>
          <input
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400"
            type="text"
            placeholder="Telefono Paciente *"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            />
        </div>
        <div className='mt-3'>
          <label className="block text-white uppercase font-bold md:text-base text-xs">Fecha:</label>
          <input
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400"
            type="date"
            placeholder="Fecha *"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            />
        </div>
        <div className='mt-3'>
          <label className="block text-white uppercase font-bold md:text-base text-xs">Sintomas:</label>
          <textarea
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 resize-none h-36"
            type="text"
            placeholder="Sintomas *"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            />
        </div>

        <button
          type='submit'
          className="bg-indigo-600 w-full mt-5 p-2 uppercase text-white font-bold hover:bg-indigo-700 md:text-base text-xs">
          Agregar Paciente
        </button>

        {error && <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-8" role="alert"> Todos los campos son obligatorios *</p>}
      </form>
    </div>
  )
}
