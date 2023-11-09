$(document).ready(function () {
  $(".otp-popup").hide();
  $(".input-tags-submit").click(function () {
    var mobile = $("#mobile").val();
    var email = $("#email").val();

    var mobilePattern = /^\d{10}$/;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
   

    if (!mobile.match(mobilePattern)) {
      alert("Please enter a valid 10-digit mobile number.");
      return false;
    }

    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return false;
    }
    $(".otp-popup").show();
  });

  $(".otp-popup-submit").click(function () {
    var otpInput = document.getElementById('Motp');
    var otpInput1 = document.getElementById('Eotp');
    var numRegex = /^[0-9]+$/;

    if (!numRegex.test(otpInput.value.trim())) {
      alert('Please enter valid numbers for Mobile OTP');
      return false;
  }
  if (!numRegex.test(otpInput1.value.trim())) {
      alert('Please enter valid numbers for Email OTP');
      return false;
  }

  if (otpInput.value.trim() === '') {
      alert('Please enter your Mobile OTP');
      return false;
  }
  if (otpInput1.value.trim() === '') {
      alert('Please enter your Email OTP');
      return false;
  }

  alert("Registered Successfully");
  });

  $(".input-tags-submit-receipt").click(function () {
    var mobile = $("#mobile1").val();
    var email = $("#email1").val();

    var mobilePattern = /^\d{10}$/;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    

    if (!mobile.match(mobilePattern)) {
      alert("Please enter a valid 10-digit mobile number.");
      return false;
    }

    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return false;
    }
    alert("Downloaded Successfully");
  });
});