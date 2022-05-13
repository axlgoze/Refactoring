//Responsabilidad explorer service
const Reader = require("../utils/Reader")
class ExplorerService{
	static filterByMission(explorers, mission){
	   const explorerByMission = explorers.filter((explorer) => explorer.mission === mission )
	   return explorerByMission
	}
	static getAmountOfExplorersByMission(explorers, mission){
	   const explorersInNodeAmount = explorers.filter((explorer) => explorer.mission == "node");
	   console.log(explorersInNodeAmount.length)
	}
	static getExplorersUsernameByMission(explorers, mission){
	   const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
	   const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
	   console.log(usernamesInNode)
	}
}

module.exports = ExplorerService
