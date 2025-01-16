
const nameField = document.getElementById('name-field')
const passField = document.getElementById('pass-field')
const cpassField = document.getElementById('Cpass-field');
const warningN = document.getElementById('name-warn');
const warningP = document.getElementById('pass-warn');
const warningC = document.getElementById('warningCpass');

function nameValidate(){
    let name = nameField.value;

    if( name == ""){
        warningN.innerHTML = "Name field can't be Empty"
        warningN.style.color = "red"
    }else if(name.length < 3 ){
        warningN.innerHTML = "Name must be 3 char";
        warningN.style.color = "red"
    }
    else{
        warningN.innerHTML = "";
    }
}

function passValidate(){
    let pass = passField.value;

    if(pass == ""){
        warningP.innerHTML = "pass field can't be Empty"
        warningP.style.color= "red";
    }
    else if(pass.length < 6){
        warningP.innerHTML = "Password must be atleast 6";
        warningP.style.color= "red";
        return false;
    }
    else{
        warningP.innerHTML = "";

    }
}

function cpassValidate(){
    let pass = passField.value;
    let cpass = cpassField.value ;

    if(cpass != pass){
        warningC.innerHTML = "password Not confirm";
        warningC.style.color= "red";

    }
    else{
        document.getElementById('warningCpass').innerHTML = ""

    }
}