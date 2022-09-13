   
(function() {
    'use strict';
 
    // 배송지명
    document.getElementById('shipaddr').addEventListener('blur', function(event) {
        const value = this.value,
              elParent = this.parentElement,
              parentClassList = elParent.classList;

        if(value) {
            if(value.length>20) {
                parentClassList.add('error');
                parentClassList.remove('success');
            }else{
                parentClassList.add('success');
                parentClassList.remove('error');
            }
        }else{
            parentClassList.remove('success', 'error');
        }
    });
    
    // 받으시는 분
    document.getElementById('username').addEventListener('blur', function(event) {
        const value = this.value,
              elParent = this.parentElement,
              parentClassList = elParent.classList;

        if(value) {
            if(value.length>10) {
                parentClassList.add('error');
                parentClassList.remove('success');
            }else{
                parentClassList.add('success');
                parentClassList.remove('error');
            }
        }else{
            parentClassList.remove('success', 'error');
        }
    });
    //번호 text on//off
    document.getElementById('uphonefirst').addEventListener('change', function(){

        if(this.value){
            document.querySelector('#uphonemid').disabled=false;
            document.querySelector('#uphonelast').disabled=false;
        }else{
            document.querySelector('#uphonemid').disabled=true;
            document.querySelector('#uphonemid').value='';
            document.getElementById('uphonemid').parentElement.classList.remove('success', 'error');

            document.querySelector('#uphonelast').disabled=true; 
            document.querySelector('#uphonelast').value='';
            document.getElementById('uphonelast').parentElement.classList.remove('success', 'error');
        }
    });

    
    // 휴대폰번호(번호 4자리 오류)
    document.getElementById('uphonemid').addEventListener('blur', function(event){
        const value = this.value,
        elParent = this.parentElement,
        parentClassList = elParent.classList;
        
        if(value) {
            if(value.length!=4 || !(/^[0-9]*$/.test(value))) {
                parentClassList.add('error');
                parentClassList.remove('success');
            }else{
                parentClassList.add('success');
                parentClassList.remove('error');
            }
        }else{
            parentClassList.remove('success', 'error');
        }
    });
    
    // 휴대폰번호(번호 4자리 오류)
    document.getElementById('uphonelast').addEventListener('blur', function(event){
        const value = this.value,
              elParent = this.parentElement,
              parentClassList = elParent.classList;

        if(value) {
            if(value.length!=4 || !(/^[0-9]*$/.test(value))) {
                parentClassList.add('error');
                parentClassList.remove('success');
            }else{
                parentClassList.add('success');
                parentClassList.remove('error');
            }
        }else{
            parentClassList.remove('success', 'error');
        }
    });

    document.querySelector('#btn_find').addEventListener('click',function(event){
        event.preventDefault();
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
                // 예제를 참고하여 다양한 활용법을 확인해 보세요.
                let postcode = data.zonecode;
                let road = data.jibunAddress;
        
                console.log(postcode+"  "+road);
                document.getElementById('postcode').value = postcode;
                document.getElementById('road').value = road;
                document.getElementById('detail').parentElement.classList.add('error');
                document.getElementById('detail').focus();
            }
        }).open();
        
    });   

    document.getElementById('detail').addEventListener('blur', function(event){
        const value = this.value,
              elParent = this.parentElement,
              parentClassList = elParent.classList;
        if(value) {
            parentClassList.add('success');
            parentClassList.remove('error');
        }else{
           parentClassList.add('error');
            parentClassList.remove('success');
        }
    });

    document.getElementById('form').addEventListener('submit', function(event) {
        
        // 배송지 shipaddr,수령인 username, 연락처 uphonefirst,uphonemid,uphonelast
        // 주소 postcode road detail 기본 배송지 defaultYn 배송정보 수집 privacyYn
        event.preventDefault();
        const shipaddr = document.getElementById('shipaddr').value;
        const username = document.getElementById('username').value;
        const uphonefirst = document.getElementById('uphonefirst').value;
        const uphonemid = document.getElementById('uphonemid').value;
        const uphonelast = document.getElementById('uphonelast').value;
        const postcode = document.getElementById('postcode').value;
        const road = document.getElementById('road').value;
        const detail = document.getElementById('detail').value;
        const defaultYn = document.getElementById('defaultYn').checked? 'Y' : 'N';
        const privacyYn = document.getElementById('privacyYn').checked? 'Y' : 'N';

        let err = document.getElementsByClassName('field error');
        
        console.log(shipaddr+" "+username+" "+uphonefirst+" "+uphonemid+" "+uphonelast+" "+postcode
        +" "+road+" "+detail+" "+defaultYn+" "+privacyYn);
        if(err.length||!shipaddr||!username||!uphonefirst||!uphonemid||!uphonelast||!postcode||!road||!detail||privacyYn=='N'){
            event.preventDefault();
            alert("정보를 알맞게 입력하세요.");
            return;
        }

        console.log(shipaddr+" "+username+" "+uphonefirst+" "+uphonemid+" "+uphonelast+" "+postcode
        +" "+road+" "+detail+" "+defaultYn+" "+privacyYn);

        const ck = {shipaddr:shipaddr,
            username:username,
            uphone:`${uphonefirst}-${uphonemid}-${uphonelast}`,
            post:`(${postcode}) ${road} ${detail}`,
            defaultYn:defaultYn,
            privacyYn:privacyYn
        }
        let arr = [];

        if(!localStorage.getItem('arr')){
            arr.push(ck);
            localStorage.setItem('arr',JSON.stringify(arr));
        }else{
            arr = JSON.parse(localStorage.getItem('arr'));
            arr.push(ck);
            localStorage.setItem('arr',JSON.stringify(arr));
            console.log(arr);
        }

        console.log(ck);
    //     const ck = [document.getElementById('postcode'),
    //     document.getElementById('username'),
    //     document.getElementById('uphonefirst')+"-"+document.getElementById('uphonemid')+"-"+document.getElementById('uphonelast'),
    //     "("+document.getElementById('postcode')+") "+document.getElementById('road')+" "+document.getElementById('detail'),
    // ]

    });
})();
 