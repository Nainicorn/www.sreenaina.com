let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
};

let observer = new IntersectionObserver(callback, options);
let sections = document.querySelectorAll('section');
for(section of sections) {
    observer.observe(section);
}

function callback(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log('intersecting');
        }
    });
};