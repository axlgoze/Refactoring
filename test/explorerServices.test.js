const ExplorerService = require("./../lib/services/ExplorerService");
const Reader = require("./../lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");
describe("Test suite for FizzBuzz validation", () =>{
    test("0) case Dummy", () =>{
        const resultOfSomething = 16+2;
        expect(resultOfSomething).toBe(18);
    });
    test("1) Read json file and return length of explorers", () =>{
        //código a probar
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersAmount = explorers.length;
        //propiedad a probar __ valor que se espera obtener
        expect(explorersAmount).toBe(15);
    });
    test("2) Filter explorers by mission 'node' ", () =>{
        //código a probar
        const explorerByMission = explorers.filter((explorer)=>explorer.mission === "node");
        const explorersAmountInNode = explorerByMission.length;
        //propiedad a probar __ valor que se espera obtener
        expect(explorersAmountInNode).toBe(10);
    });
    test("3) Filter explorers by mission 'java' ", () =>{
        //código a probar
        const explorerByMission = explorers.filter((explorer)=>explorer.mission === "java");
        const explorersAmountInJava = explorerByMission.length;
        //propiedad a probar __ valor que se espera obtener
        expect(explorersAmountInJava).toBe(5);
    });
    test("4) Test de Carlo para probar ExploreerSErvice", () =>{
        const explorers = [{mission: "node"}]; //ya se que lo voy a recibir de parte del archivo JSON
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        //propiedad a probar __ valor que se espera obtener
        expect(explorersInNode.length).toBe(1);
    });
    test("5) Filter explorers by Stack", () =>{
	const explorersInStackE  = ExplorerService.getExplorersByStack(explorers,"elixir");
	const explorersInStackG  = ExplorerService.getExplorersByStack(explorers,"groovy");
	const explorersAmountInStackE = explorersInStackE.length;
	const explorersAmountInStackG = explorersInStackG.length;
        expect(explorersAmountInStackE).toBeDefined();
        expect(explorersAmountInStackG).toBe(9);
    });
});
