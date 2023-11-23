import supertest from "supertest";
import { request } from "express";


describe("GET /countries", () => {
    
    describe("given a valid country name", () => {
        // should ping the restcountries api
        // and return with json data regarding
        // the given country

        // should respond with a 200 status code
        test("should respond with a 200 status code", async () => {
            const response = await request(app).get("/countries").send({
                country: "Ireland"
            })

            expect(response.statusCode).toBe(200)
        })
    }) 

    describe("when the country name param is missing", () => {
        // should respond with status code of 400

        // should respond with error mmessage prompting
        // the reason behind the error
    }) 

    describe("given an invalid country name", () => {

    }) 
    describe("given an unknown country name", () => {

    }) 
})