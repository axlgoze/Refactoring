const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");

class ExplorerController{

    //método para obetner lista de explorers filtrado por mision
    static getExplorerByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");	
        const explorerByMission = ExplorerService.filterByMission(explorers,mission);
        return explorerByMission;
    }

    //método para regresar la lista de usernames de los explorers filtrados por mision
    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersUsername =  ExplorerService.getExplorersUsernameByMission(explorers,mission);
        return explorersUsername;
    }

    //método para regresar la cantidad de explorers en la mision enviada
    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersAmountByMission =  ExplorerService.getAmountOfExplorersByMission(explorers,mission);
        return explorersAmountByMission;
    }

    //método para regresar valor trick de explorers segun el score
    static getValidationInNumber(number){
	//const explorers = Reader.readJsonFile("explores.json");
        const applyValidationInNumber = FizzbuzzService.applyValidationInNumber(number);
	return applyValidationInNumber;
	
    }
} //cierre de clase

module.exports = ExplorerController;
