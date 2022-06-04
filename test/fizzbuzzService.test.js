const FizzbuzzService = require("./../lib/services/FizzbuzzService");
describe("Test suite for new functionality", ()=>{
	test("testing ApplyValidationInNumber", ()=>{
		const explorer = [{score:5,trick:"Fizz"}];
		const explorerScore= explorer.score;
		const explorerRequest = FizzbuzzService.applyValidationInNumber(explorerScore);
		const explorerTrick = explorerRequest.trick;
		expect(explorerTrick).toBe("Buzz");
//		expect(explorerRequest.trick).toBe("Fizz");
	});

})

