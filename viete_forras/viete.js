document.getElementById("button1").onclick = () =>{
    var a = document.getElementById("inputa").value;
    var b = document.getElementById("inputb").value;
    var c = document.getElementById("inputc").value;

    var D = b*b-4*a*c;
    var eredmeny = "";
    
    if (D<0){
        eredmeny = "Nincs megoldás.";
    }
    else if (D==0){
        eredmeny = "Egy megoldása van.";
    }
    else{
        eredmeny = "Két megoldása van.";
    }

    document.getElementById("span1").innerHTML = eredmeny;
    
}