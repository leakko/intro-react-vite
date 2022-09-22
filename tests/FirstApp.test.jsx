import { render } from "@testing-library/react";
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {

    test('Debe mostrar el título en un h1', () => {
        const title = 'Hola, Soy Goku';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toBe(title);
        
        expect( getByTestId('test-title').innerHTML ).toContain(title);

    })

    test('Debe mostrar el subtitulo enviado por props', () => {
        const title = 'Hola, Soy Goku';
        const subTitle = 'Soy un subtitulo';
        const { getByText } = render(
            <FirstApp
              title={ title }
              subTitle={ subTitle }
            /> 
        );
        
        expect( getByText(subTitle) ).toBeTruthy();
    })
});