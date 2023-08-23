document.addEventListener('DOMContentLoaded', () => {
    window.setTimeout(() => {
        document.body.classList.remove('fade');
    }, );
});

const appBody = document.getElementsByClassName("appBody")[0];
const winBtn = document.getElementsByClassName("windowBtn")[0];
const homeImg = appBody.style.backgroundImage;

let homeState;
if(homeImg === "url(../home-bright-open.png)"){
    homeState = "bright";
}
else{
    homeState = "dark";
}

winBtn.addEventListener("click", () => {
    if(homeState === "dark"){
        appBody.style.backgroundImage = "url(../home-bright-open.png)"
        homeState = "bright";

        setTimeout(() => {
            // location.href = "{% url 'mission_list' %}";
        }, 1000);
    }
});

const HelpBtn = document.getElementsByClassName("Btn-help")[0];
const Help = document.getElementsByClassName("Help")[0];
const HelpClose = document.getElementsByClassName("HelpClose")[0];

HelpBtn.addEventListener("click", () => {
    Help.style.display = "block";
});

HelpClose.addEventListener("click", () => {
    Help.style.display = "none";
});

