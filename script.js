setInterval(getResult, 5000);
let gameUrl = 'https://m.cricbuzz.com/cricket-commentary/52610/sll-vs-rsal-10th-match-road-safety-world-series-t20-2022';
getResult();
async function getResult() {
    await fetch(`http://localhost:3000/score?url=${gameUrl}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            // document.getElementById('bowling').innerHTML = bowlTeam;
            // document.getElementById('batting').innerHTML = current;
        })
}