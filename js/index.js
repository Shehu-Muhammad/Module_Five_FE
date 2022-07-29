const indexPageButton = document.getElementById("contactPage");

if(indexPageButton != undefined) {
    indexPageButton.addEventListener("click", gotToContactPage);
}

function gotToContactPage() {
    window.location.href = "contact.html";
}

const hamburger = document.getElementById("hamburger");
const cross = document.getElementById("cross");

if(hamburger != undefined) {
    hamburger.style.display = "block";
}

if(cross != undefined) {
    cross.style.display = "none";
}

function showNavigationLinks() {
    if(cross.style.display == "none" && hamburger.style.display == "block") {
        cross.style.display = "block";
        hamburger.style.display = "none";
    } else {
        cross.style.display = "none";
        hamburger.style.display = "block";
    }
}

function hideAll() {
    if(screen.width > 375) {
        cross.style.display = "none";
        hamburger.style.display = "none";
    } else if(screen.width == 375) {
        hamburger.style.display = "block";
    }
}

window.addEventListener("resize", (e)=> {
    hideAll();
});
