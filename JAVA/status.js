// Demo data (normally from payment page)
const paymentData = JSON.parse(localStorage.getItem("paymentData"));

const statusIcon = document.getElementById("statusIcon");
const statusTitle = document.getElementById("statusTitle");
const statusMessage = document.getElementById("statusMessage");

document.getElementById("serviceName").innerText = paymentData.service;
document.getElementById("amountPaid").innerText = paymentData.amount;
document.getElementById("transactionId").innerText = paymentData.transactionId;
document.getElementById("paymentStatus").innerText = paymentData.status;

if (paymentData.status === "SUCCESS") {
  statusIcon.src = "../assets/images/success.png";
  statusTitle.innerText = "Payment Successful";
  statusMessage.innerText = "Thank you! Your service has been booked successfully.";
} else {
  statusIcon.src = "../assets/images/failure.png";
  statusTitle.innerText = "Payment Failed";
  statusMessage.innerText = "Your payment was not completed. Please try again.";
}

function goNext() {
  if (paymentData.status === "SUCCESS") {
    window.location.href = "../success/success.html";
  } else {
    window.location.href = "../payment/payment.html";
  }
}
