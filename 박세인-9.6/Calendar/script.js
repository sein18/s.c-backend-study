 (function() {
    'use strict';

    const date = new Date(); // 현재시간
    var firstDate;
    var lastDate;
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
    document.querySelector("P").innerText = `TODAY ${date.toLocaleDateString()}`;
    

    document.querySelector('i[class="fas fa-angle-left prev"]').addEventListener('click',function(event){
        if(date.getMonth()!=0){
            date.setMonth(date.getMonth()-1);

            firstDate = new Date( date.getFullYear(), date.getMonth(), 1);
            lastDate = new Date( date.getFullYear(),date.getMonth()+1,0).getDate();

            console.log(firstDate+"   "+lastDate);
        }else{
            date.setFullYear( date.getFullYear() - 1);
            date.setMonth(date.getMonth()+11);

            firstDate = new Date( date.getFullYear(), date.getMonth(), 1);
            lastDate = new Date( date.getFullYear(),date.getMonth()+1,0).getDate();

            console.log(firstDate+"   "+lastDate);
        }

        document.querySelector("h1").innerText = `${ date.getFullYear()}년  ${date.getMonth() + 1}월`;
        document.querySelector("P").innerText = `TODAY ${date.toLocaleDateString()}`;
        
        let firstday = firstDate.getDay();
        let temp = 1;
        let nextday = 1;
        let prevlastday =new Date( date.getFullYear(), date.getMonth(), 0).getDate();
        prevlastday=prevlastday-firstday+1;
        let chil = document.querySelector('div[class="days"]');
        while(chil.childNodes[0]){
            chil.childNodes[0].remove();
        }
        for(let i=0;i<=4;i++){
            for(let j=0;j<=6;j++){
                if(temp<=lastDate){
                    if(i == 0 && j < firstday){
                        let app = document.createElement('div');
                        app.setAttribute('class','prev-date'); 
                        app.innerText=prevlastday++;
                        chil.append(app);
                    }else if(j==0){
                        let app = document.createElement('div');
                        app.setAttribute('class','sun'); 
                        app.innerText=temp++;
                        chil.append(app);
                    }else if(j==6){
                        let app = document.createElement('div');
                        app.setAttribute('class','sat'); 
                        app.innerText=temp++;
                        chil.append(app);
                    }else{
                        let app = document.createElement('div');
                        app.innerText=temp++;
                        chil.append(app);
                    }
                }else{
                    let app = document.createElement('div');
                        app.setAttribute('class','next-date'); 
                        app.innerText=nextday++;
                        chil.append(app);
                }
            }
        }
    });


    document.querySelector('i[class="fas fa-angle-right next"]').addEventListener('click',function(event){
        
        if(date.getMonth()!=11){
            date.setMonth(date.getMonth()+1);
            
            firstDate = new Date( date.getFullYear(),date.getMonth(), 1);
            lastDate = new Date( date.getFullYear(),date.getMonth()+1,0).getDate();

            console.log(firstDate+"   "+lastDate);
        }else{
            date.setFullYear( date.getFullYear() + 1);
            date.setMonth(date.getMonth()-11);

            firstDate = new Date( date.getFullYear(), date.getMonth(), 1);
            lastDate = new Date( date.getFullYear(),date.getMonth()+1,0).getDate();

            console.log(firstDate+"   "+lastDate);
        }

        document.querySelector("h1").innerText = `${ date.getFullYear()}년  ${date.getMonth() + 1}월`;
        document.querySelector("P").innerText = `TODAY ${date.toLocaleDateString()}`;
        
        let firstday = firstDate.getDay();
        let temp = 1;
        let nextday = 1;
        let prevlastday =new Date( date.getFullYear(), date.getMonth(), 0).getDate();
        prevlastday=prevlastday-firstday+1;
        let chil = document.querySelector('div[class="days"]');
        while(chil.childNodes[0]){
            chil.childNodes[0].remove();
        }
        for(let i=0;i<=4;i++){
            for(let j=0;j<=6;j++){
                if(temp<=lastDate){
                    if(i == 0 && j < firstday){
                        let app = document.createElement('div');
                        app.setAttribute('class','prev-date'); 
                        app.innerText=prevlastday++;
                        chil.append(app);
                    }else if(j==0){
                        let app = document.createElement('div');
                        app.setAttribute('class','sun'); 
                        app.innerText=temp++;
                        chil.append(app);
                    }else if(j==6){
                        let app = document.createElement('div');
                        app.setAttribute('class','sat'); 
                        app.innerText=temp++;
                        chil.append(app);
                    }else{
                        let app = document.createElement('div');
                        app.innerText=temp++;
                        chil.append(app);
                    }
                }else{
                    let app = document.createElement('div');
                        app.setAttribute('class','next-date'); 
                        app.innerText=nextday++;
                        chil.append(app);
                }
            }
        }
    }); 
})();