//Responsabilidad explorer service
const Reader = require("../utils/Reader");
class ExplorerService{

    static filterByMission(explorers, mission){
	   const explorerByMission = explorers.filter((explorer) => explorer.mission === mission );
	   return explorerByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){
	   const explorersByMissionAmount = explorers.filter((explorer) => explorer.mission === mission);
	   return explorersByMissionAmount.length;
    }

    static getExplorersUsernameByMission(explorers, mission){
	   const explorersByMissionToGetUsernames = explorers.filter((explorer) => explorer.mission === mission);
	   const usernamesByMission = explorersByMissionToGetUsernames.map((explorer) => explorer.githubUsername);
	   return usernamesByMission;
    }

    static getExplorersByStack(explorers, stacks){
	   const explorersInStack = explorers.filter((explorer) => explorer.stacks.includes(stacks));
	   return explorersInStack;
    }
}

module.exports = ExplorerService;
