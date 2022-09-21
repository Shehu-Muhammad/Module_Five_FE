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

if(hamburger != undefined && screen.width > 375) {
    hamburger.style.display = "none";
} else if (hamburger != undefined && screen.width == 375) {
    hamburger.style.display = "block";
}

if(cross != undefined) {
    cross.style.display = "none";
}

if(pageLinks != undefined && screen.width == 375) {
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
    let width = document.getElementsByClassName("navigation")[0].clientWidth;
    // console.log(document.getElementsByClassName("navigation")[0].clientWidth);
    if(width > 375) {
        cross.style.display = "none";
        hamburger.style.display = "none";
        pageLinks.style.display = "block";
    } else if(width <= 375) {
        hamburger.style.display = "block";
        cross.style.display = "none";
        pageLinks.style.display = "none";
    }
    // console.log(document.getElementsByClassName("navigation")[0].clientWidth)
}

if(hamburger != undefined) {
    hamburger.children[0].addEventListener("click", showNavigationLinks);
}

if (cross != undefined) {
    cross.children[0].addEventListener("click", showNavigationLinks);
}

window.addEventListener("resize", ()=> {
    hideAll();
    // console.log(window.screen.width);
});

let btns = document.querySelectorAll("button");
btns.forEach(btn => {
    btn.addEventListener("click", e => {
        showMoreInfo(e);
    });
});

function showMoreInfo(e) {
    let btnSelected = e.target.id;
    let paragraph = document.querySelector(`.${btnSelected}`);
    let button = document.querySelector(`#${btnSelected}`);
    if(paragraph.classList.contains("hideInfo")){
        paragraph.classList.remove("hideInfo");
        button.textContent = "Show Less Info";
    } else {
        paragraph.classList.add("hideInfo");
        button.textContent = "Show More Info";
    }
}



