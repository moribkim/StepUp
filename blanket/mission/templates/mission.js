//
// Window home page
//
const modal = document.querySelector('.mission-popup');
const modalSwitch = document.querySelector('.popup-switch');
const windowBtn = document.querySelector('.Btn-window');
const footer = document.querySelector('.footer');
let page = "close";

windowBtn.addEventListener('click', () => {
    if(page === "close"){
        footer.style.opacity = 0;
        
        setTimeout(() => {
            modal.style.top = '360px';
            page = "half";
        }, 200);

        windowBtn.disabled = true;
        windowBtn.style.pointerEvents = "none";
    }
});

modalSwitch.addEventListener('click', () => {
    if(page === "half"){
        modal.style.top = '20px';
        page ="full";
    }
    else if(page ==="full"){
        modal.style.top = "844px";
        footer.style.opacity = 1;
        page = "close";
        windowBtn.disabled = false;
        windowBtn.style.pointerEvents = "auto";
    }
});