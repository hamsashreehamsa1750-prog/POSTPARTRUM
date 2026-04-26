// Session protection
const user = JSON.parse(localStorage.getItem("aryaLoggedInUser"));
if (!user) {
  window.location.href = "../auth/signin.html";
}

// Notification permission
if ("Notification" in window) {
  Notification.requestPermission();
}

const form = document.getElementById("routineForm");
const list = document.getElementById("reminderList");

let reminders = JSON.parse(localStorage.getItem("aryaReminders")) || [];

// Render reminders
function renderReminders() {
  list.innerHTML = "";
  reminders.forEach((r, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span><i class="fa-solid fa-clock"></i> ${r.type} at ${r.time}</span>
      <button onclick="removeReminder(${index})">✖</button>
    `;
    list.appendChild(li);
  });
}

renderReminders();

// Add reminder
form.addEventListener("submit", e => {
  e.preventDefault();

  const type = document.getElementById("type").value;
  const time = document.getElementById("time").value;
  const voice = document.getElementById("voiceToggle").checked;

  const reminder = { type, time, voice };
  reminders.push(reminder);
  localStorage.setItem("aryaReminders", JSON.stringify(reminders));

  scheduleReminder(reminder);
  renderReminders();
  form.reset();
});

// Schedule reminder
function scheduleReminder(reminder) {
  const [hour, minute] = reminder.time.split(":");
  const now = new Date();
  const target = new Date();

  target.setHours(hour, minute, 0);

  if (target < now) {
    target.setDate(target.getDate() + 1);
  }

  const delay = target - now;

  setTimeout(() => {
    if (Notification.permission === "granted") {
      new Notification(`ARYA Reminder`, {
        body: `Time for ${reminder.type}`
      });
    }

    if (reminder.voice) {
      const speech = new SpeechSynthesisUtterance(
        `It is time for your ${reminder.type}`
      );
      speechSynthesis.speak(speech);
    }
  }, delay);
}

// Remove reminder
function removeReminder(index) {
  reminders.splice(index, 1);
  localStorage.setItem("aryaReminders", JSON.stringify(reminders));
  renderReminders();
}
