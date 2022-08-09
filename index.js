function boxDisplay(box)   
{   
    var box = document.getElementById(box);   
    if(box.style.display=="none")   
    {   
        box.style.display = "block";   
    }   
    else   
    {   
        box.style.display = "none";   
    }   
}   

function OnlyboxDisplay(box)
{   
    var box = document.getElementById(box);
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");
    var box4 = document.getElementById("box4");
    var box5 = document.getElementById("box5");
    var box6 = document.getElementById("box6");
    var box7 = document.getElementById("box7");   
    if(box.style.display=="none")   
    {   
        box1.style.display = "none";
        box2.style.display = "none";
        box3.style.display = "none";
        box4.style.display = "none";
        box5.style.display = "none";
        box6.style.display = "none";
        box7.style.display = "none";
        box.style.display = "block";   
    }   
    else   
    {   
        box1.style.display = "none";
        box2.style.display = "none";
        box3.style.display = "none";
        box4.style.display = "none";
        box5.style.display = "none";
        box6.style.display = "none";
        box7.style.display = "none";   
    }   
}   