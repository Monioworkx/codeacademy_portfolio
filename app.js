const state = {
    currentSection: null,
}


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

/* Intersection observer sections */

const jsSections = document.querySelectorAll('.js-section');

const options = {
    root: null,
    threshold: 0,
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
            console.log(goToPreviousSection);
            goToPreviousSection.scrollIntoView();
        });
    })
}, options);

jsSections.forEach(section => {
    observer.observe(section);
});



scrollToAbout();
scrollToProject();
/* upPagination(); */
