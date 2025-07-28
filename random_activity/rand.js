let getActivityBtn=document.getElementById("getActivityBtn");
let spinner=document.getElementById("spinner");
let activityName=document.getElementById("activityName");
let activityType=document.getElementById("activityType");
let activityImg=document.getElementById("activityImg");

getActivityBtn.addEventListener("click",function(){
    let options={
        method:"GET"
    };
    fetch("https://apis.ccbp.in/random-activity",options)
    .then(function(response){
        spinner.classList.remove("d-none");
        return response.json();
    })
    .then(function(son){
        spinner.classList.add("d-none");
        activityName.textContent=son.activity;
        activityType.textContent=son.type;
        activityImg.src=son.image;
    });
});
