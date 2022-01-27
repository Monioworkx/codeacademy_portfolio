const goToPreviousAnchor = () => {
    let anchors = document.body.getElementsByClassName("a");
    console.log(anchors);
    let loc = window.location.href.replace(/#.*/,'');
    console.log(loc);
    let nextAnchorName;
    
    const upBtn = document.querySelector('.up-btn');

    upBtn.addEventListener('click', ()=> {
        let anchorName = window.location.hash.replace(/#/,'');
    
        // If there is an anchor name...
        if (anchorName) {
    
        // Find current element in anchor list, then
        // get next anchor name, or if at last anchor, set to first
            for (let i=0, iLen=anchors.length; i<iLen; i++) {
                if (anchors[i].name == anchorName) {
                    nextAnchorName = anchors[i++ % iLen].name;
                    break;
                }
            }
        }
    
        // If there was no anchorName or no match,
        // set nextAnchorName to first anchor name
        if (!nextAnchorName) {
        nextAnchorName = anchors[0].name;
        }
    
        // Go to new URL
        window.location.href = loc + '#' + nextAnchorName;
    });
    console.log(nextAnchorName);
}


function isElementInViewport (el) {
    let rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
}



/*  */

const state = {
    currentSection: null,
}
function isElementInViewport (el) {
    let rect = el.getBoundingClientRect();

    return rect.top;

}

const polla = Array.from(document.getElementsByClassName('js-section'));
const test = () =>{
    console.log(isElementInViewport(polla[0]));
}
const initCurrentSectionListener = () => {    
    const handler = () => {
        const sections = Array.from(document.getElementsByClassName('js-section'));
        const visibleSections = sections.filter((section) => isElementInViewport(section));
        const firstVisibleSection = visibleSections[0];
        
        /* console.log({sections, visibleSections, firstVisibleSection}); */
        console.log(sections[0].getBoundingClientRect()); 
        if (firstVisibleSection) {
            state.currentSection = section.dataset.sectionName;
        }
    }
    addEventListener('DOMContentLoaded', handler, false);
    addEventListener('load', handler, false);
    addEventListener('scroll', handler, false);
    addEventListener('resize', handler, false);
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



scrollToAbout();
scrollToProject();
initCurrentSectionListener(); 
test();