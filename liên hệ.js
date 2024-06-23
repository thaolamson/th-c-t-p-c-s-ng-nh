const formLienHe = document.querySelector('.form-lien-he');

formLienHe.addEventListener('submit', function(event) {
  event.preventDefault();

  const ten = document.getElementById('ten').value;
  const email = document.getElementById('email').value;
  const noiDung = document.getElementById('noi-dung').value;

  // Xử lý dữ liệu liên hệ (gửi email, lưu trữ dữ liệu, v.v.)

  alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi bạn trong thời gian ngắn nhất.');
});