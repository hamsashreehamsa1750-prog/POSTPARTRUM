document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const storedUser = JSON.parse(localStorage.getItem("aryaUser"));

  if (!storedUser) {
    alert("No account found. Please sign up.");
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "../dashboard/dashboard.html";
  } else {
    alert("Invalid email or password");
  }
});
