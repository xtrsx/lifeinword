var menuList = document.getElementById("linkHolder");
menuList.style.display = "none";
var bar = document.getElementById("navHolder");
var closeBtn = document.getElementById("closeBtn")

function toggleMenu(){
    if(menuList.style.display=="none"){
        menuList.style.display="block";
    }

    else{
        menuList.style.display="none";
    }
}

function closeMenu(){
    if(menuList.style.display=="block"){
        menuList.style.display="none";
    }
}

var showMoreBtn = document.getElementById("port");
var hidden_div = document.getElementById("hiddenDiv");
var blog_div = document.getElementById("#blog-div");

function showMore(){
    
    hidden_div.style.display = "flex";
    showMoreBtn.style.display = "none";
    
}



