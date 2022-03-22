function tinhGiaiThua() {
    var i
    var N =document.getElementById("N").value*1;
    var ketQua = 1
    for(i = 1; i <= N; i++){ketQua = ketQua * i }
    document.getElementById("result3").style.display ="block";
    document.getElementById("result3").innerHTML =ketQua;
}

