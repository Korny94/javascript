import { renderTeams } from "./renderTeams.js";

export function searchTeams(teams) {

    const search = document.querySelector("#searchName");

    search.onkeyup = function(event) {
        // console.log(event);
        const searchValue = event.target.value.trim().toLowerCase();
    
        const filteredTeams = teams.filter(function(team) {
            if (team.full_name.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        })
    
        // console.log(filteredTeams)
    
    
        renderTeams(filteredTeams);
    }
} 