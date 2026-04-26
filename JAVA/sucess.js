// Session check
if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "../auth/login.html";
}

const booking = JSON.parse(localStorage.getItem("bookingDetails"));

if (booking) {
  document.getElementById("service").innerText = booking.service;
  document.getElementById("plan").innerText = booking.plan;
  document.getElementById("date").innerText = booking.date;
}
