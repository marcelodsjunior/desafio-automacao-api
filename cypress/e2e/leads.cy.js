let payload

describe("Geração de Leads", () => {
    before(() => {
        cy.fixture("payload/leads/payload-leads.json").then((data) => {
            payload = data;
        });
    });

    it("Deve gerar um lead com sucesso", () => {
        cy.request({
            method: "POST",
            url: "/latest/",
            body: payload,
        }).then((response) => {
            expect(response.status).to.eq(200);

        });
    });
});
