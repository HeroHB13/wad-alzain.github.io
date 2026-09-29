const JAILBREAK_PASSWORD = "hero55597";

function checkPassword() {
    const password = prompt("HERO-HB\nEnter Password:");

    if (password === JAILBREAK_PASSWORD) {
        return true;
    }

    alert("Wrong Password");
    return false;
}
