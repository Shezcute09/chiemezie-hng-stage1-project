document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const sidebar = document.getElementById("sidebar");
  const menu = document.getElementById("menu");
  const currentTimeUTC = document.getElementById("currentTimeUTC");
  const currentDay = document.getElementById("currentDay");

  toggleButton.addEventListener("click", function () {
    if (sidebar.classList.contains("sidebar--open")) {
      sidebar.classList.remove("sidebar--open");
      menu.classList.add("sidebar__menu--hidden");
      toggleButton.innerHTML = '<i class="fas fa-bars"></i> Menu';
    } else {
      sidebar.classList.add("sidebar--open");
      menu.classList.remove("sidebar__menu--hidden");
      toggleButton.innerHTML = '<i class="fas fa-times"></i> Close';
    }
  });

  function updateTimeAndDay() {
    const now = new Date();
    const day = now.toLocaleString("en-US", { weekday: "long" }); // Adjust locale if needed
    const localTime = now.toLocaleTimeString(); // No arguments for local time zone

    currentTimeUTC.textContent = localTime; // Update content with local time
    currentDay.textContent = day;
  }

  updateTimeAndDay();
  setInterval(updateTimeAndDay, 60000); // Update every minuteUpdate every minute
});
