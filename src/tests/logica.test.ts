import { describe, it, expect } from 'vitest';
import { validarTarea } from '../logica';

describe('Pruebas de validación de tareas', () => {
  it('Debería retornar falso si la tarea incluye caracteres inválidos como un punto', () => {
    const resultado = validarTarea("Tarea.invalida", []);
    expect(resultado).toBe(false);
  });

  it('Debería retornar verdadero si la tarea es correcta', () => {
    const resultado = validarTarea("Estudiar React", []);
    expect(resultado).toBe(true);
  });
});