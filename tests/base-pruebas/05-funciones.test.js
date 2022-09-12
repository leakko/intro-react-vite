import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe devolver el objeto por defecto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(user).toEqual(testUser);
    });

    test('getUsuarioActivo debe devolver un objeto', () => {
        const name = 'Fernando';
        const user = getUsuarioActivo(name);

        expect( user ).toStrictEqual({
            uid: 'ABC567',
            username: name
        });
    })
});