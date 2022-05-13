//Responsabilidad explorer service
const Reader = require("../utils/Reader")
class ExplorerService{
	static filterByMission(explorers, mission){
	   const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");
	   //console.log(explorersInNode.length)
	}

	static getAmountOfExplorersByMission(explorers, mission){
	   
	}
	static getExplorersUsernameByMission(explorers, mission){}
}

module.exports = ExplorerService
