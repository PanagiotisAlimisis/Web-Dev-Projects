const navigationBar = document.getElementById("navbar__list");
const sectionsOfText = document.querySelectorAll("section");

// build the nav
function addListItemsToNav() {
    for (let section of sectionsOfText) {
        let listItem = document.createElement("li");
        listItem.className = "menu__link";
        listItem.dataset.nav = section.id;
        listItem.innerText = section.dataset.nav;
        navigationBar.appendChild(listItem);
    }
}

function getActiveElement() {
    let maxSection = sectionsOfText[0];
    let minVal = 10000;
    for (const item of sectionsOfText) {
        let bounding = item.getBoundingClientRect();
        if (bounding.top > -300 & bounding.top < minVal) {
            minVal = bounding.top;
            maxSection = item;
        }
    }
    return maxSection;
}

function changeHeaderStyle(elem) {
    let cssStyle = document.createElement("style");
    cssStyle.innerHTML = ".active-section-on-viewport { background: rgba(0, 0, 0, 0.527); background: linear-gradient(360deg, rgba(60, 52, 78, 0.5) 10%, rgba(255, 255, 255, .5) 100%); border-radius: 50px; }";
    elem.appendChild(cssStyle);
}

// Scroll to section on link click
function scrollWhenClicked() {
    navigationBar.addEventListener("click", function(event) {
        const clickedSection = document.querySelector("#" + event.target.dataset.nav);
        clickedSection.scrollIntoView({
            behavior: "smooth"
        });
    });
}

function changeActiveElementsStyles() {
    window.addEventListener("scroll", function(event) {
        const activeElement = getActiveElement();
        
        /* Change background of the section*/
        for (let item of sectionsOfText) {
            if (item.id != activeElement.id & item.classList.contains("your-active-class")) {
                item.classList.remove("your-active-class");
            }
        }
        activeElement.classList.add("your-active-class");


        /*Change header style*/
        const active = document.querySelector("li[data-nav='" + activeElement.id + "']");
        active.classList.add("active-section-on-viewport");
        
        const headers = document.querySelectorAll(".menu__link");
        for (let item of headers) {
            if (item.dataset.nav != active.dataset.nav & item.classList.contains("active-section-on-viewport")) {
                item.classList.remove("active-section-on-viewport");
            }
        }
        changeHeaderStyle(activeElement);
    });
}

addListItemsToNav();
scrollWhenClicked();
changeActiveElementsStyles();

/*Change color when mouse is on the navigation bar*/ 
const unorderdList = document.querySelectorAll("li");
for (let listItem of unorderdList) {
    listItem.addEventListener("mouseover", function(event) {
        listItem.style.color = 'red';
    });
}
for (let listItem of unorderdList) {
    listItem.addEventListener("mouseout", function(event) {
        listItem.style.color = 'white';
    });
}