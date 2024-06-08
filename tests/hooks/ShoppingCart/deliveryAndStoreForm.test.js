/* eslint-disable no-undef */
import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../../src/hooks/useForm';

describe('Pruebas en dellivery o recojo en tienda', () => {

  const initialForm = {
    address: '',
    contact: '',
    dni: '',
    phone: '',
  };

  test('La direccion debe ser hasta 100 caracteres y no debe ser vacia.', () => {

    const newDistrict = "Av. Los Pinos 123 - San Juan de Lurigancho";

    const { result } = renderHook(() => useForm(initialForm));

    const {onInputChange} = result.current;

    act(() => {
      onInputChange({ target: { name: 'district', value: newDistrict} });
    });

    expect(result.current.district).not.toBe('');

    expect(result.current.district.length).toBeLessThanOrEqual(100);

  });

  test('El nombre del contacto debe ser de hasta 50 caracteres.', () => {

    const newContact = "Luis Alejandro Soto";

    const { result } = renderHook(() => useForm(initialForm));

    const {onInputChange} = result.current;

    act(() => {
      onInputChange({ target: { name: 'contact', value: newContact} });
    });


    expect(result.current.contact.length).toBeLessThanOrEqual(50);

  });

  test('El DNI debe tener 8 caracteres y debe ser numerico', () => {

    const newDni = '12345678';

    const { result } = renderHook(() => useForm(initialForm));

    const {onInputChange} = result.current;

    act(() => {
      onInputChange({ target: { name: 'dni', value: newDni} });
    });

    expect(result.current.dni).toHaveLength(8);
    expect(result.current.dni).toMatch(/^\d+$/);

  });

  test('El numero de telefono debe tener 9 digitos y debe ser numerico', () => {

    const newPhone = '123456789';

    const { result } = renderHook(() => useForm(initialForm));

    const {onInputChange} = result.current;

    act(() => {
      onInputChange({ target: { name: 'phone', value: newPhone} });
    });

    expect(result.current.phone).toHaveLength(9);
    expect(result.current.phone).toMatch(/^\d+$/);

  });

});
