const FizzbuzzService = require("./../lib/services/FizzbuzzService");
describe("Test suite for new functionality", ()=>{
	test("testing ApplyValidationInNumber", ()=>{
		const explorers = [{score:1,trick:"Fizz"}];
		const explorerRequest = FizzbuzzService.applyValidationInNumber(explorers);
		expect(explorerRequest).toBe(1);
//		expect(explorerRequest.trick).toBe("Fizz");
	});

})

