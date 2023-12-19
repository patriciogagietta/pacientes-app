import { MdDelete } from "react-icons/md";

export const ListadoPacientes = ({pacientes, setPacientes}) => {

  const handleDeletePaciente = (index) => {
    const newArrayPacientes = pacientes.filter((_, posPaciente) => posPaciente !== index);

    localStorage.setItem('pacientes', JSON.stringify(newArrayPacientes));
    setPacientes(newArrayPacientes);
  };

  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black md:text-2xl lg:text-3xl text-xl text-center">Listado de Pacientes</h2>

      <div className= "mt-3">
        <ul>
          {pacientes.map((paciente, index) => (
            <div key={index} className="mb-4 p-4 bg-zinc-800 shadow-md rounded-lg relative">

              <button
                onClick={() => handleDeletePaciente(index)}
                className="bg-indigo-600 text-white p-2 rounded absolute right-4 top-4 hover:bg-indigo-700">
                <MdDelete />
              </button>

              <li className="text-white"><span className="text-white font-bold overflow-visible">Nombre:</span> {paciente.nombre}</li>
              <li className="text-white"><span className="text-white font-bold overflow-visible">Apellido:</span> {paciente.apellido}</li>
              <li className="text-white"><span className="text-white font-bold overflow-visible">Telefono:</span> {paciente.telefono}</li>
              <li className="text-white"><span className="text-white font-bold">Fecha:</span> {paciente.fecha}</li>
              <li className="text-white"><span className="text-white font-bold overflow-visible">Sintomas:</span> {paciente.sintomas}</li>
            </div>
          ))}
        </ul>
      </div>

    </div>
  )
}
