var imgurlSelfWebring = "https://i.pinimg.com/736x/72/05/2d/72052d9d64d420b1453cfbc3cc0fdf5a.jpg";

var templateWebring = document.createElement("div");
templateWebring.innerHTML = `
<style>
  #templateWebring {
    width: 300px !important;
    text-align: center !important;
    height: 164px !important;
    border: 2px solid #DD28A7 !important;
    margin: auto !important;
    background-image: url('https://webring.koinuko.pink/img/bg.png');
    background-size: cover;
    font-family: 'Comic Sans MS', cursive, sans-serif !important;
    color: #452134 !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #webringiconbox {
    border: 2px solid #DD28A7 !important;
    overflow: hidden !important;
    height: 100px !important;
    width: 100px !important;
    margin-top: 8px !important;
  }
  #iconWebring {
    width: 100px !important;
    height: 100px !important;
  }
  #webringdesc {
    font-size: 16px !important;
    font-weight: bold !important;
    color: #D66BA0 !important;
    padding: 5px !important;
    width: 220px !important;
    text-align: center !important;
    text-shadow: 1px 1px 1px #fff5fa;
  }
</style>

<div id="templateWebring">
  <div id="webringiconbox">
    <img id="iconWebring" src="${imgurlSelfWebring}" alt="Webring Icon">
  </div>
  <p id="webringdesc">🎀 Cuteness is a defense mechanism. Please do not engage.</p>
</div>
`;

document.getElementById("selfinsertwebring").appendChild(templateWebring);
