console.log('executing');

function menuAppear() {
    //to understand the below part of code see point 5 of Read Me file
    let hamburgerNavItems = document.getElementById('hamburgerNavItems');
    if (hamburgerNavItems.classList.contains('hidden')) {

        hamburgerNavItems.classList.remove('hidden');
        hamburgerNavItems.style.transform = "translateX(0px)";
        setTimeout(() => {
            hamburgerNavItems.classList.remove('visuallyHidden');
        }, 1);
    }
    else {
        hamburgerNavItems.classList.add('visuallyHidden');
        // hamburgerNavItems.style.transform = "translateX(100px)";
        hamburgerNavItems.addEventListener('transitionend', () => {
            hamburgerNavItems.classList.add('hidden');
        }, {//to understand the below part of code see point 6 of Read Me file
            capture: false,
            once: true,//dont know about the other two but this once just lets the event listner to be fired once only and thus it prevents the bug of hidden class automatically adding after the removal of visualHidden class as then also a transition has ended
            passive: false
        }
        );
    }
}

let hamburgerLogo = document.getElementById('hamburgerLogo');
hamburgerLogo.addEventListener("click", menuAppear);