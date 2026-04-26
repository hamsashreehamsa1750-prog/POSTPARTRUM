// Session Check
if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "../auth/login.html";
}

// Welcome user
const user = JSON.parse(localStorage.getItem("aryaUser"));
document.getElementById("welcomeUser").innerText =
  `Welcome, ${user.name}`;

// Navigation
function navigate(path) {
  window.location.href = path;
}

// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "../index.html";
});
