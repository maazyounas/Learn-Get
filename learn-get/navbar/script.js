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

    const setMenuOpen = (isOpen) => {
        mobileSidebar.classList.toggle("active", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.textContent = isOpen ? "✕" : "☰";
        document.body.classList.toggle("menu-open", isOpen);
    };

    menuToggle.addEventListener("click", () => {
        const isOpen = !mobileSidebar.classList.contains("active");
        setMenuOpen(isOpen);
    });

    closeSidebar.addEventListener("click", () => {
        setMenuOpen(false);
    });

    const mobileDropdownToggle = mobileContent.querySelector(".dropdown > a");
    if (mobileDropdownToggle) {
        mobileDropdownToggle.addEventListener("click", (event) => {
            event.preventDefault();
            const dropdown = mobileDropdownToggle.closest(".dropdown");
            if (!dropdown) return;
            dropdown.classList.toggle("is-open");
        });
    }

    navbarInitialized = true;
}

document.addEventListener("includes:loaded", initNavbar);
document.addEventListener("DOMContentLoaded", initNavbar);
