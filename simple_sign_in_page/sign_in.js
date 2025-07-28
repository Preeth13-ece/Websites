let signInBtn=document.getElementById("signInBtn");
let passwordElement=document.getElementById("passwordElement");
let inputElement=document.getElementById("inputElement");
let messageText=document.getElementById("messageText");

signInBtn.onclick=function(){
    if(inputElement.value===""){
        messageText.textContent="Please Enter Username";
    }
    else if(passwordElement.value==="" & inputElement.value!==""){
        messageText.textContent="Please Enter Password";
    }
    else{
        messageText.textContent="Welcome";
    }
};
