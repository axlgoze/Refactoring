const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/v1/explorers/usernames/:mission",(request,response)=>{
    const mission = request.params.mission;
    const explorersUsernameByMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mission: request.params.mission, explorers: explorersUsernameByMission});
});


app.get("/v1/explorers/amount/:mission",(request,response)=>{
    const mission = request.params.mission;
    const explorersInMissionAmount = ExplorerController.getExplorersAmountByMission(mission);
    response.json({mission:request.params.mission, quantity: explorersInMissionAmount});
});

app.get("/v1/explorers/:mission", (request, response) =>{
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorerByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/fizzbuzz/:score", (request,response) =>{
    const score = request.params.score;
    const  explorerValidationByNumber = ExplorerController.getValidationInNumber(score);
    response.json({score:score, trick:explorerValidationByNumber.trick});
});

app.get("/v1/explorers/stack/:stack", (request,response) =>{
    const stack = request.params.stack;
    const  explorersListByStack = ExplorerController.getExplorersByStack(stack);
    response.json(explorersListByStack);
});

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});
