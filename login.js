var username = document.getElementById('username');
var email = document.getElementById('email');
var zipCode = document.getElementById('zipCode');
var name = document.getElementById('fName');
var surname = document.getElementById('lName');
var gender = document.getElementById('gender');
var nationality = document.getElementById('nationality');
var language = document.getElementById('languages');
var password = document.getElementById('password');
var passwordConf = document.getElementById('rep_password');

onclick = function (event){
    if(event.target === document.getElementById('login_page')){
        document.getElementById('login_page').style.display = 'none';
    }
}
var allow = true;
function myUsername(e){
    var tick = document.getElementById('check_U');
    var ex = document.getElementById('mark_U');
    var error = document.getElementById('error_message');
    var value = e.value;
    if (value.length>=5 && value.length<=12){
        if (value.charAt(0) === value.charAt(0).toUpperCase()){
            if (specialChar(value.charAt(value.length-1))==true){
                green(e);
                error.innerHTML = 'Looks Good!';
                error.style.color = 'rgba(46,188,64,0.62)';
                tick.style.zIndex = '1';
                ex.style.zIndex = '-1';
                return true;
            }
            else{
                error.innerHTML = 'The last character must be a special character.';
                error.style.color = 'rgba(222, 52, 80, 0.62)';
                red(e);
                tick.style.zIndex = '-1';
                ex.style.zIndex = '1';
            }
        }
        else{
            error.innerHTML = 'The first character must be an uppercase letter.';
            error.style.color = 'rgba(222, 52, 80, 0.62)';
            red(e);
            tick.style.zIndex = '-1';
            ex.style.zIndex = '1';
        }
    }
    else{
        error.innerHTML = 'The Username must be between 5 and 12 characters.';
        error.style.color = 'rgba(222, 52, 80, 0.62)';
        red(e);
        tick.style.zIndex = '-1';
        ex.style.zIndex = '1';
    }

    return false;
}
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const lowerAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseAlp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// var numbers = "1234567890";
// var allNumbers = numbers.split('');
function specialChar(c){
    return !lowerAlph.includes(c) && !upperCaseAlp.includes(c);
}

function mySelectors(e,m){
    if (e.value === ""){
        red(e);
        m.innerHTML = 'Please select one';
        m.style.color = 'rgba(222, 52, 80, 0.62)';
        return false;
    }
    green(e);
    m.innerHTML = 'Looks Good!';
    m.style.color = 'rgba(46,188,64,0.62)';
    return true;

}
function myName(e,m,y,j){
    var tick = j;
    var ex = y;
    console.log(ex);
    // console.log(e);

    var value = e.value;
    console.log(value)
    // console.log(value);
    if (value===""){
        red(e);
        tick.style.zIndex = '-1';
        ex.style.zIndex = '1';
        m.innerHTML = 'The Name must contain at least one character';
        m.style.color = 'rgba(222, 52, 80, 0.62)';
        return false;
    }
    for (let i = 0; i<value.length;i++){
        if (!lowerAlph.includes(value.charAt(i)) && !upperCaseAlp.includes(value.charAt(i))){
            red(e);
            tick.style.zIndex = '-1';
            ex.style.zIndex = '1';
            m.innerHTML = 'The Name must only include letters';
            m.style.color = 'rgba(222, 52, 80, 0.62)';
            return false;
        }
    }
    green(e);
    m.innerHTML = 'Looks Good!';
    tick.style.zIndex = '1';
    ex.style.zIndex = '-1';
    m.style.color = 'rgba(46,188,64,0.62)';
    return true;
}

