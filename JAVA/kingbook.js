// Session check
if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "../auth/login.html";
}

document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const bookingData = {
    service: document.getElementById("service").value,
    plan: document.getElementById("plan").value,
    date: document.getElementById("date").value,
    status: "Pending Payment"
  };

  localStorage.setItem("bookingDetails", JSON.stringify(bookingData));
  window.location.href = "../payment/payment.html";
});
