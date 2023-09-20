const appBody = document.getElementsByClassName("appBody")[0];
const winBtn = document.getElementsByClassName("windowBtn")[0];
const homeImg = appBody.style.backgroundImage;
let dark = true;

// When dom loaded
document.addEventListener('DOMContentLoaded', () => {

    // Fade Animation
    window.setTimeout(() => {
        document.body.classList.remove('fade');
    }, );

    // Fetch brightening data
    fetch(`/brightening`, {
        method: 'GET',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRFToken': getCookie('csrftoken')
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.brightness) {
            // when brightening is true - change background bright
            appBody.style.backgroundImage = "url(/static/home-bright-open.png)"
            dark = false;
        }
        else {
            // when brightening is false - change background dark
            appBody.style.backgroundImage = "url(/static/home-dark-close.png)"
            dark = true;
        }
    });
});

// cookie function for fetch
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

// Change background Img to bright image when click window
winBtn.addEventListener("click", () => {
    let mission_url = winBtn.getAttribute("data-mission-url");

    if(dark){
        appBody.style.backgroundImage = "url(/static/home-bright-open.png)";
        dark = false;
        
        setTimeout(() => {
            window.location.href = mission_url;
        }, 500);
    }
    else{
        window.location.href = mission_url;
    }
});

//
//Help
//
const HelpBtn = document.getElementsByClassName("Btn-help")[0];
const Help = document.getElementsByClassName("Help")[0];
const HelpClose = document.getElementsByClassName("HelpClose")[0];

HelpBtn.addEventListener("click", () => {
    Help.style.display = "block";
});

HelpClose.addEventListener("click", () => {
    Help.style.display = "none";
});

