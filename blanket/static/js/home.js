const appBody = document.getElementsByClassName("appBody")[0];
const winBtn = document.getElementsByClassName("windowBtn")[0];
const homeImg = appBody.style.backgroundImage;


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
        if (true) {
            // when brightening is true - change background bright
            appBody.style.backgroundImage = "url(/static/home-bright-open.png)"
        }
        else {
            // when brightening is false - change background dark
            appBody.style.backgroundImage = "url(/static/home-dark-close.png)"
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
        appBody.style.backgroundImage = "url(../home-bright-open.png)"
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

