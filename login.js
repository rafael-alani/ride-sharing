onclick = function (event){
    if(event.target === document.getElementById('login_page')){
        document.getElementById('login_page').style.display = 'none';
    }
}
var allow = true;
function myUsername(e){
    var value = e.value;
    if (value.length>5 && value.length<12){
        green(e);
        return true;
    }
    else{
        red(e);
    }
    return false;
}

// function myEmail(e){
//     var value = e.value;
//     console.log(e);
//     // if (e.type=="email")
//     if(value.includes('@')&&value.includes('.')){
//         green(e);
//     }
//     else red(e);
// }
function signIn(){

}
function myEmail(e){
    var value = e.value;
    console.log(e);
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
                return true;
            }
            else  red(e);

        }
        else  red(e);
    }
    else red(e);
    return false;
}

function green(id) {
    id.style.border = '3px solid rgba(52, 222, 75, 0.62)';
}
function red(id){
    id.style.border = '3px solid rgba(222, 52, 80, 0.62)';
}