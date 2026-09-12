import { testServer } from "../jest.setup";
import { StatusCodes } from "http-status-codes";

describe("cidades - getById", () => {
    
    it("Recupera registro", async () => {

        const res1 = await testServer.get("/cidades/1").send({
            id: 1
        });
        
        expect(res1.statusCode).toEqual(StatusCodes.OK);
        expect(typeof res1.body).toEqual("object");
    });

    it("Tenta passar um ID inválido", async () => {

        const res1 = await testServer.get("/cidades/a").send({
            id: "a"
        });
        
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty("errors.params.id");
    });

    it("Tenta acessar um registro que não existe", async () => {

        const res1 = await testServer.get("/cidades/99999").send({
        });
        
        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty("default");
    });

    
});