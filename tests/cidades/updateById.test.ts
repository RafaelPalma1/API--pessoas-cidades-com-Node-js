import { testServer } from "../jest.setup";
import { StatusCodes } from "http-status-codes";

describe("cidades - updateById", () => {
    
    it("Atualiza registro", async () => {

        const res1 = await testServer.put("/cidades/1").send({
            id: 1,
            nome: "Cidade Teste"
        });
        
        expect(res1.statusCode).toEqual(StatusCodes.OK);
        expect(typeof res1.body).toEqual("object");
    });

    it("Tenta passar um ID inválido", async () => {

        const res1 = await testServer.put("/cidades/a").send({
            id: "a"
        });
        
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty("errors.params.id");
    });

    it("Tenta passar um nome inválido", async () => {

        const res1 = await testServer.put("/cidades/1").send({
            id: 1,
            nome: "Ci"
        });
        
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty("errors.body.nome");
    });

    it("Tenta atualizar um registro que não existe", async () => {

        const res1 = await testServer.put("/cidades/99999").send({
            nome: "Cidade Teste"
        });
        
        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty("default");
    });

    
});