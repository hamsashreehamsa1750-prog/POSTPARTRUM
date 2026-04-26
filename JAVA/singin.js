document.getElementById("signinForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("aryaUsers")) || [];

  const validUser = users.find(
    user => user.email === email && user.password === password
  );

  if (!validUser) {
    alert("Invalid email or password.");
    return;
  }

  // Store login session
  localStorage.setItem("aryaLoggedInUser", JSON.stringify(validUser));

  window.location.href = "../dashboard/dashboard.html";
});
