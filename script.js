// setInterval(function () {
//     console.log('interval');
//     fetch(`http://localhost:3000/score?url=https://m.cricbuzz.com/cricket-commentary/52610/sll-vs-rsal-10th-match-road-safety-world-series-t20-2022`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//         })
// }, 10000);
// fetch.Header.Set("Access-Control-Allow-Origin", "*")
fetch(`http://localhost:3000/score?url=https://m.cricbuzz.com/cricket-commentary/52610/sll-vs-rsal-10th-match-road-safety-world-series-t20-2022`,{
    'Access-Control-Allow-Origin': '*'
  })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })