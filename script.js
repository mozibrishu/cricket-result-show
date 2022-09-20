setInterval(getResult, 5000);
let gameUrl = 'https://www.sportsadda.com/cricket/scores-fixtures/scorecard/tanzania-vs-malawi-live-scores-t20-match-tzmwi09202022216732';
getResult();
async function getResult() {
    await fetch(`http://localhost:3002/summary?url=${gameUrl}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            document.getElementById('team1').innerHTML = data.team1_name;
            document.getElementById('team1_score').innerHTML = data.team1_score;

            document.getElementById('team2').innerHTML = data.team2_name;
            document.getElementById('team2_score').innerHTML = data.team2_score;
        })
}