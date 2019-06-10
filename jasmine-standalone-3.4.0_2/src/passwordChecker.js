const lowerCaseChar = /[a-z]/;
const upperCaseChar = /[A-Z]/;
const numberChar = /[0-9]/;     //regExp



let password_is_valid = (password) =>{
    if(password == ""){     //if password exists
        throw Error("Password should not be null.");
    }
    if(password.length < 8){
        throw Error("Password should be larger than 8 chars");
    }
    if(!upperCaseChar.test(password)){
        throw Error("Password should have an UPPERCASE")
    }

     if(!lowerCaseChar.test(password)){
         throw Error("Password should have at least one lowercase letter");
     }

     if(!numberChar.test(password)){
         throw Error("Password should have at least one number");
     }
};

let password_is_ok = (password) =>{
    if(password != "" && password.length > 8){
        if(numberChar.test(password)){
            return true;
        }
        else{
            return false;
        }
    }
}