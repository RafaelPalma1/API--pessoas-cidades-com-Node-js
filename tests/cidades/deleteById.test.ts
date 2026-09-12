import { testServer } from "../jest.setup";
import { StatusCodes } from "http-status-codes";

describe("cidades - deleteById", () => {
    
    it("Deleta registro", async () => {

        const res1 = await testServer.post("/cidades").send({
            "nome": "Cidade Teste",
            "estado": "parana"
        });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resApagada = await testServer.delete(`/cidades/${res1.body}`).send({
            id: res1.body
        });
        
        expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);
        expect(typeof resApagada.body).toEqual("object");
    });

    it("Tenta passar um ID inválido", async () => {

        const res1 = await testServer.delete("/cidades/a").send({
            id: "a"
        });
        
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty("errors.params.id");
    });


    it("Tenta apagar um registro que não existe", async () => {

        const res1 = await testServer.delete("/cidades/99999").send({
        });
        
        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty("default");
    });

    
});