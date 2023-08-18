var number;
    document.getElementById("numberbtn").onclick = function() {
        number = document.getElementById("phonenumber").value;
        console.log(number);
        if(number.length !=10){
            window.alert("error! please enter correct number");
            
            return false;
        }
    }
    var otp1 = 7887;
var otp;

