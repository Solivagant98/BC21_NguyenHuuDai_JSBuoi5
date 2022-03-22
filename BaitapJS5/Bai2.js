function tinhSn() {
    var N = document.getElementById("n2").value*1;
    var X = document.getElementById("x2").value*1;
    var luyThua=1;
    var S=0;
    for(var i=1;i<=N;i++) { luyThua=luyThua*X; S+=luyThua};
    document.getElementById("result2").style.display ="block";
    document.getElementById("result2").innerHTML =S;
}