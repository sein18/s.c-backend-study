(function() {
    'use strict';
    var arr = []; 
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
       
        //필수 값이 없으면 0 있으면 1 
        let yesno = 1;
        
        const ck = [document.getElementById('username'),document.getElementById('email'),document.getElementById('pwd'),document.getElementById('privacy')]
        
        for(let element of ck) {
            if(!element.value || (element.type === 'checkbox' && !element.checked)) {
                alert(`${document.querySelector(`label[for="${element.id}"]`).innerText}가(이) 입력되지 않았습니다.`);
                event.preventDefault();
                break;
            }
        }

        if(yesno == 1){
            let Jarr = JSON.parse(localStorage.getItem('arr'));
            //로컬 스토리즈가 클리어 상태이면 x
            console.log(Jarr);
            if(Jarr && Jarr.length!=0){
                arr = Jarr; 
            }

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const pwd = document.getElementById('pwd').value;
            const userAddr = document.getElementById('userAddr').value;
            let gender = document.querySelectorAll('input[name="gender"]:checked')[0].value;
            const privacy = document.getElementById('privacy').checked?'동의':'비동의';
            const marketing = document.getElementById('marketing').checked?'동의':'비동의';
            
            arr.push({username:username,
                      email:email,
                      pwd:pwd,
                      userAddr:userAddr,
                      gender:gender,
                      privacy:privacy,
                      marketing:marketing});
             
            //로컬스토리즈에 등록
            localStorage.setItem('arr',  JSON.stringify(arr));
        }
        
    });

    window.onload = function lod(){ 
        let Jarr = JSON.parse(localStorage.getItem('arr'));
        if(Jarr){
            for(let i =0;i<Jarr.length;i++){
                // 기존 HTML tbody 와 템플릿 열로 테이블을 인스턴스화합니다
                let t = document.querySelector('#user_template');
                // console.log(t.content);
                // console.log(t);
                // 템플릿을 복사 (true 자식을 가져오고, false자식을 안 가져옴)
                var clone = document.importNode(t.content, true);
                let td = clone.querySelectorAll("td");
                // console.log(td);
                
                td[1].innerText = Jarr[i].username;
                td[2].innerText = Jarr[i].email;
                td[3].innerText = Jarr[i].pwd;
                td[4].innerText = Jarr[i].userAddr;
                td[5].innerText = Jarr[i].gender;
                td[6].innerText = Jarr[i].privacy;
                td[7].innerText = Jarr[i].marketing;

                let tb = document.querySelector("tbody"); 
                tb.appendChild(clone);
            }
        }else{
            console.log("오류");
        }
    };
    
    //전체 체크 클릭
    document.getElementById('check_all').addEventListener('click',function(event){
        document.querySelectorAll('input[class="check"]').forEach((el) => {
            el.checked = event.target.checked;
        });
    });

    //삭제 event
    document.getElementById('delete').addEventListener('click',function(event){
        const getcks = document.querySelectorAll(`input[class="check"]`);
        let Jarr = JSON.parse(localStorage.getItem('arr'));

        //배열 순번이 꼬이지 않도록 뒤에서 삭제
        for(let i = getcks.length-1;i>= 0;i--){
            if(getcks[i].checked==true){
                Jarr.splice(i,1); 
                console.log(Jarr);
                localStorage.setItem('arr', JSON.stringify(Jarr));
                getcks[i].parentElement.parentElement.remove();
            }
        }
    });

})();

   //부분 체크 클릭
   function selectCheckBox(){ 
        document.getElementById('check_all').checked = document.querySelectorAll(`input[class="check"]:checked`).length == document.querySelectorAll(`input[class="check"]`).length;
}