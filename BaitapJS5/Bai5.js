function checkSnt(n) {
    var flag = true;
    if (n < 2) {
        flag = false;
    }
    else if (n == 2) {
        flag = true;
    }
    else if (n % 2 == 0) {
        flag = false;
    }
    else {
        for (var i = 3; i <= Math.sqrt(n); i += 2)
        {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }
 
    return flag;
}
 

function printSnt() {
    var number = parseInt (document.getElementById("number").value);
    var contentHTML = '';
    for (var i = 1; i <= number; i++) {
        if (checkSnt(i)){
            contentHTML += i + ' <br/>';
        }
    }
    document.getElementById("result5").style.display ="block";
    document.getElementById("result5").innerHTML =contentHTML;
}