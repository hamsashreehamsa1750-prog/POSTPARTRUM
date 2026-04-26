document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const user = {
    name,
    email,
    password
  };

  localStorage.setItem("aryaUser", JSON.stringify(user));
  localStorage.setItem("isLoggedIn", "true");

  window.location.href = "../dashboard/dashboard.html";
});
