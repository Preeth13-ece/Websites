let speedTypingTest=document.getElementById("speedTypingTest");
let timer=document.getElementById("timer");
let quoteDisplay=document.getElementById("quoteDisplay");
let result=document.getElementById("result");
let quoteInput=document.getElementById("quoteInput");
let submitBtn=document.getElementById("submitBtn");
let resetBtn=document.getElementById("resetBtn");
let spinner=document.createElement("div");
spinner.className = "spinner-border d-none";
let count=0;
let time=0;
let istime=false;
function starttimer(){
     time=setInterval(function(){
     count++;
     timer.textContent =count;
    },1000);
}
function funa(){
    spinner.classList.add("d-none");
    timer.textContent =count;
    let options={
        method:"GET"
    };
    fetch("https://apis.ccbp.in/random-quote",options)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        quoteDisplay.textContent=data.content;
    });
    
}
submitBtn.addEventListener("click",function(){
        if(quoteInput.value===quoteDisplay.value){
            clearInterval(time);
            result.textContent="success";
        }
        else{
            result.textContent="error";
        }
    });
    resetBtn.addEventListener("click", function () {
        clearInterval(time);
        count = 0;
        timer.textContent = "0";
        quoteInput.value = "";
        result.textContent = "";
        funa(); // reload new quote
  });

quoteInput.addEventListener("input", function () {
    if (!istime) {
        starttimer();
        istime = true;
    }
});
window.addEventListener("load",function(){
    spinner.classList.remove("d-none");
    speedTypingTest.appendChild(spinner);
    starttimer(count);
    funa();
});
