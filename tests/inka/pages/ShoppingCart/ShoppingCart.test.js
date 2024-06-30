import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ShoppingCart } from '../../../../src/inka/pages/ShoppingCart/ShoppingCart';
import { store } from '../../../../src/store/store';

jest.mock('../../../../src/shared/assets/visaAndMasLogo.png', () => 'visaAndMasLogo.png');
jest.mock('../../../../src/shared/assets/plinAndYapeIcon.png', () => 'plinAndYapeIcon.png');

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

const mockPayCartShopping = jest.fn();
jest.mock('../../../../src/hooks/useInkaStore.js', () => ({
  useInkaStore: () => ({
    payCartShopping: mockPayCartShopping,
  }),
}));

describe('Pruebas en ShoppingCart Component', () => {

  beforeEach(() => {
    mockPayCartShopping.mockClear();
  });

  test('Debe mostrar el componente correctamente con productos y opciones seleccionadas', () => {
    const mockState = {
      shoppingCart: {
        cartItems: [
          {
            id: 1,
            img: 'path/to/image.png', 
            design: 'path/to/design.png', 
            name: 'Producto de prueba',
            color: 'Rojo',
            quantity: 1,
            price: 10.0,
            total: 10.0
          }
        ],
        cartTotalQuantity: 1,
        cartTotalAmount: 10.0
      },
      auth: {
        id: 'usuario123'
      }
    };

    const mockDispatch = jest.fn();

    useSelector.mockImplementation(callback => callback(mockState));

    useDispatch.mockReturnValue(mockDispatch);

    const { getByText, getByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ShoppingCart />
        </MemoryRouter>
      </Provider>
    );

    const buttonTypeEntrega = screen.getByRole('button', { name: /Delivery/i });
    const buttonTypePayment = screen.getByRole('button', { name: /Tarjetas/i }); 

    const deliveryButton = buttonTypeEntrega;
    fireEvent.click(deliveryButton);
    expect(deliveryButton).toHaveClass('bg-[#31241E]');

    const tarjetaButton = buttonTypePayment;
    fireEvent.click(tarjetaButton);
    expect(tarjetaButton).toHaveClass('bg-[#31241E]');

    expect(getByText('Producto de prueba')).toBeInTheDocument();

  });

});
