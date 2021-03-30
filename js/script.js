// Right Pane Active/Hide Content
function openPage(evt, pageName) {
    var i, pagecontent, tablinks;
    pagecontent = document.getElementsByClassName("right-pan-normal-mode");
    for (i = 0; i < pagecontent.length; i++) {
        pagecontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("nav-tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Left Pane Active/Hide Nav on Mobile
function showNav() {
    var navCss = document.getElementById("left-panel");
    if (navCss.style.left === "0px") {
        navCss.style.left = "-250px";
    } else {
        navCss.style.left = "0px";
    }
}