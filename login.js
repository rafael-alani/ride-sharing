onclick = function (event){
    if(event.target === document.getElementById('login_page')){
        document.getElementById('login_page').style.display = 'none';
    }
}
var allow = true;
function myUsername(e){
    var tick = document.getElementById('check_U');
    var ex = document.getElementById('mark_U');
    var value = e.value;
    if (value.length>=5 && value.length<=12){
        if (value.charAt(0) === value.charAt(0).toUpperCase()){
            if (specialChar(value.charAt(value.length-1))==true){
                green(e);
                tick.style.zIndex = '1';
                ex.style.zIndex = '-1';
                return true;
            }
            else{
                red(e);
                tick.style.zIndex = '-1';
                ex.style.zIndex = '1';
            }
        }
        else{
            red(e);
            tick.style.zIndex = '-1';
            ex.style.zIndex = '1';
        }
    }
    else{
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

function myName(e){
    var c = e.value;
    for (let i = 0; i<e.value.length;i++){
        if (!lowerAlph.includes(c) || !upperCaseAlp.includes(c)){
            red(e);
            return false;
        }
    }
    green(e);
    return true;
}

function myZipCode(e){
    var v = e.value;
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
    return document.getElementById(e).value !== "";
}


function signIn(){
    return myEmail()

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
var pass = document.getElementById('password').value;
function myPassword(e){
    var upper = 0;
    var lower = 0;
    var special = 0;
    var number = 0;
    for(let i = 0; i < pass.length;i++){
        if (number.includes( pass.charAt(i))){
            number++;
        }
        else if (upperCaseAlp.includes( pass.charAt(i))){
            upper++;
        }
        else if (lowerAlph.includes(pass.charAt(i))){
            lower++;
        }
        else special++;
    }
    if (number>0&&lower>0&&special>0&&upper>0){
        if (pass.length>11){
            if(pass.length>13){
                green(e);
                return true;
            }
            yellow(e);
            return true;
        }
    }
    red(e);
    return false;
}
function myPasswordConfirmation(e){
    if (document.getElementById(e).value!==pass){
        red(e);
        return false;
    }
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
    if(h>1600){
        body.style.minHeight='1900px'
    }
}
function green(id) {
    id.style.border = '3px solid rgba(52, 222, 75, 0.62)';
}
function red(id){
    id.style.border = '3px solid rgba(222, 52, 80, 0.62)';
}
function yellow(id){
    id.style.border = '3px solid rgba(222, 52, 80, 0.62)';
}