const ExplorerService = require("./../lib/services/ExplorerService")
describe("Test suite for FizzBuzz validation", () =>{
	test("0) case Dummy", () =>{
		const resultOfSomething = 16+2
		expect(resultOfSomething).toBe(18);
	});
	/*test("1) ", () =>{
		//código a probar
		const Reader = require('./../lib/utils/Reader')
		const explorersAmount = explorers.length
		//propiedad a probar __ valor que se espera obtener
		expect(explorersAmount).toBe(14)
	});
	*/
	test("2) Read json file", () =>{
		//código a probar
		const Reader = require('./../lib/utils/Reader')
		const ExplorerService = require ('./../lib/services/ExplorerService')
		const explorersAmount = explorers.length
		//propiedad a probar __ valor que se espera obtener
		expect(explorersAmount).toBe(14)
	});
})
