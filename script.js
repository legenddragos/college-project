document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === "" || password === "") {
      alert("من فضلك املأ كل البيانات.");
    } else {
      alert("تم تسجيل الدخول بنجاح ✅");
      window.location.href = "index.html";
    }
  });
});
