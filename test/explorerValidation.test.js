const ExplorerService = require('./../lib/services/ExplorerService')
const FizzbuzzService = require('./../lib/services/FizzbuzzService')
const Reader = require('./../lib/utils/Reader')
describe("Unit test for explorer validation", ()=>{
	test("0) Show first Explorer name", ()=>{
		//código que queremos usar tal cual
		//Quiero mostrar  el nombre del primer explorer
		const explorers = Reader.readJsonFile('explorers.json')

		//validamos que el código funcione de la manera esperada
		expect(explorers[0].name).toBe("Woopa1")
	});
	test('1) probando metodo applyValidationInExplorer', ()=>{
		const explorer1 = [{name: "Explorer1", score: 1}]
		//usando metodo applyValidationInExplorer
		FizzbuzzService.applyValidationInExplorer(explorer1)
		expect(explorer1.score).toBe(1)
	});
})
