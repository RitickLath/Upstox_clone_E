
    document.getElementById("subtn").onclick = function() {
        otp = document.getElementById("otp").value;
        var ottp = 7887;
        
        if(otp ==ottp){
            window.alert("Login Verified");
        
        }
        else if(otp == 7777){
            window.alert("Login Verified");
        }
        else{
            window.alert("Wrong Otp");
        }
        }
    
        var pass1 = document.getElementById("password1").value;
        var pass2 = document.getElementById("password2").value;
        if(pass1!=pass2){
            window.alert("confirm password doesnt match");
        }