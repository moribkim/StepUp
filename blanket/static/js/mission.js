//
// Page convertion animation
//
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

HelpBtn.addEventListener("click", () => {
    Help.style.display = "block";
});

HelpClose.addEventListener("click", () => {
    Help.style.display = "none";
});


//
// Window home page
//
const modal = document.querySelector('.mission-popup');
const modalClose = document.querySelector('.ClosePopup');
const windowBtn = document.querySelector('.Btn-window');
const footer = document.querySelector('.footer');

windowBtn.addEventListener('click', () => {
    footer.style.opacity = 0;
        
    setTimeout(() => {
        modal.style.top = '20px';
    }, 200);

    windowBtn.disabled = true;
    windowBtn.style.pointerEvents = "none";
});

modalClose.addEventListener('click', () => {
    modal.style.top = "844px";
    footer.style.opacity = 1;
    windowBtn.disabled = false;
    windowBtn.style.pointerEvents = "auto";
});

document.addEventListener("DOMContentLoaded", function() {
    let mainMissionCompleted = document.querySelector('.main-mission').getAttribute('data-completed') === 'true';
    let allSubMissions = document.querySelectorAll('.serve-mission');
    let allSubMissionsCompleted = Array.from(allSubMissions).every(mission => mission.getAttribute('data-completed') === 'true');

    if (mainMissionCompleted) {
        // 미션이 완료된 경우 바로 표시
        displayui();
    }
});

function displayui() {
    // 완료되었을 때 즉각적으로 보이기 바라는 ui
    page = "full";
}

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
