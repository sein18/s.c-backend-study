(function() {
    'use strict';
    var arr = [];
    let num = 0;

    /** Validation Check Start **/
    /* 이름 */
    document.getElementById('username').addEventListener('blur', function(event) {
        const value = this.value,
              elParent = this.parentElement,
              parentClassList = elParent.classList;

        if(value) {
            if(!/^[ㄱ-ㅎㅏ-ㅣ가-힣]+$/g.test(value)) {
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

    /* 이메일 */
    document.getElementById('email').addEventListener('blur', function(event) {
        /*
            (실습문제 1) 이메일 유효성검사 작성
              - 이메일 유효성검사 정규식 : /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                * 다른 이메일 정규식을 검색해서 사용해도 됨
                * 다른 유효성검사 항목 참고하여 작성 (이름, 비밀번호 등)

        */
        const value = this.value,
              elParent = this.parentElement,
              parentClassList = elParent.classList;

        if(value) {
            if(!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
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

    /* 비밀번호 */
    document.getElementById('pwd').addEventListener('blur', function(event) {
        const value = this.value,
              elParent = this.parentElement,
              parentClassList = elParent.classList;

        if(value) {
            if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g.test(value)) {
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

    /* 비밀번호확인 */
    document.getElementById('pwdConfirm').addEventListener('blur', function(event) {

        const value = this.value,
              pwdValue = document.getElementById('pwd').value,
              elParent = this.parentElement,
              parentClassList = elParent.classList;

        if(value) {
            if(value !== pwdValue) {
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
    
    /** Validation Check End **/

    
    // 회원가입 submit
    document.getElementById('form').addEventListener('submit', function(event) {
        /* 
             (실습문제 2) form 전송 시 각 항목 입력값 확인
              # 이름, 이메일, 비밀번호, 개인정보수집동의 필수 입력 값
         */
        let yesno = 1;
        const ck = [document.getElementById('username'),document.getElementById('email'),document.getElementById('pwd'),document.getElementById('privacy')]
        console.log(ck);
        ck.forEach(function(item){
            if(!item.value || (item.type === 'checkbox' && !item.checked)) {
                alert(`${document.querySelector(`label[for="${item.id}"]`).innerText}가(이) 입력되지 않았습니다.`);

                event.preventDefault();
                yesno = 0;
            }
        }); 
        if(yesno==1){
            //JSON.parse
            event.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const pwd = document.getElementById('pwd').value;
            const userAddr = document.getElementById('userAddr').value;
            let gender = document.getElementsByName('gender');
            if(gender[0].checked){
                gender='남자';
            }else{
                gender='여자';
            }
            const privacy = document.getElementById('privacy').checked;
            const marketing = document.getElementById('marketing').checked;
            console.log(username,email,pwd,userAddr,gender,privacy,marketing);

            arr.push({'index':num++,'username':username,'email':email,'pwd':pwd,'userAddr':userAddr,'gender':gender,'privacy':privacy,'marketing':marketing});
                
            const trElem = document.createElement('tr');
            trElem.innerHTML+=`<td><input type="checkbox" class="check" value="${arr[arr.length-1].index}"></td>`;
            trElem.innerHTML+=` <td>${arr[arr.length-1].username}</td>`;
            trElem.innerHTML+=` <td>${arr[arr.length-1].email}</td>`;
            trElem.innerHTML+=` <td>${arr[arr.length-1].pwd}</td>`;
            trElem.innerHTML+=` <td>${arr[arr.length-1].userAddr}</td>`;
            trElem.innerHTML+=` <td>${arr[arr.length-1].gender}</td>`;
            trElem.innerHTML+=` <td>${arr[arr.length-1].privacy}</td>`;
            trElem.innerHTML+=` <td>${arr[arr.length-1].marketing}</td>`;
            let insert = document.querySelector('tbody');
            insert.appendChild(trElem);
            
            localStorage.clear();
            localStorage.setItem('arr',arr);
        }
        
    });
    
})();
