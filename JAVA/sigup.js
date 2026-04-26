document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("aryaUsers")) || [];

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    alert("An account with this email already exists.");
    return;
  }

  const newUser = {
    name,
    email,
    password
  };

  users.push(newUser);
  localStorage.setItem("aryaUsers", JSON.stringify(users));

  alert("Account created successfully. Please sign in.");
  window.location.href = "signin.html";
});
