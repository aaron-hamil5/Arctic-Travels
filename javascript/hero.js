document.addEventListener("DOMContentLoaded", () => {
    loadHeroText()
    setTimeout(changeHeroHeight,2000)
})

function loadHeroText(){
    document.getElementById("cta_text").style.opacity = "0"
    document.getElementById("cta_btn").style.opacity = "0"
    if (localStorage.getItem("userAccepted")){
        document.getElementById("cta_title_text").innerText = "Hey! Welcome Back to Arctic Travels"
    } else {
        document.getElementById("cta_title_text").innerText = "Welcome to Arctic Travels"
    }
}

function changeHeroHeight(){
    document.getElementById("cta_banner").style.height = "40vh";
    document.getElementById("cta_banner_text").style.width = "1500px";
    document.getElementById("cta_banner_text").style.left = "calc(50% - 750px)";
    document.getElementById("cta_title_text").innerText = "Plan the Perfect Winter Trip"
    document.getElementById("cta_text").style.opacity = "1"
    document.getElementById("cta_btn").style.opacity = "1"
}