function myZipCode(e){
    var v = e.value;
    console.log(v);
    var tick = document.getElementById('check_Z');
    var ex = document.getElementById('mark_Z');
    var error = document.getElementById('error_messageZ');
    if(v.length!==6){
        error.innerHTML = 'Please enter a valid Dutch Zip-Code!';
        error.style.color = 'rgba(222, 52, 80, 0.62)';
        tick.style.zIndex = '-1';
        ex.style.zIndex = '1';
        red(e);
        return false;
    }
    if (!numbers.includes(v.charAt(0))){
        tick.style.zIndex = '-1';
        ex.style.zIndex = '1';
        red(e);
        return false;
    }
    if (!numbers.includes(v.charAt(1))){
        tick.style.zIndex = '-1';
        ex.style.zIndex = '1';
        red(e);
        return false;
    }
    if (!numbers.includes(v.charAt(2))){
        tick.style.zIndex = '-1';
        ex.style.zIndex = '1';
        red(e);
        return false;
    }
    if (!numbers.includes(v.charAt(3))){
        tick.style.zIndex = '-1';
        ex.style.zIndex = '1';
        red(e);
        return false;
    }
    if (!upperCaseAlp.includes(v.charAt(4))){
        tick.style.zIndex = '-1';
        ex.style.zIndex = '1';
        red(e);
        return false;
    }
    if (!upperCaseAlp.includes(v.charAt(5))){
        tick.style.zIndex = '-1';
        ex.style.zIndex = '1';
        red(e);
        return false;
    }
    green(e);
    tick.style.zIndex = '1';
    ex.style.zIndex = '-1';
    error.innerHTML = 'Looks Good!';
    error.style.color = 'rgba(46,188,64,0.62)';
    return true;
}

function required(e){
    return e.value !== "";
}



function submit(e){
    // var e = document.getElementById('sign_in_form')
    if (signIn()===true){
            window.location.assign("../index.html");
            console.log('help')
        }
    else{
        window.scrollTo(100,100);
        }
    username.oninput = function () {myUsername(username)};
    email.oninput = function () {myEmail(email)};
    zipCode.oninput = function () {myZipCode(zipCode)};
    document.getElementById('fName').oninput = function () {myName(name, document.getElementById('error_messageN'),document.getElementById('mark_F'),document.getElementById('check_F'))};
    document.getElementById('lName').oninput = function () {myName(surname, document.getElementById('error_messageS'),document.getElementById('check_S'),document.getElementById('mark_S'))};
    gender.oninput = function () {mySelectors(gender,document.getElementById('error_messageSex'))};
    nationality.oninput = function () {mySelectors(nationality,document.getElementById('error_messageNat'))};
    language.oninput = function () {mySelectors(language,document.getElementById('error_messageL'))};
    password.oninput = function () {myPassword(password)};
    // password.oninput = function () {myPasswordConfirmation(passwordConf)};

    // document.getElementById('password_req_s').innerText = 'myPasswordConfirmation(passwordConf)';
    passwordConf.oninput = function () {myPasswordConfirmation(passwordConf)};

}
function signIn(){
   var a =  myUsername(username) //Username
    var b = myEmail(email)         //Email
    var c = myZipCode(zipCode)      //ZipCode
    var d = myName(document.getElementById('fName'), document.getElementById('error_messageN'),document.getElementById('mark_F'),document.getElementById('check_F')) ;       //Name
    var e = myName(document.getElementById('lName'), document.getElementById('error_messageS'),document.getElementById('mark_S'),document.getElementById('check_S'))    ;     //Surname
    var f = mySelectors(gender,document.getElementById('error_messageSex'))     //Sex
    var g = mySelectors(nationality,document.getElementById('error_messageNat'))    //Nationality
    var h = mySelectors(language,document.getElementById('error_messageL'))    //Language
    var i = myPassword(password)      //Password
    var k = myPasswordConfirmation(passwordConf);//Password Confirmation
    console.log(a,b,c,d,e,f,g,h,i,k);
    return a&&b&&c&&d&&e&&f&&g&&h&&i&&k;
}

