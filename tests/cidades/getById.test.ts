import { testServer } from '../jest.setup';
import { StatusCodes } from 'http-status-codes';

describe('cidades - getById', () => {
    
    it('Recupera registro', async () => {
        const cidadeCriada = await testServer.post('/cidades').send({
            nome: 'Cidade Teste',
            estado: 'Estado Teste'
        });

        expect(cidadeCriada.statusCode).toEqual(StatusCodes.CREATED);

        const res1 = await testServer.get(`/cidades/${cidadeCriada.body}`);
        
        expect(res1.statusCode).toEqual(StatusCodes.OK);
        expect(res1.body).toMatchObject({
            id: cidadeCriada.body,
            nome: 'Cidade Teste',
            estado: 'Estado Teste'
        });
    });

    it('Tenta passar um ID inválido', async () => {

        const res1 = await testServer.get('/cidades/a');
        
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.params.id');
    });

    it('Tenta acessar um registro que não existe', async () => {

        const res1 = await testServer.get('/cidades/99999');
        
        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('default');
    });

    
});