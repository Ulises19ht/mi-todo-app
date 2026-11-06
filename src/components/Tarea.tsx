export type TareaType = {
  id: string;
  titulo: string;
  isCompleted: boolean;
};

interface TareaProps {
  infoTarea: TareaType;
  cambiarCompletado: (id: string) => void;
  borrarTarea: (id: string) => void;
}

export default function Tarea({ infoTarea, cambiarCompletado, borrarTarea }: TareaProps) {
  return (
    <li>
      {/* Checkbox de estado de tarea */}
      <input 
        type="checkbox" 
        checked={infoTarea.isCompleted} 
        onChange={() => cambiarCompletado(infoTarea.id)} 
      />
      
      {/* Título y texto de tarea */}
      <span style={{ textDecoration: infoTarea.isCompleted ? 'line-through' : 'none' }}>
        {infoTarea.titulo}
      </span>

      {/* Botón borrar tarea */}
      <span 
        onClick={() => borrarTarea(infoTarea.id)} 
        style={{ color: 'red', cursor: 'pointer', marginLeft: '10px' }}
      >
        x
      </span>
    </li>
  );
}