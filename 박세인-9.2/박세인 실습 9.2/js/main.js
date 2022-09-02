(function() {
    'use strict';
    var arr = [];
    var num = 0;

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
        //필수 값이 없으면 0 있으면 1 
        let yesno = 1;
        
        const ck = [document.getElementById('username'),document.getElementById('email'),document.getElementById('pwd'),document.getElementById('privacy')]
        
        ck.forEach(function(item){
            if(!item.value || (item.type === 'checkbox' && !item.checked)) {
                alert(`${document.querySelector(`label[for="${item.id}"]`).innerText}가(이) 입력되지 않았습니다.`);
                event.preventDefault();
                yesno = 0;
            }
        });

        if(yesno == 1){
            let Jarr = JSON.parse(localStorage.getItem('arr'));
            //로컬 스토리즈가 클리어 상태이면 x
            if(Jarr){
                arr = Jarr;
                num = Jarr[Jarr.length-1].index;
            }
            console.log(typeof(Jarr[Jarr.length-1].index));

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
            
            // console.log(username,email,pwd,userAddr,gender,privacy,marketing);

            arr.push({'index':num++,'username':username,'email':email,'pwd':pwd,'userAddr':userAddr,'gender':gender,'privacy':privacy,'marketing':marketing});
             

            //배열 string으로 변환
            let strarr = JSON.stringify(arr); 
            //  console.log(strarr);
            
            //로컬스토리즈 클리어(오류값 제거)
            localStorage.clear();
            //로컬스토리즈에 등록
            localStorage.setItem('arr', strarr);
             
        }
        
    });

    window.onload = function lod(){ 
        // localStorage.clear();
        
        let Jarr = JSON.parse(localStorage.getItem('arr'));
        if(Jarr){
            for(let i =0;i<Jarr.length;i++){
                const trElem = document.createElement('tr');
                trElem.innerHTML+=`<td><input type="checkbox" class="check" onclick="selectCheckBox();" value="${Jarr[i].index}"></td>`;
                trElem.innerHTML+=` <td>${Jarr[i].username}</td>`;
                trElem.innerHTML+=` <td>${Jarr[i].email}</td>`;
                trElem.innerHTML+=` <td>${Jarr[i].pwd}</td>`;
                trElem.innerHTML+=` <td>${Jarr[i].userAddr}</td>`;
                trElem.innerHTML+=` <td>${Jarr[i].gender}</td>`;
                trElem.innerHTML+=` <td>${Jarr[i].privacy}</td>`;
                trElem.innerHTML+=` <td>${Jarr[i].marketing}</td>`;
                let insert = document.querySelector('tbody');
                insert.appendChild(trElem);
            }
        }else{
            console.log("오류");
        }
    };
    
    //전체 체크 클릭
    document.getElementById('check_all').addEventListener('click',function(event){
        let cks = document.getElementsByClassName('check');
        if(document.getElementById('check_all').checked){
            for(let i =0;i<cks.length;i++){
                cks[i].checked=true;
            }
        }else{
            for(let i =0;i<cks.length;i++){
                cks[i].checked=false;
            }
        }
    });

    //삭제 event
    document.getElementById('delete').addEventListener('click',function(event){
        const getcks = document.getElementsByClassName('check');
        let Jarr = JSON.parse(localStorage.getItem('arr'));

        for(let i = 0;i<getcks.length;i++){
            if(getcks[i].checked==true){
                for(let j=0;j<Jarr.length;j++){
                    if(getcks[i].value==Jarr[j].index){
                        console.log("11");
                        break;
                    }
                }
                getcks[i].parentElement.parentElement.remove();
            }
        }
    });

})();


   //부분 체크 클릭
   function selectCheckBox(){
    let selCk = document.getElementsByClassName('check');
    for(let i = 0;i<selCk.length;i++){
        // 하나라도 체크 x 전체 체크 풀기
        if(!selCk[i].checked){
            document.getElementById('check_all').checked=false;
            return;
        }
    }
    //전체 체크 클릭(모두 체크 돼서)
    document.getElementById('check_all').checked=true;
}
