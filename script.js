function updateTimer() {
  const currentDate = new Date();
  const formattedDateTime = currentDate.toLocaleString();
  document.getElementById('timer').textContent = formattedDateTime;
}

document.addEventListener("DOMContentLoaded", function() {
  document.body.innerHTML = "<p id='timer'></p>"
  updateTimer();
  setInterval(updateTimer, 1000);
});