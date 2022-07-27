const indexPageButton = document.getElementById("contactPage");

if(indexPageButton != undefined) {
    indexPageButton.addEventListener("click", gotToContactPage);
}

function gotToContactPage() {
    window.location.href = "contact.html";
}