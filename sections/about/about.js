// Tabs
const aboutTabs = document.querySelectorAll(".about-tab");
const aboutTexts = document.querySelectorAll(".about-text");

aboutTabs.forEach(tab => {
tab.addEventListener("click", () => {
    const target = tab.dataset.target;
    aboutTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    aboutTexts.forEach(text => text.classList.toggle("active", text.id === target));
});
});

// Contadores animados
const counters = document.querySelectorAll(".count");
let started = false;

function animateCounters() {
counters.forEach(counter => {
    const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 100;

    if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 30);
    } else {
        counter.innerText = target.toLocaleString();
    }
    };
    updateCount();
});
}

// Detectar cuando entra en pantalla
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
    if (entry.isIntersecting && !started) {
    started = true;
    animateCounters();
    }
});
}, { threshold: 0.4 });

observer.observe(document.querySelector("#about"));
