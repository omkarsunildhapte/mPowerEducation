$(document).ready(function () {
  setTimeout(function () {
    $("#firstBodyLoading").hide();
    $("body").css({ overflow: "auto" });
  }, 4000);
  $('[data-type="adhaar-number"]').keyup(function () {
    var value = $(this).val();
    value = value
      .replace(/\D/g, "")
      .split(/(?:([\d]{4}))/g)
      .filter((s) => s.length > 0)
      .join("-");
    $(this).val(value);
  });
  $('[data-type="mobile-number"]').keyup(function () {
    var value = $(this).val();
    value = value.replace(/\D/g, "");
    $(this).val(value);
  });
  $('[data-type="adhaar-number"]').on("change, blur", function () {
    var value = $(this).val();
    var maxLength = $(this).attr("maxLength");
    if (value.length != maxLength) {
      $(this).addClass("highlight-error");
    } else {
      $(this).removeClass("highlight-error");
    }
  });
  var readURL = function (input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $(".profile-pic").attr("src", e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  $(".file-upload").on("change", function () {
    var val = $(this).val().toLowerCase();
    var regex = new RegExp("(.*?).(jpg|jpeg|png|gif)$");
    if (!regex.test(val)) {
      $(this).val("");
      alert("Unsupported file");
    }
    if (this.files[0].size > 50000 || this.files[0].size > 50000) {
      //reset file upload control
      $(this).val("");
      //show an alert to the user
      alert("Allowed file size exceeded 50KB");
    } else {
      readURL(this);
    }
  });

  $(".upload-button").on("click", function () {
    $(".file-upload").click();
  });
  $("#datepicker").Zebra_DatePicker({
    format: "d-m-Y",
    direction: false,
  });
  var date = moment();

  var currentDate = date.format("D/MM/YYYY");
  $("#todaydate").text(currentDate);
  $(".Zebra_DatePicker_Icon_Wrapper").css({ width: "100%" });
});
function validationMobile() {
  var mobile = $("#Mobile-No").val();
  if (mobile.length < 10) {
    $("#mobileError")
      .text("Please Enter ten digits of mobile number")
      .css({ color: "red" });
    setTimeout(function () {
      $("#mobileError").text("").css({ color: "red" });
    }, 4000);
  } else {
    $("#mobileError").text("").css({ color: "red" });
  }
}
function validationAadhar() {
  var ANo = $("#ANo").val();
  if (ANo.length < 14) {
    $("#AadharError")
      .text("Please Enter 12 digits of Aadhar number")
      .css({ color: "red" });
    setTimeout(function () {
      $("#AadharError").text("").css({ color: "red" });
    }, 4000);
  } else {
    $("#AadharError").text("").css({ color: "red" });
  }
}
function validationEmail() {
  var email = $("#Email").val();
  //var validRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  var validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email.match(validRegex)) {
    $("#mail-valdation").text("").css({ color: "red" });
    return true;
  } else {
    alert("Invalid email address!");
    $("#mail-valdation").text("Invalid Email Address").css({ color: "red" });
    return false;
  }
}
// function validationEmail() {
//   var email = $("#Email").val();
//   var validRegex =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//   if (email.match(validRegex)) {
//     // alert("Valid email address!");

//     // document.form1.text1.focus();
//     //$("#mail-valdation").text("Valid-e")
//     $("#mail-valdation").text("").css({ color: "red" });
//     return true;
//   } else {
//     // alert("Invalid email address!");

//     // document.form1.text1.focus();
//     $("#mail-valdation").text("Invalid Email-Address").css({ color: "red" });
//     return false;
//   }
// }
function paymentOptiondisabled() {
  $("#showPaymentError").text("Please Submit form").css({ color: "red" });
  setTimeout(function () {
    $("#showPaymentError").text("");
  }, 5000);
}

function submitForm() {
  let domain = window.location.hostname;
  var c_fname = $("#c_firstName").val();
  var c_lname = $("#c_lastName").val();
  var profile_pic = $(".profile-pic").attr("src");
  var q_exam = $("#Q_Exam").val();
  // var q_hticket = $("#Q_Hall_ticket").val()
  var q_yop = $("#Q_YOP").val();
  var q_medium = $("#Q_Medium").val();
  var fname = $("#F_name").val();
  var mname = $("#M_name").val();
  var date = $("#datepicker").val();
  var bsd = $("#B_SD").val();
  var gender = $("#gender").val();
  var category = $("#Category").val();
  // var larea = $("#LArea").val()
  // var lregion = $("#LRegion").val()
  // var mnm = $("#M-NM").val()
  var aincome = $("#AIncome").val();
  var ssc_st = $("#SSC-Study").val();
  // var ssc_ht = $("#SSC-Hall-ticket").val()
  var istudy = $("#I-Study").val();
  // var iht = $("#I-HT-YOP").val()
  var afc = $("#AFC").val();
  var mno = $("#Mobile-No").val();
  var email = $("#Email").val();
  var aadharno = $("#ANo").val();
  var cname = $("#CName").val();
  var dec_1 = document.getElementById("dec_1").checked;
  var dec_2 = document.getElementById("dec_2").checked;
  var error = document.getElementById("error");
  if (
    c_fname != "" &&
    c_lname != "" &&
    profile_pic != "./images/user.png" &&
    q_exam != "" &&
    // q_hticket != "" &&
    // q_yop != "" &&
    // q_medium != "" &&
    // fname != "" &&
    // mname != "" &&
    // date != "" &&
    // bsd != "" &&
    // gender != "" &&
    category != "" &&
    // larea != "" &&
    // lregion != "" &&
    // mnm != "" &&
    // aincome != "" &&
    // ssc_st != "" &&
    // ssc_ht != "" &&
    // istudy != "" &&
    // iht != "" &&
    // afc != "" &&
    mno != "" &&
    mno.length == 10 &&
    email != "" &&
    aadharno != "" &&
    aadharno.length == 14 &&
    dec_1 &&
    dec_2 &&
    cname != ""
  ) {
    $("#loading").show();
    $("#submitbtn").attr("disabled", true);
    $("p > input").css({ outline: "1px solid #dee2e6" });
    $("div > input").css({ border: "1px solid #dee2e6" });
    $("div > select").css({ border: "1px solid #dee2e6" });
    $("span > input").css({ border: "1px solid #dee2e6" });
    var userData = {
      Candidate_fname: c_fname,
      Candidate_lname: c_lname,
      Candidate_name: c_fname + " " + c_lname,
      profile_pic: profile_pic,
      Q_Exam: q_exam,
      // "Q_Hall_ticket":q_hticket,
      Q_YOP: q_yop,
      Q_Medium: q_medium,
      F_name: fname,
      M_name: mname,
      DOB: date,
      B_SD: bsd,
      gender: gender,
      Category: category,
      // "LArea":larea,
      // "LRegion":lregion,
      // "M_NM":mnm,
      AIncome: aincome,
      SSC_Study: ssc_st,
      // "SSC_Hall_ticket":ssc_ht,
      I_Study: istudy,
      // "I_HT_YOP":iht,
      AFC: afc,
      Mobile_No: mno,
      Email: email,
      ANo: aadharno,
      CName: cname,
    };
    console.log(userData);
    if (domain == "www.exafluence.education") {
      $.ajax({
        url: "https://www.exafluence.education/applyforAdmissionpayment",
        data: JSON.stringify(userData),
        contentType: "application/json;charset=UTF-8",
        type: "POST",
        success: function (response) {
          $("#loadingImgad").hide();
          $("#adminsuc").append("<div>Thanks For The Registration.</div>");
          $("#adminsuc").append(
            "<div>SV University Payment Gateway Will Activate Soon. Our Support Team Will Reach You.</div>"
          );
          $("#adminsuc").append(
            "<div>If on any queries you can reach us on :  7396866627/ 7396866628/ 7396866629.</div>"
          );
          $("#adminsuc").append(
            "<div>OR mail us on : admissions@exafluence.com.</div>"
          );
          $("#adminsuc")
            .addClass("text-success")
            .css({ "text-align": "center" });
          $("#errorFields").text("");
          $("#paymentbtn").attr(
            "onclick",
            "javascript:return paymentEnabled()"
          );
          $("#loading").hide();
          $("#submitbtn").attr("disabled", false);
          setTimeout(function () {
            $("#showPaymentError").text("");
          }, 30000);
        },
        error: function (error) {
          console.log(error);
        },
      });
    } else if (domain == "exafluence.education") {
      $.ajax({
        url: "https://exafluence.education/applyforAdmissionpayment",
        data: JSON.stringify(userData),
        contentType: "application/json;charset=UTF-8",
        type: "POST",
        success: function (response) {
          $("#loadingImgad").hide();
          //$("#adminsuc").text("Thankyou for submitting form. Now Click Paynow").addClass("text-success").css({"text-align":"center"});
          $("#adminsuc").append("<div>Thanks For The Registration.</div>");
          $("#adminsuc").append(
            "<div>SV University Payment Gateway Will Activate Soon. Our Support Team Will Reach You.</div>"
          );
          $("#adminsuc").append(
            "<div>If on any queries you can reach us on :  7396866627/ 7396866628/ 7396866629.</div>"
          );
          $("#adminsuc").append(
            "<div>OR mail us on : admissions@exafluence.com.</div>"
          );
          $("#adminsuc")
            .addClass("text-success")
            .css({ "text-align": "center" });
          $("#errorFields").text("");
          $("#paymentbtn").attr(
            "onclick",
            "javascript:return paymentEnabled()"
          );
          $("#loading").hide();
          $("#submitbtn").attr("disabled", false);
          setTimeout(() => {
            $("#adminsuc").text(" ");
          }, 30000);
        },
        error: function (error) {
          console.log(error);
        },
      });
    }
  } else {
    $("div > input").css({ border: "1px solid #dee2e6" });
    $("p > input").css({ outline: "1px solid #dee2e6" });
    $("div > select").css({ border: "1px solid #dee2e6" });
    $("span > input").css({ border: "1px solid #dee2e6" });
    $("span > input").css({ border: "1px solid #dee2e6" });
    $("#showPaymentError")
      .text("Please fill mandatory Fields")
      .css({ color: "red" });
    setTimeout(function () {
      $("#showPaymentError").text("");
    }, 3000);
    if (c_fname == "") {
      $("#c_firstName")
        .focus()
        .css({ border: "1px red solid" })
        .addClass("placeholder-color");
    } else if (c_lname == "") {
      $("#c_lastName")
        .focus()
        .css({ border: "1px red solid" })
        .addClass("placeholder-color");
    } else if (profile_pic == "./images/user.png") {
      $("#profile_pic")
        .text("Please upload Profile Picture")
        .focus()
        .css({ color: "red" });
      setTimeout(function () {
        $("#profile_pic").text("");
      }, 10000);
    } else if (q_exam == "") {
      $("#Q_Exam")
        .focus()
        .css({ border: "1px red solid" })
        .addClass("placeholder-color");
    }
    // else if(q_hticket == ""){$("#Q_Hall_ticket").focus().css({"border":"1px red solid"}).addClass('placeholder-color')}
    // else if(q_yop == ""){$("#Q_YOP").focus().css({"border":"1px red solid"}).addClass('placeholder-color')}
    // else if(q_medium == ""){$("#Q_Medium").focus().css({"border":"1px red solid"}).addClass('placeholder-color')}
    // else if(fname == ""){$("#F_name").focus().css({"border":"1px red solid"}).addClass('placeholder-color')}
    // else if(mname == ""){$("#M_name").focus().css({"border":"1px red solid"}).addClass('placeholder-color')}
    // else if(date == ""){$("#datepicker").focus().css({"border":"1px red solid"}).addClass('placeholder-color')}
    // else if(bsd == ""){$("#B_SD").focus().css({"border":"1px red solid"}).addClass('placeholder-color')}
    // else if(gender == ""){$("#gender").focus().css({"border":"1px red solid"}).addClass('placeholder-color')}
    else if (category == "") {
      $("#Category")
        .focus()
        .css({ border: "1px red solid" })
        .addClass("placeholder-color");
    }
    // else if(larea == ""){$("#LArea").focus().css({"border":"1px red solid"}).addClass('placeholder-color')}
    // else if(lregion == ""){$("#LRegion").focus().css({"border":"1px red solid"}).addClass('placeholder-color')}
    // else if(mnm == ""){$("#M-NM").focus().css({"border":"1px red solid"}).addClass('placeholder-color')}
    // else if(aincome == ""){$("#AIncome").focus().css({"border":"1px red solid"}).addClass('placeholder-color')}
    // else if(ssc_st == ""){$("#SSC-Study").focus().css({"border":"1px red solid"}).addClass('placeholder-color')}
    // else if(ssc_ht == ""){$("#SSC-Hall-ticket").focus().css({"border":"1px red solid"}).addClass('placeholder-color')}
    // else if(istudy == ""){$("#I-Study").focus().css({"border":"1px red solid"}).addClass('placeholder-color')}
    // else if(iht == ""){$("#I-HT-YOP").focus().css({"border":"1px red solid"}).addClass('placeholder-color')}
    // else if(afc == ""){$("#AFC").focus().css({"border":"1px red solid"}).addClass('placeholder-color')}
    else if (mno == "") {
      console.log("Hello");
      $("#Mobile-No")
        .focus()
        .css({ border: "1px red solid" })
        .addClass("placeholder-color");
    } else if (mno.length < 10) {
      $("#Mobile-No")
        .focus()
        .css({ border: "1px red solid" })
        .addClass("placeholder-color");
      $("#mobileError")
        .text("Please Enter ten digits of mobile number")
        .css({ color: "red" });
      setTimeout(function () {
        $("#mobileError").text("").css({ color: "red" });
      }, 4000);
    } else if (email == "") {
      $("#Email")
        .focus()
        .css({ border: "1px red solid" })
        .addClass("placeholder-color");
    } else if (aadharno == "") {
      $("#ANo")
        .focus()
        .css({ border: "1px red solid" })
        .addClass("placeholder-color");
    } else if (aadharno.length < 14) {
      $("#ANo")
        .focus()
        .css({ border: "1px red solid" })
        .addClass("placeholder-color");
      $("#AadharError")
        .text("Please Enter 12 digits of Aadhar number")
        .css({ color: "red" });
      setTimeout(function () {
        $("#AadharError").text("").css({ color: "red" });
      }, 4000);
    } else if (cname == "") {
      $("#CName")
        .focus()
        .css({ border: "1px red solid" })
        .addClass("placeholder-color");
    } else if (dec_1 == "") {
      $("#dec_1").focus().css({ outline: "1px red solid" });
    } else if (dec_2 == "") {
      $("#dec_2").focus().css({ outline: "1px red solid" });
    }
  }
}
function paymentEnabled() {
  window.location.replace("paymentpay.html");
}
