$(".state").change(function(){
    $(".dist").hide();
    let state = $(".state").val();
    if(state == "Andhra Pradesh")
    {
        $(".AP").show();
    }
    else if(state == "Arunachal Pradesh")
    {
        $(".ARP").show();
    }
    else if(state == "Assam")
    {
        $(".AS").show();
    }
    else if(state == "Bihar")
    {
        $(".BR").show();
    }
    else if(state == "Chhattisgarh")
    {
        $(".CH").show();
    }
    else if(state == "Goa")
    {
        $(".Goa").show();
    }
    else if(state == "Gujarat")
    {
        $(".Gu").show();
    }
    else if(state == "Haryana")
    {
        $(".HA").show();
    }
    else if(state == "Himachal Pradesh")
    {
        $(".HP").show();
    }
    else if(state == "Jharkhand")
    {
        $(".JH").show();
    }
    else if(state == "Karnataka")
    {
        $(".KA").show();
    }
    else if(state == "Kerala")
    {
        $(".KE").show();
    }
    else if(state == "Madhya Pradesh")
    {
        $(".MP").show();
    }
    else if(state == "Maharashtra")
    {
        $(".MH").show();
    }
    else if(state == "Manipur")
    {
        $(".MA").show();
    }
    else if(state == "Meghalaya")
    {
        $(".ME").show();
    }
    else if(state == "Mizoram")
    {
        $(".MZ").show();
    }
    else if(state == "Nagaland")
    {
        $(".NL").show();
    }
    else if(state == "Odisha")
    {
        $(".OD").show();
    }
    else if(state == "Punjab")
    {
        $(".PJ").show();
    }
    else if(state == "Rajasthan")
    {
        $(".RJ").show();
    }
    else if(state == "Sikkim")
    {
        $(".SK").show();
    }
    else if(state == "Tamil Nadu")
    {
        $(".TN").show();
    }
    else if(state == "Telangana")
    {
        $(".TS").show();
    }
    else if(state == "Tripura")
    {
        $(".TP").show();
    }
    else if(state == "Uttar Pradesh")
    {
        $(".UP").show();
    }
    else if(state == "Uttarakhand")
    {
        $(".UK").show();
    }
    else if(state == "West Bengal")
    {
        $(".WB").show();
    }

});

window.onload = function () {
    //Reference the DropDownList.
    var ddlYears = document.getElementById("ddlYears");

    //Determine the Current Year.
    var currentYear = (new Date()).getFullYear();

    //Loop and add the Year values to DropDownList.
    for (var i = 1950; i <= currentYear; i++) {
        var option = document.createElement("OPTION");
        option.innerHTML = i;
        option.value = i;
        ddlYears.appendChild(option);
    }
    var SSCStudy = document.getElementById("SSC-Study");

    //Determine the Current Year.
    var currentYear1 = (new Date()).getFullYear();

    //Loop and add the Year values to DropDownList.
    for (var i = 1950; i <= currentYear1; i++) {
        var option1 = document.createElement("OPTION");
        option1.innerHTML = i;
        option1.value = i;
        SSCStudy.appendChild(option1);
    }
    var IStudy = document.getElementById("I-Study");

    //Determine the Current Year.
    var currentYear2 = (new Date()).getFullYear();

    //Loop and add the Year values to DropDownList.
    for (var i = 1950; i <= currentYear2; i++) {
        var option2 = document.createElement("OPTION");
        option2.innerHTML = i;
        option2.value = i;
        IStudy.appendChild(option2);
    }
   
};
