/**
 * Define Global Variables
 * 
*/
//Defining nav and sections global variables below
const nav = document.getElementById('navbar__list');
const sections = [...document.querySelectorAll('section[id]')];

//Building the nav and appending elements below instead of using the # method in html
function createListItem() {
    for (sec of sections) {
        listItem = document.createElement("li");
        listItem.innerHTML = `<a data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a>`;
        nav.appendChild(listItem);
    }
}
createListItem();

//defining values, adding navbar highlight, adding and removing active class below
function isActive(conditional, section) {
    if (conditional) {
        const nav_link = document.querySelector(`a[data-nav="${section.id}"]`);
        nav_link.style.cssText = "background-color: aquamarine;";
        section.classList.add('your-active-class');
        section.style.cssText = "background-color: black;";
    };
}
function notActive(section) {
    const nav_link = document.querySelector(`a[data-nav="${section.id}"]`);
    nav_link.style.cssText = "background-color: white;";
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: ()";
};

//section highlight activation below
function offset(section) {return Math.floor(section.getBoundingClientRect().top);}
const highlight = () => {
    for(const sect of sections) {
        const offsetNumber = offset(sect)
        const inviewport = () => offsetNumber < 100 && offsetNumber > -100
        notActive(sect)
        isActive(inviewport(), sect)
    }
}
window.addEventListener('scroll', highlight);

//scroll & behavior activation below
const scroll = () => {

    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault()

            for (let i = 0; i < sections.length; i++) {
                if (sections[i].id === link.getAttribute("data-nav")) {
                    sections[i].scrollIntoView({behavior: "smooth" });
                }
            }

        });
    });
};
scroll();

