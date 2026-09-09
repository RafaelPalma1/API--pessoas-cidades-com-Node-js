import { testServer } from "../jest.setup";
import { StatusCodes } from "http-status-codes";

describe("cidades - create", () => {
    
    it("Cria registro", async () => {

        const res1 = await testServer.post("/cidades").send({
            nome: "Cidade Teste",
            estado: "Estado Teste"
        });
        
        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toEqual("number");
    });

    it("Tenta criar um registro muito curto", async () => {

        const res1 = await testServer.post("/cidades").send({
            nome: "Ci",
            estado: "Es"
        });
        
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty("errors.body.nome");
        expect(res1.body).toHaveProperty("errors.body.estado");
    });

    
});