const Reader = require ("./lib/utils/Reader") //importando clase
const ExplorerService = require ("./lib/services/ExplorerService")
const explorers = Reader.readJsonFile("explorers.json")

//console.log(ExplorerService.filterByMission(explorers, "node"))
//console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "java"))
//console.log(ExplorerService.getExplorersUsernameByMission(explorers, "node"))
console.log(explorers.length)

