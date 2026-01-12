var darkThemeEnabled = false;

function setTheme(){
    loadThemePreference(); //Load their preference

    if(darkThemeEnabled){
        document.body.classList.add("dark"); //Add the dark theme to the Body of the HTML
        document.body.classList.remove("light"); //Remove the light theme to the Body of the HTML
        document.getElementById("theme_toggle").src = "/images/ui/light_mode.webp"; //Change button to sun to allow user to set to light mode
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        document.getElementById("theme_toggle").src = "images/ui/dark_mode.webp";
    }
    saveThemePreference() //Save it to the device so the wwebsite remembers their preference
}

function toggleTheme() {
    darkThemeEnabled = !darkThemeEnabled; //Toggles theme
    saveThemePreference(); //Saves new theme
    setTheme(); //Load theme
}

function saveThemePreference() {
    localStorage.setItem("darkThemeEnabled", darkThemeEnabled);
}

function loadThemePreference() {
    const storedTheme = localStorage.getItem("darkThemeEnabled");
    darkThemeEnabled = storedTheme === "true";
}