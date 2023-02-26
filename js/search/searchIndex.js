console.log("SEARCHINDEX.JS");

import teams from "./arrays.js";
import { renderTeams } from "./renderTeams.js";
import { searchTeams } from "./searchTeams.js";
import { displayMessage } from "../displayMessage.js";

let teamsToRender = teams;

renderTeams(teamsToRender);

searchTeams(teamsToRender); 

const url8 = "https://noroff.herokuapp.com/v1/nba-teams/teams";

async function getTeams() {

    try {
        const response = await fetch(url8);
        const teams = await response.json();
        
        displayMessage("success", "API call was a success", "#displayMessage")
        console.log(teams);
    } catch(err) {
        console.log("THERE WAS AN ERROR: ", err)
        displayMessage("error", err, "#displayMessage");
    }


}

getTeams();

