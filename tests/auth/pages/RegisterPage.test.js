import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { RegisterPage } from "../../../src/auth/pages/RegisterPage";
import { store } from "../../../src/store/store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import Swal from 'sweetalert2';

const mockRegisterUser = jest.fn();
jest.mock('../../../src/hooks/useAuthStore.js', () => ({
  useAuthStore: () => ({
    registerUser: mockRegisterUser
  })
}));

jest.mock('sweetalert2', () => ({
  fire: jest.fn()
}));

describe('Pruebas en RegisterPage', () => {
  beforeEach(() => {
    mockRegisterUser.mockClear();
    Swal.fire.mockClear();
  });

  test('debe de mostrar el componente correctamente y el mensaje de éxito', async () => {
    const successMessage = 'Por favor, verifica tu correo electrónico y haz clic en el enlace de activación para completar tu registro. Revisa tu carpeta de spam.';
    mockRegisterUser.mockImplementation(async () => {
      Swal.fire('Usuario registrado', successMessage, 'success');
    })

    render(
      <Provider store={store}>
        <MemoryRouter>
          <RegisterPage />
        </MemoryRouter>
      </Provider>
    );

    const emailInput = screen.getByLabelText(/Email/i);
    const nroDocumentInput = screen.getByLabelText(/Nro. Documento/i);
    const firstNameInput = screen.getByLabelText(/Nombres/i);
    const lastNameInput = screen.getByLabelText(/Apellidos/i);
    const passwordInput = screen.getByLabelText(/Contraseña/i);
    const repeatPasswordInput = screen.getByLabelText(/Repite la contrseña/i);
    const submitButton = screen.getByRole('button', { name: /Registrar/i });

    fireEvent.change(emailInput, { target: { value: 'jhoneber31@gmail.com' } });
    fireEvent.change(nroDocumentInput, { target: { value: '72094320' } });
    fireEvent.change(firstNameInput, { target: { value: 'Jhon' } });
    fireEvent.change(lastNameInput, { target: { value: 'Eber' } });
    fireEvent.change(passwordInput, { target: { value: '12345678' } });
    fireEvent.change(repeatPasswordInput, { target: { value: '12345678' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockRegisterUser).toHaveBeenCalledWith({
        email: 'jhoneber31@gmail.com',
        document_number: '72094320',
        first_name: 'Jhon',
        last_name: 'Eber',
        password: '12345678',
      });
    });

    await waitFor(() => {
      expect(Swal.fire).toHaveBeenCalledWith('Usuario registrado', successMessage, 'success');
    });


  });
});
