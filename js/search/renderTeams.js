export function renderTeams(teamsToRender) {

    const teamContainer = document.querySelector("#teamContainer");

    teamContainer.innerHTML = "";

    teamsToRender.forEach(function(team) {
        teamContainer.innerHTML += `
            <div class="team">
                <h4>${team.full_name}</h4>
            </div>
        `;
    });
}