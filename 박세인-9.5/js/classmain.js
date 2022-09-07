(function() {
    'use strict';

    class User {
        name=1; //name; #name; static name;

        static{
            // 바로 사용
        }

        constructor(a,b){
            arguments[0];
            arguments[1];
            console.log(arguments[0], arguments[1]);
            this.name=a;
        }

    }
    var user = new User('a');
    console.log(user.name);
})();