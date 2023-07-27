const appBody = document.getElementsByClassName("appBody")[0];
const winBtn = document.getElementsByClassName("windowBtn")[0];
const homeImg = appBody.style.backgroundImage;

let homeState;
if(homeImg === "url(../images/home-bright-open.png)"){
    homeState = "bright";
}
else{
    homeState = "dark";
}

winBtn.addEventListener("click", () => {
    if(homeState === "dark"){
        appBody.style.backgroundImage = "url(../images/home-bright-open.png)"
        homeState = "bright";

        setTimeout(() => {
            location.href = 'window.html';
        }, 1000);
    }
});
