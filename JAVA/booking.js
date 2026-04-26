// Session protection
const user = JSON.parse(localStorage.getItem("aryaLoggedInUser"));
if (!user) {
  window.location.href = "../auth/signin.html";
}

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const booking = {
    service: document.getElementById("service").value,
    package: document.getElementById("package").value,
    date: document.getElementById("date").value,
    user: user.email,
    status: "Pending Payment"
  };

  localStorage.setItem("aryaBooking", JSON.stringify(booking));

  window.location.href = "../payment/payment.html";
});
