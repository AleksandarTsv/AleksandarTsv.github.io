function setHalfVolume() {
    var myAudio = document.getElementById("audio1");  
    myAudio.volume = 0.1 //Changed this to 0.5 or 50% volume since the function is called Set Half Volume ;)
}

// Timer: time since October 14, 2024
const startDate = new Date("2025-02-12T00:00:00");

function updateTimer() {
  const now = new Date();
  let diff = now - startDate;

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30.44);
  const remDays = days % 30.44;

  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = Math.floor(remDays);
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateTimer, 1000);
updateTimer();

// Button runs away
const runBtn = document.querySelector(".run-btn");

runBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 150);
  runBtn.style.position = "absolute";
  runBtn.style.left = `${x}px`;
  runBtn.style.top = `${y}px`;
});
