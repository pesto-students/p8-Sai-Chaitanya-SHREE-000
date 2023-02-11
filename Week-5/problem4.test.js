// import { describe } from 'yargs';
const mathOperations = require('./problem4');


describe("Calculator tests", () => {

    test("adding 1 + 2 should return 3", () => {
        expect(mathOperations.sum(1, 2)).toBe(3);
    });

    test("substracting 2 from 8 should return 8", () => {
        expect(mathOperations.diff(10, 2)).toBe(8);
    })

    test("multiplying 2 and 8 should return 16", () => {
        expect(mathOperations.product(2, 8)).toBe(16);
    })

    test("dividing 10 from 2 should return 5", () => {
        expect(mathOperations.division(10, 2)).toBe(5);
    })
});