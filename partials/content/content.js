// Botón Subir
    const btnUp = document.getElementById("btnUp");
    window.addEventListener("scroll", () => {
        if(window.scrollY > 200){
        btnUp.style.display = "flex";
        } else {
        btnUp.style.display = "none";
        }
    });
    btnUp.addEventListener("click", ()=> {
        window.scrollTo({top:0, behavior:'smooth'});
    });

// Animación Botón Matriculate
    const btnMatricula = document.getElementById("btnEnroll");
    setInterval(() => {
        btnMatricula.classList.add("shake");
        setTimeout(() => btnMatricula.classList.remove("shake"), 600);
    }, 3000);
