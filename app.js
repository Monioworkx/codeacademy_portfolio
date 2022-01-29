const state = {
    currentSection: null,
}

/* Main menu buttons scroll to section */

const scrollToAbout = () => {
    const aboutAnchor = document.getElementById('aboutAnchor');
    const aboutCard = document.querySelector('.about');

    aboutCard.addEventListener('click', ()=> {
        aboutAnchor.scrollIntoView();
    });
}

const scrollToProject = () => {
    const projectAnchor = document.getElementById('projectAnchor');
    const projectCard = document.querySelector('.projects');
    
    projectCard.addEventListener('click', ()=> {
        projectAnchor.scrollIntoView();
    });
}

const scrollToTechnologies = () => {
    const technologieAnchor = document.getElementById('technologiesAnchor');
    const technologieCard = document.querySelector('.learning');
    
    technologieCard.addEventListener('click', ()=> {
        technologieAnchor.scrollIntoView();
    });
}

const scrollToContact = () => {
    const contactAnchor = document.getElementById('contactAnchor');
    const contactCard = document.querySelector('.contact');
    
    contactCard.addEventListener('click', ()=> {
        contactAnchor.scrollIntoView();
    });
}

/* Intersection observer sections */

const jsSections = document.querySelectorAll('.js-section');

const options = {
    root: null,
    threshold: 0.4,
    rootMargin: "-150px",
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        state.currentSection = entry.target;
        
        const upButton = document.querySelector('.up-btn');
        upButton.addEventListener('click', () => {
            const jsSectionsArray = entries.map((ent) => {
                return ent.target;
            });
            const sectionInView = state.currentSection;
            const previousSectionIndex = jsSectionsArray.indexOf(sectionInView) - 1;
            const goToPreviousSection = document.querySelector(`.${(jsSectionsArray[previousSectionIndex].classList)[0]}`);
            
            goToPreviousSection.scrollIntoView();
        });

        const downButton = document.querySelector('.down-btn');
        downButton.addEventListener('click', () => {
            const jsSectionsArray = entries.map((ent) => {
                return ent.target;
            });
            const sectionInView = state.currentSection;
            const nextSectionIndex = jsSectionsArray.indexOf(sectionInView) + 1;
            const goToNextSection = document.querySelector(`.${(jsSectionsArray[nextSectionIndex].classList)[0]}`);
            console.log(goToNextSection);
            goToNextSection.scrollIntoView();
        });

        const sectionInView = state.currentSection;              
       


        const arrowBtns = document.querySelectorAll('.arrow-btn');
        const navBar = document.querySelector('.nav-bar');  

        if (sectionInView === jsSections[2]) { 
            navBar.classList.add('nav-bar-dark');
            arrowBtns.forEach(btn => btn.classList.add('arrow-btn-dark'));
        } else { 
            navBar.classList.remove('nav-bar-dark');
            arrowBtns.forEach(btn => btn.classList.remove('arrow-btn-dark'));
        }
        
    })
}, options);

jsSections.forEach(section => {
    observer.observe(section);
});



/* card animation */

const jsCard = document.querySelector(".js-card");
const backText = document.querySelector(".back");
const rotateCardJs = () => {   
    jsCard.classList.toggle('rotate');
    
    if(backText.style.overflow != 'visible') {
        backText.style.overflow = 'visible';
    } else {
        backText.style.overflow = 'hidden';
    }
}

jsCard.addEventListener('click', rotateCardJs);

const htmlCard = document.querySelector(".html-card");
const rotateCardHtml = () => {   
    htmlCard.classList.toggle('rotate');    
} 

htmlCard.addEventListener('click', rotateCardHtml);

scrollToAbout();
scrollToProject();
scrollToTechnologies();
scrollToContact();

