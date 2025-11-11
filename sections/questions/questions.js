// Video 
    const videoSlides = document.querySelectorAll(".video-slide");
    const videoDots = document.querySelectorAll(".video-dots .dot");
    const videoLeft = document.querySelector(".video-arrow.left");
    const videoRight = document.querySelector(".video-arrow.right");
    let currentVideo = 0;

    videoSlides.forEach(slide => {
    const iframe = slide.querySelector("iframe");
    iframe.dataset.src = iframe.src;
    });

    function showVideo(index) {
    if (index < 0) index = videoSlides.length - 1;
    if (index >= videoSlides.length) index = 0;

    videoSlides.forEach((slide, i) => {
        const iframe = slide.querySelector("iframe");

        if (i !== index) {
        iframe.src = iframe.dataset.src;
        slide.classList.remove("active");
        videoDots[i].classList.remove("active");
        }
    });

    const activeSlide = videoSlides[index];
    const activeIframe = activeSlide.querySelector("iframe");

    activeIframe.src = activeIframe.dataset.src;

    activeSlide.classList.add("active");
    videoDots[index].classList.add("active");
    currentVideo = index;
    }

    videoLeft.addEventListener("click", () => showVideo(currentVideo - 1));
    videoRight.addEventListener("click", () => showVideo(currentVideo + 1));
    videoDots.forEach((dot, i) => dot.addEventListener("click", () => showVideo(i)));

// Acordeón 
    const accordionItems = document.querySelectorAll(".accordion-item"); 
    accordionItems.forEach(item => { 
        const header = item.querySelector(".accordion-header"); 
        header.addEventListener("click", () => { 
            const open = item.classList.contains("active"); 
            accordionItems.forEach(i => i.classList.remove("active")); 
            if (!open) item.classList.add("active"); 
        }); 
    });