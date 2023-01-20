onclick = function (event){
    if(event.target === document.getElementById('login_page')){
        document.getElementById('login_page').style.display = 'none';
    }
}
function myUsername(e){
    var value = e.value;
    if (value.length>5 && value.length<12){
        green(e);
    }
    else{
        red(e);
    }
}
function myEmail(e){
    var value = e.value;
    console.log(e);
    if (e.type=="email")
    if(value.includes('@')&&value.includes('.')){
        green(e);
    }
    else red(e);
}
function green(id){
    id.style.border = '3px solid rgba(52, 222, 75, 0.62)';
}
function red(id){
    id.style.border = '3px solid rgba(222, 52, 80, 0.62)';
}