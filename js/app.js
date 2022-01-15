const btn = document.querySelector(".btn-start");
const calendarContainer = document.querySelector(".container");
const calendarMonth = 24;
const countDown = document.querySelector(".countDown");
const targetData = new Date("Dec 24, 2021, 00:00:01").getTime();

const interval = setInterval(() =>{
    
    const now =  new Date().getTime();

    const timeLeft = targetData - now;
    const days = Math.floor(timeLeft/(1000*60*60*24));
    const hours = Math.floor(timeLeft/(1000*60*60)%24);
    const minutes = Math.floor(timeLeft/(1000*60)%60);
    const seconds = Math.floor(timeLeft/(1000)%60);


    countDown.innerHTML = `
    <div><span>${days} päeva</span></div>
    <div><span>${hours} tundi</span></div>
    <div><span>${minutes} minutid</span></div>
    <div><span>${seconds} sekundit</span></div>
    `
},1000);


btn.addEventListener("click",(event)=>{

    for (let i = 0; i < calendarMonth; i++) {
        const calendarDoor = document.createElement("div");       
        calendarDoor.classList.add("image");
        const calendarDoorText = document.createElement("div");

        calendarDoorText.classList.add("text");
        calendarDoor.style.gridArea = `day${i+1}`;
        calendarDoorText.innerHTML = i+1;

        calendarDoor.appendChild(calendarDoorText);
        calendarContainer.appendChild(calendarDoor);

        let pickNumber = i+1
        let picPath = `./img/img${pickNumber}.jpg`
        calendarDoorText.addEventListener("click",(event) =>{
            event.target.parentNode.style.backgroundImage = `url("${picPath}")`;
            event.target.style.opacity = 0;
            event.target.style.backgroundColor = "#333";
            })
        }

    event.preventDefault();

})