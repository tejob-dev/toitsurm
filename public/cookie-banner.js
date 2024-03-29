/*
* Javascript to show and hide cookie banner using localstorage
*/

/**
 * @description Shows the cookie banner
 */
function showCookieBanner(){
    let cookieBanner = document.getElementById("hs-eu-cookie-confirmation");
    cookieBanner.style.display = "block";
    const bloker = document.getElementById("cook-block")
	bloker.addEventListener('click', bloqueEvenement, { capture: true, passive: false });
    bloker.addEventListener('mousedown', bloqueEvenement, { capture: true, passive: false });
    bloker.addEventListener('mouseup', bloqueEvenement, { capture: true, passive: false });
    bloker.addEventListener('mousemove', bloqueEvenement, { capture: true, passive: false });
    bloker.addEventListener('keydown', bloqueEvenement, { capture: true, passive: false });
    bloker.addEventListener('keyup', bloqueEvenement, { capture: true, passive: false });
    
}

function bloqueEvenement(event) {
  event.preventDefault();
}

/**
 * @description Hides the Cookie banner and saves the value to localstorage
 */
function hideCookieBanner(){
    localStorage.setItem("cb_isCookieAccepted", "yes");

    let cookieBanner = document.getElementById("hs-eu-cookie-confirmation");
    document.getElementById("cook-block").style.display = "none";;
    cookieBanner.style.display = "none";
}

/**
 * @description Checks the localstorage and shows Cookie banner based on it.
 */
function initializeCookieBanner(){
    document.querySelector("#hs-eu-confirmation-button").onclick = function(e){
        hideCookieBanner();
    }
    
    let isCookieAccepted = localStorage.getItem("cb_isCookieAccepted");
    if(isCookieAccepted === null)
    {
        localStorage.setItem("cb_isCookieAccepted", "no");
        showCookieBanner();
    }
    if(isCookieAccepted === "no" || isCookieAccepted === null){
        showCookieBanner();
    }else{
        hideCookieBanner();
    }
    
    console.log(isCookieAccepted)
    console.log("win load")
}

// Assigning values to window object
window.onload = initializeCookieBanner();
window.cb_hideCookieBanner = hideCookieBanner;
