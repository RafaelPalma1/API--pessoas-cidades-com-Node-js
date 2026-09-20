import { testServer } from '../jest.setup';
import { StatusCodes } from 'http-status-codes';

describe('cidades - updateById', () => {
    
    it('Atualiza registro', async () => {
        const cidadeCriada = await testServer.post('/cidades').send({
            nome: 'Cidade Teste',
            estado: 'Estado Teste'
        });

        expect(cidadeCriada.statusCode).toEqual(StatusCodes.CREATED);

        const res1 = await testServer.put(`/cidades/${cidadeCriada.body}`).send({
            nome: 'Cidade Atualizada',
            estado: 'Estado Atualizado'
        });
        
        expect(res1.statusCode).toEqual(StatusCodes.OK);
        expect(typeof res1.body).toEqual('number');
        expect(res1.body).toEqual(1);
    });

    it('Tenta passar um ID inválido', async () => {

        const res1 = await testServer.put('/cidades/a').send({
            id: 'a',
            nome: 'Cidade Teste',
            estado: 'Estado Teste'
        });
        
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.params.id');
    });

    it('Tenta passar um nome inválido', async () => {

        const res1 = await testServer.put('/cidades/1').send({
            id: 1,
            nome: 'Ci',
            estado: 'Estado Teste'
        });
        
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.nome');
    });

    it('Tenta atualizar um registro que não existe', async () => {

        const res1 = await testServer.put('/cidades/99999').send({
            nome: 'Cidade Teste',
            estado: 'Estado Teste'
        });
        
        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('default');
    });

    
});