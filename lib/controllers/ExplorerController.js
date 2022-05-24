const ExplorerService = require("./../services/ExplorerService")
const FizzbuzzService = require("./../services/FizzbuzzService")
const Reader = require("./../utils/Reader")
const explorers = Reader.readJsonFile("explorers.json")

class ExplorerController{

//método para obetner lista de explorers filtrado por mision
static getExplorerByMission(mission){
	const explorerByMission = ExplorerService.filterByMission(explorers,"node")
	return explorerByMission
}

//método para regresar la lista de usernames de los explorers filtrados por mision

//método para regresar la cantidad de explorers en la mision enviada

} //cierre de clase

module.exports = ExplorerController;
