const counter = document.getElementById("grad-counter");
let count = 0;
const target = 1000;
const speed = 40;

function updateCounter() {
    if (count < target) {
        count += Math.ceil(target / 100);
        counter.textContent = count.toLocaleString();
        setTimeout(updateCounter, speed);
    } else {
        counter.textContent = target.toLocaleString();
    }
}

window.addEventListener("scroll", () => {
const section = document.querySelector("#stories");
    if (section.getBoundingClientRect().top < window.innerHeight - 150 && count === 0) {
        updateCounter();
    }
});
