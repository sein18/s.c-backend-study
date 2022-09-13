   
(function() {
    'use strict';
    console.log(localStorage.getItem('useridx'));
    let useridx = Number(localStorage.getItem('useridx'));

    let arr = localStorage.getItem('arr') ? JSON.parse(localStorage.getItem('arr')):[];
    let updateuser;
    let idxnum;

    for(let i=0;i<arr.length;i++){
        if(useridx===arr[i].index){
            updateuser=arr[i];
            idxnum=i;
        }
    }

    document.getElementById('shipaddr').value = updateuser.shipaddr;
    document.getElementById('username').value = updateuser.username;
    document.getElementById('uphonefirst').value = updateuser.uphonefirst;
    document.getElementById('uphonemid').value = updateuser.uphonemid;
    document.getElementById('uphonelast').value = updateuser.uphonelast;
    document.getElementById('postcode').value = updateuser.postcode;
    document.getElementById('road').value = updateuser.road;
    document.getElementById('detail').value = updateuser.detail;


    console.log(updateuser);
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
            parentClassList.add('error');
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
            parentClassList.add('error');
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
        updateuser.shipaddr = document.getElementById('shipaddr').value;
        updateuser.username = document.getElementById('username').value;
        updateuser.uphonefirst = document.getElementById('uphonefirst').value;
        updateuser.uphonemid = document.getElementById('uphonemid').value;
        updateuser.uphonelast = document.getElementById('uphonelast').value;
        updateuser.postcode = document.getElementById('postcode').value;
        updateuser.road = document.getElementById('road').value;
        updateuser.detail = document.getElementById('detail').value;
          
        let err = document.getElementsByClassName('field error');
        
         
        if(err.length||!updateuser.shipaddr||!updateuser.username||!updateuser.uphonefirst||!updateuser.uphonemid
            ||!updateuser.uphonelast||!updateuser.postcode||!updateuser.road||!updateuser.detail){
            event.preventDefault();
            alert("정보를 알맞게 입력하세요.");
            return;
        }

        arr[idxnum].shipaddr = updateuser.shipaddr;
        arr[idxnum].username = updateuser.username;
        arr[idxnum].uphonefirst = updateuser.uphonefirst;
        arr[idxnum].uphonemid = updateuser.uphonemid;
        arr[idxnum].uphonelast = updateuser.uphonelast;
        arr[idxnum].postcode = updateuser.postcode;
        arr[idxnum].road = updateuser.road;
        arr[idxnum].detail = updateuser.detail;
       
        console.log(arr[idxnum]);
        console.log(arr);
        localStorage.setItem('arr',JSON.stringify(arr));
        location.href='list.html';
    });
})();
 