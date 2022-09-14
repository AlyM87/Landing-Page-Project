/**
 * Define Global Variables
 * 
*/
//Defining nav and sections global variables below
const nav = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

//Building the nav and appending elements below
function createListItem() {
    for (sec of sections) {
        listItem = document.createElement("li");
        listItem.innerHTML = `<a href="#${sec.id}" data-nav="${sec.id}" class="menu_link">${sec.dataset.nav}</a>`;
        nav.appendChild(listItem);
    }
}
createListItem();

// Add class 'active' to section when near top of viewport
//defining values, adding and removing active class below

function offset(section) {
    return Math.floor(section.getBoundingClientRect().top);
}

function isActive(conditional, section) {
    conditional ? section.style.cssText = "background-color: black;" : section.classList.add('your-active-class');
    };


const notActive = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color:()";
};

//function activation below
const sectionActivation = () => {
    sections.forEach(section => {
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 100 && elementOffset >= -100;

        notActive(section);
        isActive(inviewport(),section);
    })
}

window.addEventListener('scroll', sectionActivation);

//scroll function below
function scroll() {

    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            for (let i = 0; i < sections.length; i++) {
                if (sections[i].id === link.getAttribute("data-nav")) {
                    sections[i].scrollIntoView({ behavior: "smooth" });
                }
            }

        });
    });
}
scroll();
