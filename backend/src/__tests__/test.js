const expect = require("chai").expect;
const request = require("supertest");
const app = require("../api");
const dburl = 'mongodb://root:1234@database/'
const db = require("../database");

describe("Filestage", () => {
    beforeAll(async () => {
        await db.connect();
    });

    it("gets the test endpoint", async done => {
        const response = await request(app).get("/");

        expect(response.status).to.equal(200);
        done();
    });
    it("should create a todo", async () => {
        const res = await request(app)
            .post("/")
            .send({
                text: "esteve",
            });
        expect(res.status).to.equal(201);
        const data = res.body;
        expect(data).to.have.property("text", "esteve");
    });
    it("should ensure that delete request can not be sent for all todos", async () => {
        await request(app)
            .post("/")
            .send({
                text: "esteve",
            });
        const res = await request(app).delete("/");
        expect(res.status).to.be.equal(404);
    });

});