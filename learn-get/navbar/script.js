let navbarInitialized = false;

function initNavbar() {
    if (navbarInitialized) return;

    const menuToggle = document.getElementById("menuToggle");
    const mobileSidebar = document.getElementById("mobileSidebar");
    const closeSidebar = document.getElementById("closeSidebar");
    const mobileContent = document.getElementById("mobileContent");
    const navLinks = document.querySelector(".nav-links");
    const navRight = document.querySelector(".nav-right");

    if (!menuToggle || !mobileSidebar || !closeSidebar || !mobileContent || !navLinks || !navRight) {
        return;
    }

    const mobileLinks = navLinks.cloneNode(true);
    const mobileRight = navRight.cloneNode(true);
    mobileLinks.classList.add("mobile-nav-links");
    mobileRight.classList.add("mobile-nav-right");
    mobileContent.append(mobileLinks, mobileRight);

    menuToggle.addEventListener("click", () => {
        mobileSidebar.classList.add("active");
    });

    closeSidebar.addEventListener("click", () => {
        mobileSidebar.classList.remove("active");
    });

    navbarInitialized = true;
}

document.addEventListener("includes:loaded", initNavbar);
document.addEventListener("DOMContentLoaded", initNavbar);
