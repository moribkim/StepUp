//
// Page convertion animation
//
// document.addEventListener('DOMContentLoaded', () => {
//     window.setTimeout(() => {
//         document.body.classList.remove('fade');
//     }, );
// });

//
//Help
//

document.addEventListener("DOMContentLoaded", function() {

    let missionButtons = document.querySelectorAll('.main-mission, .sub-mission');
    missionButtons.forEach(button => {

        button.addEventListener('click', function(event) {
            event.preventDefault();  // 기본 이벤트를 중지합니다.

            let missionId = button.getAttribute('data-mission-id');

            fetch(`/complete_mission_js/${missionId}/`, {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRFToken': getCookie('csrftoken')
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.completed) {
                    // 미션을 완료한 경우의 UI 업데이트 (예: 텍스트 변경)
                    missionComplete();
                } else {
                    // 미션을 완료하지 않은 경우의 UI 업데이트
                    missionInComplete();
                }
            });
        });

    });
});

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

// 미션 페이지가 새로고침 되었을 때
document.addEventListener("DOMContentLoaded", function() {
    let mainMissionCompleted = document.querySelector('.main-mission').getAttribute('data-completed') === 'true';
    let allSubMissions = document.querySelectorAll('.sub-mission');

    modal.style.display = "flex";
    if (mainMissionCompleted === false) {
        missionInComplete();
    }
    else{
        missionComplete();
    }
});


// function displayui() {
//     // 미완료되었을 때 즉각적으로 보이기 바라는 ui, 팝업창의 상태
//     modal.style.transition = "top 1s cubic-bezier(0.2, .5, .5, 1)";
//     modal.style.top = "844px";
//     footer.style.opacity = 1;
//     windowBtn.disabled = false;
//     windowBtn.style.pointerEvents = "auto";
// }

//
// Mission Popup page
//

const ReloadBtn = () => {
    $(".mission-popup:button").load(location.href + " .mission-popup:button");
}

const mainBtn = document.querySelector('.main-mission');
const misFixed = document.querySelector('.mission-fixed');
const misExplain = document.querySelector('.mission-explanation');

const subNum = 3;
const subBtn = document.querySelectorAll('.sub-mission');
const subMis = document.querySelectorAll('.sub-content');
const subShuf = document.querySelectorAll('.sub-shuffle');
const record = document.querySelector('.Btn-record');

//Main Mission complete
//change main mission style, activate sub mission button
let mainComplete = false;

const missionComplete = () => {
    ReloadBtn();
    mainBtn.style.backgroundColor = "#FFF7D9";
    misFixed.innerHTML = "";
    misExplain.innerHTML = "미션 완료!";

    for(let i=0; i < subNum; i++){
        subBtn[i].disabled = false;
        subBtn[i].style.backgroundImage = "none";
        subBtn[i].style.opacity = 0.9;
        subMis[i].style.opacity = 1;
        subShuf[i].style.display = 'block';
    };
    //record open
    record.disabled = false;
    record.style.opacity = 0.9;
    record.style.backgroundColor = "#FFF7D9";
}

//Main Mission Incomplete
//change main mission style, deactivate serve mission button
const missionInComplete = () => {
    ReloadBtn();
    mainBtn.style.backgroundColor = "#C6C993";
    misFixed.innerHTML = "오늘 하루의 첫 미션";
    misExplain.innerHTML = "베개와 이불을 제자리로 정돈하기";    

    for(let i=0; i < subNum; i++){
        subBtn[i].disabled = true;
        subBtn[i].style.opacity = 0.5;
        subMis[i].style.opacity = 0;
        subShuf[i].style.display = 'none';
        setTimeout(()=>{
            subBtn[i].style.backgroundImage = "url(/static/locked-image.png)";
        }, 600);
    };
    //record open
    record.disabled = true;
    record.style.opacity = 0.5;
    record.style.backgroundColor = "#C6C993";
}

//Sub mission complete and change color
for(let i=0; i < subNum; i++){
    subBtn[i].addEventListener('click', () => {
        subBtn[i].style.backgroundColor = "#FFF7D9";
    });
};
