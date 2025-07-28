let resultMsg = document.getElementById("resultMsg");
let submitBtn = document.getElementById("submitBtn");
let cityMumbai = document.getElementById("cityMumbai");
let cityDelhi = document.getElementById("cityDelhi");
let cityChennai = document.getElementById("cityChennai");
let cityHyderabad = document.getElementById("cityHyderabad");
let questionsForm = document.getElementById("questionsForm");

submitBtn.addEventListener("click", function() {
    if (cityMumbai.checked | cityDelhi.checked | cityChennai.checked | cityHyderabad.checked) {
        questionsForm.submit();
        if (cityDelhi.checked) {
            resultMsg.textContent = "Correct Answer";
        } else {
            resultMsg.textContent = "Wrong Answer!";
        }
    } else {
        resultMsg.textContent = "Please select the answer";
    }
});
cityChennai.addEventListener("change", function(event) {
    cityChennai.status = event.target.value;
});
