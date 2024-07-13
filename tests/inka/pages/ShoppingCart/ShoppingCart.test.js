import '@testing-library/jest-dom';
import { renderHook,act } from '@testing-library/react';
import { useInkaStore } from '../../../../src/hooks/useInkaStore';
import { inkaApi } from '../../../../src/api/inkaApi';
import Swal from 'sweetalert2';

jest.mock('../../../../src/api/inkaApi.js');
jest.mock('sweetalert2');


describe('Pruebas en ShoppingCart Component', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  })

  test('PayCartShopping success', async() => {

    const {result} = renderHook(() => useInkaStore());
    const data = {some: 'data'};
    const token = 'token';
    localStorage.setItem('token', token);

    inkaApi.post.mockResolvedValueOnce({data : {message: 'Compra realizada'}, status: 200});

    await act(async () => {
      const status = await result.current.payCartShopping(data);
      expect(status).toBe(200);
    });

    expect(inkaApi.post).toHaveBeenCalledWith('/sales/', data);
    expect(Swal.fire).toHaveBeenCalledWith('Compra realizada', 'Compra realizada', 'success');

  });

  test('PayCartShopping error', async() => {
    const {result} = renderHook(() => useInkaStore());
    const data = {some: 'data'};
    const token = 'token';
    localStorage.setItem('token', token);

    inkaApi.post.mockRejectedValueOnce({
      response: {
        data: {
          message: 'Error'
        }
      }
    });


    await act(async () => {
      await result.current.payCartShopping(data);
    })
    expect(inkaApi.post).toHaveBeenCalledWith('/sales/', data);
    expect(Swal.fire).toHaveBeenCalledWith('Error', 'Error', 'error');
  });

});
