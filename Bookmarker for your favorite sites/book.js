let bookmarkForm=document.getElementById("bookmarkForm");
let siteNameInput=document.getElementById("siteNameInput");
let siteUrlInput=document.getElementById("siteUrlInput");
let submitBtn=document.getElementById("submitBtn");
let siteNameErrMsg=document.getElementById("siteNameErrMsg");
let siteUrlErrMsg=document.getElementById("siteUrlErrMsg");
let bookmarksList=document.getElementById("bookmarksList");

bookmarkForm.addEventListener("submit",function(event){
    event.preventDefault();
    });
    siteNameInput.addEventListener("change",function(){
         if(siteNameInput.value===""){
        siteNameErrMsg.textContent="Required*";
        siteNameErrMsg.classList.add("error");
         }
    });
   
    siteUrlInput.addEventListener("change",function(){
         if(siteUrlInput.value===""){
        siteUrlErrMsg.textContent="Required*";
        siteUrlErrMsg.classList.add("error");
    }
    });

submitBtn.addEventListener("click",function(){
    let isValid = true;
    if(siteUrlInput.value===""){
        siteUrlErrMsg.textContent="Required*";
        siteUrlErrMsg.classList.add("error");
        isValid=false;
     }
       if(siteNameInput.value===""){
        siteNameErrMsg.textContent="Required*";
        siteNameErrMsg.classList.add("error");
        isValid=false;
    }
    
    if(isValid){
        let listel=document.createElement("li");
        listel.classList.add("listel");
        listel.textContent=siteNameInput.value;
        bookmarksList.appendChild(listel);
        let anchorel=document.createElement("a");
        anchorel.href=siteUrlInput.value;
        anchorel.target="_blank";
        anchorel.textContent = siteUrlInput.value; 
        listel.appendChild(anchorel);
        siteNameErrMsg.textContent="";
        siteUrlErrMsg.textContent=""
    }
