const FizzbuzzService = require("./../lib/services/FizzbuzzService");
describe("Test suite for new functionality", ()=>{
    test("testing ApplyValidationInNumber", ()=>{
        //		const explorer = [{score:5,trick:"Fizz"}];
        //		const explorerScore= explorer.score;
        const explorerRequest = FizzbuzzService.applyValidationInNumber(9);
        //		const explorerTrick = explorerRequest.trick;
        expect(explorerRequest).toBe("FIZZ");
        //		expect(explorerRequest.score).toBe(5);
    });
});

