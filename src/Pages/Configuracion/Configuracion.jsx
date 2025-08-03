import { SeccionCuentas } from "./SeccionCuentas";
import { SeccionMascota } from "./SeccionMascota";
import './Configuracion.css';

const PaginaConfiguracion = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Opciones de Configuración</h2>
      
      <SeccionCuentas />
      <SeccionMascota />
    </div>
  );
};

export default PaginaConfiguracion;