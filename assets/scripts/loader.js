document.addEventListener("DOMContentLoaded", async () => {
    // Rutas de archivos
    const routes = {
    /* === Partials === */
        header: {
        html: 'partials/header/header.html',
        css: 'partials/header/header.css',
        js:  'partials/header/header.js',
        target: '#header'
        },
        content: {
        html: 'partials/content/content.html',
        css:  'partials/content/content.css',
        js:   'partials/content/content.js',
        target: '#content'
        },
        footer: {
        html: 'partials/footer/footer.html',
        css:  'partials/footer/footer.css',
        js:   'partials/footer/footer.js',
        target: '#footer'
        },

    /* === Sections === */
        hero: {
        html: 'sections/hero/hero.html',
        css:  'sections/hero/hero.css',
        js:   'sections/hero/hero.js',
        target: '#hero'
        },
        about: {
        html: 'sections/about/about.html',
        css:  'sections/about/about.css',
        js:   'sections/about/about.js',
        target: '#about'
        },
        questions: {
        html: 'sections/questions/questions.html',
        css:  'sections/questions/questions.css',
        js:   'sections/questions/questions.js',
        target: '#questions'
        },
        offers: {
        html: 'sections/offers/offers.html',
        css:  'sections/offers/offers.css',
        js:   'sections/offers/offers.js',
        target: '#offers'
        },
        stories: {
        html: 'sections/stories/stories.html',
        css:  'sections/stories/stories.css',
        js:   'sections/stories/stories.js',
        target: '#stories'
        },
        contact: {
        html: 'sections/contact/contact.html',
        css:  'sections/contact/contact.css',
        js:   'sections/contact/contact.js',
        target: '#contact'
        }
    };

    const loadComponent = async ({ html, css, js, target}) => {
        try {
            const res = await fetch(html);
            const hmtlText = await res.text();

            document.querySelector(target).innerHTML = hmtlText;

            if (css && !document.querySelector(`link[href="${css}"]`)) {
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = css;
                document.head.appendChild(link);
            }

            if (js) {
                const script = document.createElement("script");
                script.src = js;
                script.defer = true;
                document.body.appendChild(script);
            }
        } catch (error) {
            console.error('Error al cargar el componente $(html):', error);
        }
    };

    Object.values(routes).forEach(loadComponent);
});
