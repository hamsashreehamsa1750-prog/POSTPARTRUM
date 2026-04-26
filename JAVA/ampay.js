// Session check
if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "../auth/login.html";
}

const booking = JSON.parse(localStorage.getItem("bookingDetails"));
if (!booking) {
  window.location.href = "../booking/booking.html";
}

// Pricing logic (simulated)
let amount = 0;
if (booking.plan === "7 Days Care") amount = 7000;
if (booking.plan === "14 Days Care") amount = 13000;
if (booking.plan === "30 Days Care") amount = 27000;

// Display summary
document.getElementById("service").innerText = booking.service;
document.getElementById("plan").innerText = booking.plan;
document.getElementById("date").innerText = booking.date;
document.getElementById("amount").innerText = amount;

// Simulated payment
document.getElementById("payBtn").addEventListener("click", () => {
  booking.status = "Payment Successful";
  booking.amount = amount;

  localStorage.setItem("bookingDetails", JSON.stringify(booking));
  window.location.href = "../success/success.html";
});
