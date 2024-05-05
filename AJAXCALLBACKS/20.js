function startRace() {
    const numRunners= document.getElementById("numRunners").value;
    const raceResults= document.getElementById("raceResults");
  
    const runners = Array.from({ length: numRunners }, (_, i) => i + 1);
  
    runners.forEach((runner, index) => {
      setTimeout(() => {
        raceResults.innerHTML += `<p>Corredor ${runner} terminó la carrera en posición # ${index + 1}.</p>`;
      }, Math.random() * 3000);
    });
  }