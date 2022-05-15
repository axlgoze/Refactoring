const ExplorerService = require("./../lib/services/ExplorerService")
describe("Test suite for FizzBuzz validation", () =>{
	test("0) case Dummy", () =>{
		const resultOfSomething = 16+2
		expect(resultOfSomething).toBe(18);
	});
	test("1) Filter by mission", () =>{
		//código a probar
		const explorerByMission = explorers.filter((explorer) => explorer.mission === mission)
		//propiedad a probar __ valor que se espera obtener
		expect(explorer.filterByMission("node")).toBe()

	});
})
