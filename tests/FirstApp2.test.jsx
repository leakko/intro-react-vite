import { render, screen } from "@testing-library/react";
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {

    const title = 'Hola, Soy Goku';
    const subTitle = 'Soy un subtítulo';

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<FirstApp title={title} />)
        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar el mensaje "Hola, Soy Goku"', () => {
        render(<FirstApp title={title} />)
        expect( screen.getByText ).toBeTruthy();
    })

    test('Debe mostrar el título en un h1', () => {
        render(<FirstApp title={title} />)
        expect( screen.getByRole('heading', {level: 1}).innerHTML ).toContain( title );
    });

    test('Debe mostrar el subtitulo enviado por props', () => {
        render(
            <FirstApp
              title={ title }
              subTitle={ subTitle }
            /> 
        );

        expect( screen.getByText(subTitle).innerHTML ).toContain(subTitle);

    })
});