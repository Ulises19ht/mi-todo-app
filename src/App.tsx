import { useState } from "react";
import Tarea, { type TareaType } from "./components/Tarea";
import { actualizarTareas, validarTarea } from "./logica";

export default function App() {
  const [tareas, setTareas] = useState<TareaType[]>([]);
  const [texto, setTexto] = useState('');

  // Cambiar completado usando logica.ts
  function cambiarCompletado(id: string) {
    const tareasActualizadas = actualizarTareas(tareas, id);
    setTareas(tareasActualizadas);
  }

  // Borrar tarea
  function borrarTarea(id: string) {
    const tareasFiltradas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasFiltradas);
  }

  // Contar pendientes
  function checarPendientes() {
    let arreglo = tareas.filter((t) => t.isCompleted == false);
    return arreglo.length;
  }

  // Agregar tarea validando con logica.ts
  function agregarTarea() {
    const esValida = validarTarea(texto, tareas);
    if (!esValida) {
      alert("Tarea inválida o repetida");
      return;
    }

    setTareas([
      ...tareas,
      {
        id: crypto.randomUUID().toString(),
        titulo: texto,
        isCompleted: false,
      },
    ]);
    setTexto('');
  }

  return (
    <main>
      <h1>Tareas</h1>
      <h2>Pendientes: {checarPendientes()}</h2>

      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <button onClick={agregarTarea}>Agregar tarea</button>

      <ul>
        {tareas.map((t) => (
          <Tarea
            key={t.id}
            infoTarea={t}
            cambiarCompletado={cambiarCompletado}
            borrarTarea={borrarTarea}
          />
        ))}
      </ul>
    </main>
  );
}