// Page Animation
document.addEventListener('DOMContentLoaded', () => {
    window.setTimeout(() => {
        document.body.classList.remove('fade');
    }, );
});

//
//Help
//
const HelpBtn = document.getElementsByClassName("Btn-help")[0];
const Help = document.getElementsByClassName("Help")[0];
const HelpClose = document.getElementsByClassName("HelpClose")[0];

//open
HelpBtn.addEventListener("click", () => {
    Help.style.display = "block";
});

//close
HelpClose.addEventListener("click", () => {
    Help.style.display = "none";
});
