function change()
{
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++){
        if ((i + 1) % 2 == 0){
            divs[i].style.background = "red";
        }
        else { 
            divs[i].style.background = "blue";
        }
    }
}


    


    

    