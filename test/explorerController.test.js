const ExplorerService = require ("./../lib/services/ExplorerService");
const FizzbuzzService = require('./../lib/services/FizzbuzzService');
const Reader = require("./../lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");

describe("Test suite for explorerControll", ()=>{
    test("1) Read json file and return length of explorers", () =>{
        	//código a probar
        	const explorersAmount = explorers.length;
	        //propiedad a probar __ valor que se espera obtener
	        expect(explorersAmount).toBe(15);
    });
    test("2) obtener lista de explorers filtrados por mision",()=>{
        const explorers = [{mission: "node"},{mission: "node"}]; //lo que recibo del archivo JSON
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(2);
    });
    test("3) regresar lista de usernames de explorers filtrados por mision",()=>{
        const explorersUsername = ExplorerService.getExplorersUsernameByMission(explorers,"java");
        expect(explorersUsername.length).toBe(5);
    });
    test("4) Regresar cantidad de explorers por mision",()=>{
        const explorersAmountByMission = ExplorerService.getAmountOfExplorersByMission(explorers,"java");
        expect(explorersAmountByMission).toBe(5);
    });
    test("5) Regresar score and trick de explorers por validacion por número",()=>{
        const explorersValidationRequest = FizzbuzzService.applyValidationInNumber(5);
        expect(explorersValidationRequest).toBe("BUZZ");
    });
    test("6) Regresar lista de explorers by stack",()=>{
        const ListExplorersByStack = ExplorerService.getExplorersByStack(explorers,"reasonML");
        expect(ListExplorersByStack).toBeDefined();
    });

});
