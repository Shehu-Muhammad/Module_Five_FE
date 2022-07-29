const indexPageButton = document.getElementById("contactPage");

if(indexPageButton != undefined) {
    indexPageButton.addEventListener("click", gotToContactPage);
}

function gotToContactPage() {
    window.location.href = "contact.html";
}

const hamburger = document.getElementById("hamburger");
const cross = document.getElementById("cross");
const pageLinks = document.getElementById("pageLinks");

if(hamburger != undefined) {
    hamburger.style.display = "block";
}

if(cross != undefined) {
    cross.style.display = "none";
}

if(pageLinks != undefined) {
    pageLinks.style.display = "none";
}

function showNavigationLinks() {
    if(cross.style.display == "none" && hamburger.style.display == "block") {
        cross.style.display = "block";
        hamburger.style.display = "none";
        pageLinks.style.display = "block";
    } else {
        cross.style.display = "none";
        hamburger.style.display = "block";
        pageLinks.style.display = "none";
    }
}

function hideAll() {
    if(screen.width > 375) {
        cross.style.display = "none";
        hamburger.style.display = "none";
        pageLinks.style.display = "block";
    } else if(screen.width == 375) {
        hamburger.style.display = "block";
        pageLinks.style.display = "none";
    }
}

window.addEventListener("resize", (e)=> {
    hideAll();
});
