const ExplorerService = require ("./../lib/services/ExplorerService")
const Reader = require("./../lib/utils/Reader")
const explorers = Reader.readJsonFile("explorers.json");

describe("Test suite for explorerControll", ()=>{
	test("1) Read json file and return length of explorers", () =>{
        	//código a probar
        	const explorersAmount = explorers.length;
	        //propiedad a probar __ valor que se espera obtener
	        expect(explorersAmount).toBe(15);
	});
	test("2) obtener lista de explorers filtrados por mision",()=>{
		const explorers = [{mission: "node"},{mission: "node"}] //lo que recibo del archivo JSON
		const explorersInNode = ExplorerService.filterByMission(explorers, "node");
		expect(explorersInNode.length).toBe(2)
	});
	test("3) regresar lista de usernames de explorers filtrados por mision",()=>{
		const explorersByMissionToGetUsernames = explorers.filter((explorer)=> explorer.mission === mission)
		const usernamesByMission = explorersByMissionToGetUsernames.map((explorer)=> explorer.githubUsername)
		expect(explorersInNode.length).toBe(2)
	});
	

	})
