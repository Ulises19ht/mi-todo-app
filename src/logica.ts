import type { TareaType } from "./components/Tarea";

// Actualizar estado completado de tarea
export function actualizarTareas(tareas: TareaType[], id: string) {
  return tareas.map((tarea) => {
    if (tarea.id === id) {
      return { ...tarea, isCompleted: !tarea.isCompleted };
    } else {
      return tarea;
    }
  });
}

// Validar que el título sea correcto y no se repita
export function validarTarea(titulo: string, tareas: TareaType[]) {
  const caracteres = [".", ",", "1"];
  let caracterInvalido = false;

  caracteres.forEach((c) => {
    if (titulo.includes(c)) {
      caracterInvalido = true;
    }
  });

  if (caracterInvalido) return false;
  if (typeof titulo !== "string") return false;

  let seRepite = false;
  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].titulo.toLowerCase() === titulo.toLowerCase()) {
      seRepite = true;
      break;
    }
  }

  if (seRepite) return false;

  return true;
}