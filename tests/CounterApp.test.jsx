import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from '../src/CounterApp';

describe('CounterApp component', () => {

    const initialValue = 100;

    test('Debe hacer mathc con el snapshot', () => {
        const { container } = render(<CounterApp value={initialValue} />);
        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar el valor incial de 100', () => {
        render(<CounterApp value={initialValue} />);
        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain(initialValue.toString());
    });

    test('Debe incrementar con el botón +1', () => {
        render(<CounterApp value={ initialValue } />);
        fireEvent.click( screen.getByText('+1') );
        expect( Number(screen.getByRole('heading', { level: 2 }).innerHTML) ).toBe(initialValue + 1);
    });

});