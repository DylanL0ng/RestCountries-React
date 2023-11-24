import app from "./app";
import request from 'supertest'

describe("GET /countries", () => {
    
    describe("given a valid country name", () => {
        // should ping the restcountries api
        // and return with json data regarding
        // the given country

        // should respond with a 200 status code

        test("should respond with a 200 status code", async () => {
            const response = await request(app).get(`/countries/Ireland`)
            expect(response.statusCode).toBe(200)
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
        })
    }) 
    
    describe("when the country name param is missing", () => {
        // should send the get request and run
        // into issues as no country has been
        // given

        // should respond with status code of 404
        test("should respond with a 404 status code", async () => {
            const response = await request(app).get(`/countries/`)
            expect(response.statusCode).toBe(404)    
        })
    }) 

    describe("given an invalid country name", () => {
        // should send the get request and
        // run into issues as invalid characters
        // were entered

        // should respond with status code of 400
        test("should respond with a 400 status code", async () => {
            const response = await request(app).get(`/countries/1reland`)
            expect(response.statusCode).toBe(400)
        })

    }) 
    describe("given an unknown country name", () => {
        // should send the get request and
        // run into issues as the country name
        // is not known

        // should respond with status code of 500
        test("should respond with a 500 status code", async () => {
            const response = await request(app).get(`/countries/RandomCountry`)
            expect(response.statusCode).toBe(500)
        })
    }) 
})