function myEmail(e){
    var value = e.value;
    console.log(e);
    var tick = document.getElementById('check_E');
    var ex = document.getElementById('mark_E');
    var error = document.getElementById('error_messageE');
    // if (e.type=="email")
    if(value.includes('@')){
        var split = value.split('@');
        console.log(split);
        if (!split[0].includes('.') && split[0].length>0 && split[1].includes('.')){
            var split2 = split[1].split('.');
            console.log(split2);
            var l = split2.length-1;
            if(split2[0].length>0&&split2[1].length>0&&split2[l].length>0){
                console.log('hello')
                green(e);
                error.innerHTML = 'Looks Good!';
                error.style.color = 'rgba(46,188,64,0.62)';
                tick.style.zIndex = '1';
                ex.style.zIndex = '-1';
                return true;
            }
            else{
                red(e);
                error.innerHTML = 'Please insert a valid e-mail!';
                error.style.color = 'rgba(222, 52, 80, 0.62)';
                tick.style.zIndex = '-1';
                ex.style.zIndex = '1';
            }

        }
        else{
            red(e);
            error.innerHTML = 'Please insert a valid e-mail!';
            error.style.color = 'rgba(222, 52, 80, 0.62)';
            tick.style.zIndex = '-1';
            ex.style.zIndex = '1';

        }
    }
    else{
        red(e);
        error.innerHTML = 'Please insert a valid e-mail!';
        error.style.color = 'rgba(222, 52, 80, 0.62)';
        tick.style.zIndex = '-1';
        ex.style.zIndex = '1';
    }
    return false;
}

function myPassword(e){
    var error = document.getElementById('error_messageP');
    var pass = document.getElementById('password').value;
    console.log(pass)
    var upper = 0;
    var lower = 0;
    var special = 0;
    var number = 0;
    for(let i = 0; i < pass.length;i++){
        if (numbers.includes(pass.charAt(i))){
            number++;
        }
        else if (upperCaseAlp.includes(pass.charAt(i))){
            upper++;
        }
        else if (lowerAlph.includes(pass.charAt(i))){
            lower++;
        }
        else special++;
    }
    console.log()
    if (number>0&&lower>0&&special>0&&upper>0){
        if (pass.length>11){
            if(pass.length>13){
                error.innerHTML = 'Looks Good!';
                error.style.color = 'rgba(46,188,64,0.62)';
                green(e);
                return true;
            }
            else{
                error.innerHTML = 'At least 14 character would be safer.';
                error.style.color = 'rgba(222,174,52,0.62)';
                yellow(e);
                return true;

            }


        }
        else{
            error.innerHTML = 'The password must have at least 12 characters.';
            error.style.color = 'rgba(222, 52, 80, 0.62)';
            red(e);
            return false;
        }

    }
    error.innerHTML = 'The password must be a combination of uppercase, lowercase, numbers and special characters.';
    error.style.color = 'rgba(222, 52, 80, 0.62)';
    red(e);
    return false;
}
function myPasswordConfirmation(e){
    var pass = document.getElementById('password').value;
    var error = document.getElementById('error_messageRP');
    if (e.value!==pass || e.value ===''){
        error.innerHTML = 'The passwords dont match.';
        error.style.color = 'rgba(222, 52, 80, 0.62)';
        red(e);
        return false;
    }
    error.innerHTML = 'Looks Good!';
    error.style.color = 'rgba(46,188,64,0.62)';
    green(e);
    return true;
}

var display = true
function passIcon(id,id2,pass){
    var eye = document.getElementById(id);
    var slash = document.getElementById(id2)
    pass = document.getElementById(pass);
    if (display === true){
        slash.style.zIndex='-1';
        display = false;
        eye.style.zIndex = '1';
        pass.type = 'text'
    }
    else{
        display = true;
        slash.style.zIndex='1';
        eye.style.zIndex = '-1';
        pass.type = 'password'

    }

}

function helper(){
    var body = document.getElementById('body');
    var login = document.getElementById('login');
    var h = login.offsetHeight;
    console.log(h)
    if(h>1500){
        body.style.minHeight='2000px'
    }
}
function green(id) {
    id.style.border = '3px solid rgba(52, 222, 75, 0.62)';
}
function red(id){
    id.style.border = '3px solid rgba(222, 52, 80, 0.62)';
}
function yellow(id){
    id.style.border = '3px solid rgba(222,174,52,0.62)';
}