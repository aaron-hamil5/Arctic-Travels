let darkThemeEnabled = 0

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
    if (darkThemeEnabled === 0) setTheme(); else console.log(e)
});  // Listens for the devices theme to change, and is not set to a set choice

document.addEventListener("DOMContentLoaded", e => {
    setTheme()
    if(e) console.log(e)
}) //Once the website loads, set the theme

function setTheme(){
    console.log(document.getElementById("theme_toggle"));
    if (localStorage.getItem("userAccepted"))loadThemePreference(); // Checks if user accepted cookies

    if(darkThemeEnabled === 2){ //Dark Mode
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        document.getElementById("cta_banner").classList.add("dark");
        document.getElementById("cta_banner").classList.remove("light");
        document.getElementById("theme_toggle").src = "/images/ui/dark_mode.webp";
    } else if (darkThemeEnabled === 1) { //Light Mode
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        document.getElementById("cta_banner").classList.add("light");
        document.getElementById("cta_banner").classList.remove("dark");
        document.getElementById("theme_toggle").src = "/images/ui/light_mode.webp";
    }
    else if (darkThemeEnabled === 0){ //Auto Mode
        if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            document.body.classList.add("dark");
            document.body.classList.remove("light");
            document.getElementById("cta_banner").classList.add("dark");
            document.getElementById("cta_banner").classList.remove("light");
            document.getElementById("theme_toggle").src = "/images/ui/auto_mode.webp";
        } else{
            document.body.classList.add("light");
            document.body.classList.remove("dark");
            document.getElementById("cta_banner").classList.add("light");
            document.getElementById("cta_banner").classList.remove("dark");
            document.getElementById("theme_toggle").src = "/images/ui/auto_mode.webp";
        }
    }
    saveThemePreference();
}

function toggleTheme() {
    if (localStorage.getItem("userAccepted")) {
        if (darkThemeEnabled === 2){
            darkThemeEnabled = 0
        } else {
            darkThemeEnabled += 1
        }
        saveThemePreference();
        setTheme();
    }
}

function saveThemePreference() {
    if (localStorage.getItem("userAccepted")) localStorage.setItem("darkThemeEnabled", darkThemeEnabled);
}

function loadThemePreference() {
    const storedTheme = localStorage.getItem("darkThemeEnabled");
    if (storedTheme !== null) {
        darkThemeEnabled = Number(storedTheme);
    }
}