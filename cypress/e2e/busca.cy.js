let payload
let payloadSemResultado
let expectedResponse
let responseSemResultado

describe("Busca de veículos", () => {
    before(() => {
        cy.fixture("payload/busca/busca-payload.json").then((data) => {
            payload = data;
        });

        cy.fixture("payload/busca/busca-payload-veiculo-inexistente.json").then((data) => {
            payloadSemResultado = data;
        });

        cy.fixture("response/busca/expected-response.json").then((data) => {
            expectedResponse = data;
        });

        cy.fixture("response/busca/response-sem-resultados.json").then((data) => {
            responseSemResultado = data;
        });
    });

    it("Deve buscar um único veículo com sucesso", () => {
        cy.request({
            method: "POST",
            url: "https://fiathuboffers.fcalatam.com.br/offers/search",
            body: payload
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.eq(expectedResponse);
        });
    });

    it("Deve retornar body com quantidade de itens zerada", () => {
        cy.request({
            method: "POST",
            url: "https://fiathuboffers.fcalatam.com.br/offers/search",
            body: payloadSemResultado
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.eq(responseSemResultado);
        });
    });
});
