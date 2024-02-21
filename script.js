var icon=document.querySelector(".icon i");
var navlinks=document.querySelector(".navlinks");

function toggleNav(){
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
    navlinks.classList.toggle("navlinks-active");
}


icon.addEventListener('click', function()
{

    toggleNav();
});

const form=document.getElementById("form");

let first=document.getElementById("firstname");
let nameError1=document.getElementById("error1");

function fname(){
    if(first.value===''){
        nameError1.innerHTML='first name is requried.';
        nameError1.style.color="red";
        first.style.border=" 2px solid red";
        return false;

    }
   else if(first.value.length<4 || first.value.length>=15){
        nameError1.innerHTML='firstname should min 4 and max 15 characters.';
        nameError1.style.color="red";
        first.style.border=" 2px solid red";
        return false;

    }
    else{
        nameError1.innerHTML='';
        first.style.border=" 2px solid green";
        return true;

 
}

}
let last=document.getElementById("lasttname");
let nameError2=document.getElementById("error2");

function lname(){
    if(last.value===''){
        nameError2.innerHTML='last name is requried.';
        nameError2.style.color="red";
        last.style.border=" 2px solid red";
        return false;

    }
   else if(last.value.length<4 || last.value.length>=15){
        nameError2.innerHTML='lastname should min 4 and max 15 characters.';
        nameError2.style.color="red";
        last.style.border=" 2px solid red";
        return false;

    }
    else{
        nameError2.innerHTML='';
        last.style.border=" 2px solid green";
        return true;

 
}
}
let mobnum=document.getElementById("mobnum");
let mobError=document.getElementById("error3");

function phone(){
    if(mobnum.value===''){
        mobError.innerHTML='mobile number is requried ';
        mobError.style.color="red";
        mobnum.style.border=" 2px solid red";
        return false;

    }
  
    else if (isNaN(mobnum.value)){
        mobError.innerHTML='not a valid number';
        mobError.style.color="red";
        mobnum.style.border="2px solid red.";
        return false;

    }
    else if (mobnum.value.length<10 || mobnum.value.length>12){
        mobError.innerHTML='number should be 10 digit';
        mobError.style.color="red";
        mobnum.style.border="2px solid red.";
        return false;

    }
   
   
    else{
        mobError.innerHTML='';
        mobnum.style.border=" 2px solid green";
        return true; 
}
}
let four=document.getElementById("Email");
let emailError=document.getElementById("error4");



function val_email(){
    if(four.value===''){
        emailError.innerHTML='email is requried';
        emailError.style.color="red";
        four.style.border=" 2px solid red";
        return false;

    }
   else if(!four.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML='not a valid email';
        emailError.style.color="red";
        four.style.border=" 2px solid red";
        return false;

    }
    else{
        emailError.innerHTML='';
        four.style.border=" 2px solid green";
        return true;

 
}
}
let dist=document.getElementById("district");
let districtError=document.getElementById("error5");

function val_district(){
    if(dist.value===''){
        districtError.innerHTML="district is requried.";
        districtError.style.color="red";
        dist.style.border="2px solid red";
        return false;

    }
    else{
        districtError.innerHTML='';
        district.style.border="2px solid green";
        return true;

    }
}
let pinnum=document.getElementById("pin");
let pinError=document.getElementById("error6");

function val_pincode(){
    if(pinnum.value===''){
        pinError.innerHTML='pincode is requried ';
        pinError.style.color="red";
        pinnum.style.border=" 2px solid red";
        return false;
    }
  
    else if (isNaN(pinnum.value)){
        pinError.innerHTML='not a valid pincode';
        pinError.style.color="red";
        pinnum.style.border="2px solid red.";
        return false;

    }
    else if (pinnum.value.length<6 || pinnum.value.length>6){
        pinError.innerHTML='pincode should be 6 digit';
        pinError.style.color="red";
        pinnum.style.border="2px solid red.";
        return false;
    }
   
    else{
        pinError.innerHTML='';
        pinnum.style.border=" 2px solid green";
        return true; 
}
}
form.addEventListener('submit', e => {
    e.preventDefault();
    validate();
});



function validate() {
    firstName = first.value.trim();
    lastName = last.value.trim();
    mobile = mobnum.value.trim();
    emailid = four.value.trim();
    districtName = dist.value.trim();
    pinCode = pinnum.value.trim();


   
    document.write("Name: " + firstName + " " + lastName + "<br>");
document.write("Mobile: " + mobile + "<br>");
document.write("Email: " + emailid + "<br>");
document.write("District: " + districtName + "<br>");
document.write("Pin Code: " + pinCode + "<br>");

}
var carousel=document.getElementById ("pic");
var images=["images/2.jpg","images/3.jpg","images/4.jpg","images/1.jpg"]
var num=4;


function next(){
    num++;
   console.log("step1");
   console.log( "num=",num);
    if(num>=images.length){
        num=0;
       console.log("step2");
       console.log("num",num);
       carousel.src=images[num]
        console.log("num",num);  
    }
    else{
       console.log("step3");
       carousel.src=images[num]
        console.log("num",num);

    }
                    
};
function back(){
    num--;
    if(num<0){
        num=images.length-1;
        carousel.src=images[num]
            }
            else{
              carousel.src=images[num]
            }

};



