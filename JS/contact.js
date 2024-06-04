//Contact us form
function validation(){
    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let phone= document.getElementById("phone").value;
    let message= document.getElementById("message").value;
    let emailregex=/\w+@[a-z]+\.[a-z]{3,4}/;
    let phoneregex = /\d{11}/;
    if(name == ""){
        document.getElementById("nameerror").innerText="Must enter Your Name";
    }else{
        document.getElementById("nameerror").innerText=" ";

    }
    if(email == ""){
        document.getElementById("emailerror").innerText="Must enter Your Email";
    }else if(emailregex.test(email)){
        document.getElementById("emailerror").innerText="";
    }
    else{
        document.getElementById("emailerror").innerText="Invalid Email";

    }
    if(phone == ""){
        document.getElementById("phoneerror").innerText="Must enter Your Phone Number";
    }else if(phoneregex.test(phone)){
        document.getElementById("phoneerror").innerText="";
    }
    else{
        document.getElementById("phoneerror").innerText="Invalid phone Number";

    }
    if(message == ""){
        document.getElementById("messageerror").innerText="Enter your message here";
    }else{
        document.getElementById("messageerror").innerText=" ";

    }
}