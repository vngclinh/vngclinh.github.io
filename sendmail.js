document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const inputs = document.querySelectorAll(".field .item");
  const errorTexts = document.querySelectorAll(".error-txt");

  // Ẩn lỗi ban đầu
  errorTexts.forEach((error) => (error.style.display = "none"));

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn gửi form mặc định

    let isValid = true;

    inputs.forEach((input, index) => {
      if (input.value.trim() === "") {
        errorTexts[index].style.display = "block";
        isValid = false;
      } else {
        errorTexts[index].style.display = "none";
      }
    });

    // Kiểm tra định dạng email
    const emailInput = document.getElementById("email");
    const emailError = emailInput.nextElementSibling;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value.trim())) {
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailError.style.display = "none";
    }
    // Kiểm tra định dạng sđt
    const phoneInput = document.getElementById("phone");
    const phoneError = phoneInput.nextElementSibling;
    const phoneRegex = /^\d{9,15}$/; // Chỉ chấp nhận số và có độ dài từ 9-15 ký tự

    if (!phoneRegex.test(phoneInput.value.trim())) {
      phoneError.style.display = "block";
      isValid = false;
    } else {
      phoneError.style.display = "none";
    }
    // Nếu hợp lệ, mô phỏng gửi email
    if (isValid) {
      setTimeout(() => {
        alert("📨 Email sent successfully!");
        form.reset();
      }, 1000);
    }
  });
});
