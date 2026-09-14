import { testServer } from '../jest.setup';
import { StatusCodes } from 'http-status-codes';

describe('cidades - getAll', () => {
    
    it('Cria registro', async () => {

        const res1 = await testServer.get('/cidades').send({
            
        });
        
        expect(res1.statusCode).toEqual(StatusCodes.OK);
        expect(Number(res1.headers['x-total-count'])).toBeGreaterThan(0);
        expect(res1.body.length).toBeGreaterThan(0);
    });

    
});