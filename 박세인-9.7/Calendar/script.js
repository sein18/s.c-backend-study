 (function() {
    'use strict';

    const nowdate = new Date(); // 현재시간
    const date = new Date(); // 현재시간
    const prevdate = new Date(); 
    const nextdate = new Date(); 
    let weekName = ['일','월','화','수','목','금','토'];

    
    // console.log(date); 
    // console.log(date.getFullYear()); //년도 
    // console.log(date.getMonth() + 1); // 월 - getMonth()의 반환값이 0 ~ 11이기 때문에 +1을 해주어야 된다.
    // console.log(date.getDate()); // 일
    // console.log(date.getDay()); // 요일
    // console.log(date.getHours()); // 시간
    // console.log(date.getMinutes()); // 분
    // console.log(date.getSeconds()); // 초
    // console.log(date.getMilliseconds()); // 밀리초

    // console.log(date.toLocaleDateString());
    // console.log(date.toLocaleTimeString());
    // console.log(date.toLocaleString());

    document.querySelector("h1").innerText = `${ date.getFullYear()}년  ${date.getMonth() + 1}월`;
    document.querySelector("P").innerText = `TODAY ${nowdate.toLocaleDateString()}`;
    

    document.querySelector('i[class="fas fa-angle-left prev"]').addEventListener('click',function(event){
        console.log(date.setMonth(date.getMonth()-1));
        if(date.getMonth());
        prevdate.setMonth(date.getMonth());
        // nextdate = date. set
    });
    
    
    document.querySelector('i[class="fas fa-angle-right next"]').addEventListener('click',function(event){
        console.log(date.getMonth());
        if(date.getMonth());
        prevdate = date.setMonth(date.getMonth());
        // nextdate = date. set
       
    }); 
    //여기부터 진행
    // const divbtns = document.querySelectorAll('div[class=days] div') 
    // divbtns

    // const btns = document.querySelectorAll('.btn-item');
	// btns.forEach(btn => {
	// 	btn.addEventListener('click', () => {
	// 		btn.classList.toggle('active');
	// 	});
	// });

     

})();

function ck(date){
    
}