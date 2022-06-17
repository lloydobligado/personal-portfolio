// ======================================
// =============== CURSOR ===============
// ======================================

let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.navbar__container__item a');

window.addEventListener("mousemove", cursor = (e) => {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
});

navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
    });

    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
    });
});

// ======================================
// ============ ANIMATED NAV ============
// ======================================

let navItems = document.querySelectorAll('.navbar__container__item .link');
navItems.forEach(item => {
    let word = item.children[0].children[0].innerText.split('');
    item.children[0].innerHTML = '';
    word.forEach((letter,idx) => {
        item.children[0].innerHTML += `<span style="--index: ${idx};">${letter}</span>`;
    })
    let cloneDiv = item.children[0].cloneNode(true);
    cloneDiv.style.position = 'absolute';
    cloneDiv.style.left = '0';
    cloneDiv.style.top = '0';
    item.appendChild(cloneDiv)

})

// ======================================
// =========== GSAP ANIMATION ===========
// ======================================

const timeline = gsap.timeline({default: {duration: 1} })
timeline
    .fromTo('.hero-container__caption', {opacity: 0}, {opacity: 1})
    .from('.navbar__container', {x: '-100% ', ease: 'power1.in'})
    .from('.navlogo', {x: '-150% ', ease: 'bounce'})
    .from('.circle',{x: '100% ', ease: 'power1.in'}, '<')
    .from('.link', {opacity: 0, stagger: .1})
    // .from('.right', {x: '-100vw', ease: 'power2.in'}, 1)
    // .from('.left', {x: '-100vw'}, '<')
    // .to('.footer', {y: 0, ease: 'elastic'})
    // .fromTo('.button', {opacity: 0, scale: 0}, {opacity: 1, scale: 1})

const button = document.querySelector('.circle')
    button.addEventListener('click', () => {
        timeline.timeScale(3)
        timeline.reverse()
    })


