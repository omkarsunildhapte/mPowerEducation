$(document).ready(function () {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const data = {
    email: "saikumarbajinki@gmail.com",
    mobile: "8331836027",
  };
  $.ajax({
    url: "https://www.exafluence.education/getStudentDetails",
    data: JSON.stringify(data),
    headers: myHeaders,
    contentType: "application/json;charset=UTF-8",
    type: "POST",
    success: function (response) {
      console.log(response);
    },
    error: function (error) {
      console.log(error);
    },
  });
});
