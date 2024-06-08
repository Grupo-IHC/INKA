/* eslint-disable no-undef */
import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas en useForm', () => {

  const initialForm = {
    nroDocument: '',
    name: '',
    lastName: '',
    email: '',
    password: '',
  };

  test('El correo debe ser unicamente gmail', () => {

    const newEmail = "jhoneber31@gmail.com";

    const { result } = renderHook(() => useForm(initialForm));

    const {onInputChange} = result.current;

    act(() => {
      onInputChange({ target: { name: 'email', value: newEmail} });
    });

    expect(result.current.email).toMatch(/@gmail\.com$/);

  });

  test('El DNI debe tener 8 caracteres y debe ser numerico', () => {

    const newDni = '12345678';

    const { result } = renderHook(() => useForm(initialForm));

    const {onInputChange} = result.current;

    act(() => {
      onInputChange({ target: { name: 'nroDocument', value: newDni} });
    });

    expect(result.current.nroDocument).toHaveLength(8);
    expect(result.current.nroDocument).toMatch(/^\d+$/);

  });

  test('El nombre debe tener maximo 50 caracteres', () => {

    const newName = 'Jhon Eber';

    const { result } = renderHook(() => useForm(initialForm));

    const {onInputChange} = result.current;

    act(() => {
      onInputChange({ target: { name: 'name', value: newName} });
    });

    expect(result.current.name.length).toBeLessThanOrEqual(50);

  });

  test('El apellido debe tener maximo 50 caracteres', () => {

    const newLastname = 'Huarcaya Crisostomo';

    const { result } = renderHook(() => useForm(initialForm));

    const {onInputChange} = result.current;

    act(() => {
      onInputChange({ target: { name: 'lastName', value: newLastname} });
    });

    expect(result.current.lastName.length).toBeLessThanOrEqual(50);

  });

  test('La contraseña debe ser mayor o igual a 6', () => {

    const newPassword = 'Password123';

    const { result } = renderHook(() => useForm(initialForm));

    const {onInputChange} = result.current;

    act(() => {
      onInputChange({ target: { name: 'password', value: newPassword} });
    });

    expect(result.current.password.length).toBeGreaterThanOrEqual(6);

  });
});
