//
// Page convertion animation
//
document.addEventListener('DOMContentLoaded', () => {
    window.setTimeout(() => {
        document.body.classList.remove('fade');
    }, );
});

    let missionButtons = document.querySelectorAll('.main-mission, .sub-mission');
    
    missionButtons.forEach(button => {
        button.addEventListener('click', function() {

            let missionId = button.getAttribute('data-mission-id');
            let missionType = button.getAttribute('data-mission-type');
            
            fetch(`/mission/complete_mission_js/${missionId}`, {
                method: 'GET',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRFToken': getCookie('csrftoken')
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.completed) {
                    // 미션을 완료한 경우의 UI 업데이트 (예: 텍스트 변경)
                    button.style.backgroundColor = "#FFF7D9";

                    if(data.type == "main"){
                        MainMisComplete();
                    }
                }
                else {
                    // 미션을 완료하지 않은 경우의 UI 업데이트
                    button.style.backgroundColor = "#C6C993";

                    if(data.type == "main"){
                        MainMisInComplete();
                    }
                }
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

//
// Mission Popup page
//
const mainBtn = document.querySelector('.main-mission');
const misFixed = document.querySelector('.mission-fixed');
const misExplain = document.querySelector('.mission-explanation');
const mainShuf = document.querySelector('.main-shuffle');
let misExplain_content = misExplain.innerHTML;

const subNum = 3;
const subBtn = document.querySelectorAll('.sub-mission');
const subMis = document.querySelectorAll('.sub-content');
const subShuf = document.querySelectorAll('.sub-shuffle');
const record = document.querySelector('.Btn-record');

// 미션 페이지가 새로고침 되었을 때
document.addEventListener("DOMContentLoaded", function() {
    let mainMissionCompleted = mainBtn.getAttribute('data-completed') === 'true';
    if (mainMissionCompleted) {
        //메인 미션 완료 경우, 서브 각각 확인 필요
        MainMisComplete();
        mainBtn.style.backgroundColor = "#FFF7D9";
    }
    else{
        MainMisInComplete();
        mainBtn.style.backgroundColor = "#C6C993";
    }

    for(let i=0; i < subNum; i++){
        let subMissionsCompleted = subBtn[i].getAttribute('data-completed');
        console.log(subMissionsCompleted);
        if(subMissionsCompleted === "true"){
            subBtn[i].style.backgroundColor = "#FFF7D9";
        }
        else{
            subBtn[i].style.backgroundColor = "#C6C993";
        }
    }
});

//Main Mission complete
//change main mission style, activate sub mission button
const MainMisComplete = () => {
    misFixed.innerHTML = "";
    misExplain.innerHTML = "미션 완료!";

    for(let i=0; i < subNum; i++){
        subBtn[i].disabled = false;
        subBtn[i].style.backgroundImage = "none";
        subBtn[i].style.opacity = 0.9;
        subMis[i].style.opacity = 1;
        subShuf[i].style.display = "block";
    };
    //record open
    record.disabled = false;
    record.style.opacity = 0.9;
    record.style.backgroundColor = "#FFF7D9";

    //main shuffle disabled
    mainShuf.disabled = true;
    mainShuf.style.display = "none";
    mainShuf.style.backgroundImage = "none";

}

//Main Mission Incomplete
//change main mission style, deactivate serve mission button

const MainMisInComplete = () => {
    misFixed.innerHTML = "오늘 하루의 첫 미션";
    misExplain.innerHTML = misExplain_content;    

    for(let i=0; i < subNum; i++){
        subBtn[i].disabled = true;
        subBtn[i].style.opacity = 0.5;
        subMis[i].style.opacity = 0;
        subShuf[i].style.display = "none";
        setTimeout(()=>{
            subBtn[i].style.backgroundImage = "url(/static/locked-image.png)";
        }, 600);
    };
    //record open
    record.disabled = true;
    record.style.opacity = 0.5;
    record.style.backgroundColor = "#C6C993";

    //main shuffle abled
    mainShuf.disabled = false;
    mainShuf.style.display = "block";
    mainShuf.style.backgroundImage = "url(/static/big-shuffle.png)";
}
