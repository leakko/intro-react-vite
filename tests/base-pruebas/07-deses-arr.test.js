import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {
    test('Debe devoler un string y un número', () => {
        const [letters, numbers] = retornaArreglo();

        expect( typeof letters ).toBe('string');
        expect( typeof numbers ).toBe( 'number' );
    });
});