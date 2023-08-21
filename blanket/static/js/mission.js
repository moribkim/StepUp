//
// Page convertion animation
//
document.addEventListener('DOMContentLoaded', () => {
    window.setTimeout(() => {
        document.body.classList.remove('fade');
    }, );
});


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

//
// Mission Popup page
//
const mainBtn = document.querySelector('.main-mission');
const misFixed = document.querySelector('.mission-fixed');
const misExplain = document.querySelector('.mission-explanation');

const serNum = 3;
const serBtn = document.querySelectorAll('.serve-mission');
const serMis = document.querySelectorAll('.serve-content');
const serShuf = documnet.querySelectorAll('.serve-shuffle')
const record = document.querySelector('.Btn-record');

//Main Mission complete
//change main mission style, activate serve mission button
let mainComplete = false;

const missionComplete = () => {
    mainBtn.style.backgroundColor = "#FFF7D9";
    misFixed.innerHTML = "미션 완료!";
    misExplain = "";

    for(let i=0; i < serNum; i++){
        serBtn[i].disabled = false;
        serBtn[i].style.backgroundImage = "none";
        serBtn[i].style.opacity = 0.9;
        serMis[i].style.opacity = 1;
        serShuf[i].style.display = 'block';
    };
    //record open
    record.disabled = false;
    record.style.opacity = 0.9;
    record.style.backgroundColor = "#FFF7D9";
}

//Main Mission Incomplete
//change main mission style, deactivate serve mission button
const missionInComplete = () => {
    mainBtn.style.backgroundColor = "#C6C993";
    misFixed.innerHTML = "오늘 하루의 첫 미션";
    misExplain.innerHTML = "베개와 이불을 제자리로 정돈하기";    

    for(let i=0; i < serNum; i++){
        serBtn[i].disabled = true;
        serBtn[i].style.opacity = 0.5;
        serMis[i].style.opacity = 0;
        serShuf[i].style.display = 'none';
        setTimeout(()=>{
            serBtn[i].style.backgroundImage = "url(../images/locked-image.png)";
        }, 600);
    };
    //record open
    record.disabled = true;
    record.style.opacity = 0.5;
    record.style.backgroundColor = "#C6C993";
}

//Main mission complete and change contents
mainBtn.addEventListener('click', () => {
    console.log(mainComplete);
    if(mainComplete === true){
        mainComplete = false;
        missionInComplete();
    }
    else if(mainComplete === false){
        mainComplete = true;
        missionComplete();
    }
});

//Serve mission complete and change color
for(let i=0; i < serNum; i++){
    serBtn[i].addEventListener('click', () => {
        serBtn[i].style.backgroundColor = "#FFF7D9";
    });
};
