// 42 frases - UNA POR PÁGINA
const frases = [
    "",
    "Que tengan su mente abierta a hacer cosas positivas que puedan ser mejor para su propia salud y ser independientes|Eduardo García",
    "Pensemos que estamos en un convivio que la comida es para todos no nada más para los primeros porque los últimos no alcanzan",
    "Es muy importante cuidarse desde niño, si no es así cuando entras a cierta edad es cuando se complica más cualquiera que sea la enfermedad",
    "La activación física es importante para la salud del cuerpo y mente, actívate no dejes de ejercitarte|Eli.",
    "Tus citas médicas y tu activación física son importantes, no te dejes vencer todo es importante para la salud|Ade.",
    "A mi me gusta mucho salir a convivir con mis amigos, hacer ejercicio y cuidar de mi alimentación para tener mejor calidad de vida",
    "La vida me enseñó a valerme por mí mismo desde los 12 años",
    "La vida nos enseña muchas cosas, como que no debes de confiar en nadie, solo en uno mismo",
    "En la vida no hice nada más que trabajar y luchar, me gustan las plantas",
    "Trabaja en lo que te gusta y nunca tendrás que trabajar. El tiempo es breve, aprovéchalo. Que todo lo que hagas no sea por obligación, si no por elección y pasión|Ingrid 😊",
    "Si en alguna ocasión sufres una quemadura en alguna parte de tu cuerpo, ya sea con agua o con aceite, aplícate Vick VapoRub. Otra cosa que aprendí a lo largo de mi vida es que nunca se deja de aprender|Rosa Elvira M.C",
    "Gracias por tu amistad, haz ejercicio, come bien, cuídate mucho y disfruta el día a día, gracias por la plática|Edu",
    "Hola soy Linda, quererme mucho, respetarme, valorarme y seguir aprendiendo más de la vida",
    "En todos los momentos de la vida siempre hay algo que puedes aprender, hay que pedir sabiduría para aprender todo lo bueno que la vida nos ofrece y poder envejecer sanos en todos los aspectos de la vida|Gaby M.C.",
    "Vive, nunca te quedes con las ganas de hacer lo que te guste, baila, ríe, canta, pasea y disfruta la naturaleza, el hubiera no existe. Vive tan intensamente que cuando llegue el ocaso tu sonrisa lo diga todo, sé feliz, tanto como puedas, no importa que digan que eres loco y haz feliz a quienes más amas|SAC",
    "Activarse en cuerpo y mente… es vida, es amor, hay que mantenerse activas|Alicia Galicia",
    "Ser adulto mayor hay que pasar por muchas pruebas nada es fácil nunca hagas planes, la vida vívela como se presenta, nunca digas no puedo, siempre intenta todo, aunque falles, pero lo intentaste, sé feliz que la vida es corta, sobre todo dale gracias a Dios",
    "Me llamo Cecilia Teresa Flores Santos, les felicito porque lo que hacen es una motivación para mí para ver la vida con optimismo, gracias y sigan ayudando a más personas",
    "Quiérete mucho por que la vida es muy corta",
    "Haber formado hijos = personas de bien|Rosi",
    "Para inyectar y que no se tape la aguja, cuando es medicamento de penicilina se le pone un poco de líquido de la misma inyección|Amelia O.R.",
    "No dejar de tomar agua, comer frutas y verduras, cuídate cuerpo y alma y cuidarás a los demás con amor|Laura",
    "Para mí la ociosidad es la madre de todos los vicios porque el que no tiene buenos principios no saben respetar ni ayudar a los demás",
    "Caminar sin arrastrar los pies para evitar las caídas es muy importante|L.M.H.G.",
    "Tener cuidado con su cuerpo y tener cuidado para que siga funcionando|G.S.P.",
    "Con voluntad todo es posible|R.C.H",
    "Para estar sano físicamente primero hay que tener sana la mente",
    "Desarrollo social y humano en nuestras comunidades: Educación, Cultura, Deporte, Recreación, Tecnología|F.G.M.",
    "La esencia de una persona: pase lo que pase siempre será la misma. ¡Hay que disfrutar cada momento!|D",
    "Yo Estela Muñoz les comparto que tuve dos pérdidas de dos hijos hasta el día de hoy sigo trabajando porque quiero que se sientan orgullosos de su madre que siempre están en mi corazón|A.M.R.M.G.J.R.M.",
    "Sea lo que sea a lo que te dediques, usa protector solar, aprende un oficio, no confíes en todos, cuida tu energía y tu alma, vive todo lo que te quieras llevar cuando se llegue el día final|Roxana Aquino Robles @unacitapendiente",
    "Para que tú seas sano o sana lo primero es sanar tu mente y todo se arregla|Ma. Del Carmen RM.",
    "Soy Nancy Chavez C., yo lo único que les puedo decir es soy muy feliz con mis 3 hijos y 3 nietos, soy viuda hace 18 años y yendo al ejercicio, muchas gracias por este evento hasta ahorita me ha gustado mucho, gracias",
    "Yo quisiera aprender a ser más sociable con las personas del grupo, me gustaría hacer más actividades|A.G.M.",
    "Un consejo para la juventud: No se droguen, hagan deporte, cuídense mucho, que Dios les bendiga a todos|Juana Yahuaca Cruz",
    "La vida me ha enseñado a quererme, a abrazarme a mí misma, a pensar primero en mí y luego en los demás, yo amo la vida, quiero seguir viviendo|Ma. Elena",
    "Tener más paciencia, caminar con paso firme para no caernos y tener una fractura o caer en cama",
    "Mi nombre es Teresa Flores, pomada de marihuana y té de romero para mitigar el dolor",
    "Tener mucha paciencia para cuidar a los adultos mayores porque es muy pesado y triste. Pero tenemos que ser muy pacientes para no hacerlos sentir incómodos y sean ellos muy felices por el tiempo que les quede. Y cuando partan se vayan muy felices y tranquilos|LRP",
    "Revisarse constantemente en el médico, para estar saludables. Yo siempre me he cuidado, no soy enfermiza|Margarita Álvarez Jiménez",
    "Como salir adelante ante mis compañeros. Tener aptitud ante ellos y apoyarlos cuando sea necesario|Arturo"
];

class LibroInteractivo {
    constructor() {
        this.currentIndex = -1; // -1: portada, 0..41: páginas interiores, 42: contraportada
        this.totalFrases = frases.length; // 42 páginas interiores
        this.totalPages = this.totalFrases; // 42
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.isAnimating = false;
        
        this.init();
    }
    
    init() {
        this.createPages();
        this.attachEventListeners();
        this.updateView();
        
        // Configurar imágenes
        const coverImg = document.getElementById('coverImage');
        const backCoverImg = document.getElementById('backCoverImage');
        
        coverImg.onerror = () => {
            coverImg.style.objectFit = 'cover';
            coverImg.style.backgroundColor = '#8B4513';
        };
        
        backCoverImg.onerror = () => {
            backCoverImg.style.objectFit = 'cover';
            backCoverImg.style.backgroundColor = '#2c1810';
        };
    }
    
    createPages() {
        const pagesContainer = document.getElementById('pagesContainer');
        pagesContainer.innerHTML = '';
        
        const today = new Date();
        const fechaFormateada = today.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Crear una página por cada frase
        frases.forEach((frase, idx) => {
            const [texto, autor] = frase.split('|');
            const pageDiv = document.createElement('div');
            pageDiv.className = 'page inner-page';
            pageDiv.id = `page_${idx}`;
            pageDiv.style.display = 'none';
            
            // PRIMERA PÁGINA (índice 0) - Diseño completamente centrado y responsivo
            if (idx === 0) {
                pageDiv.innerHTML = `
                    <div class="first-page-wrapper">
                        <div class="first-page-icon"></div>
                        <div class="first-page-title">Libro de Sabiduría</div>
                        <div class="first-page-divider"></div>
                        <div class="first-page-subtitle">Consejos y reflexiones para la vida</div>
                        <div class="first-page-date"> ${"22 de abril 2026"}</div>
                        <div class="first-page-footer"> Una frase, una enseñanza </div>
                    </div>
                    <div class="page-number">1</div>
                `;
            } else {
                // Resto de páginas con frases
                pageDiv.innerHTML = `
                    <div class="quote-container">
                        <div class="quote-text">${texto ? texto.trim() : ''}</div>
                        <div class="quote-separator"></div>
                        ${autor && autor.trim() ? `<div class="quote-author"> ${autor.trim()}</div>` : ''}
                    </div>
                    <div class="page-number">${idx + 1}</div>
                `;
            }
            
            pagesContainer.appendChild(pageDiv);
        });
    }
    
    attachEventListeners() {
        const book = document.querySelector('.book');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const jumpBtn = document.getElementById('jumpBtn');
        const coverPage = document.getElementById('coverPage');
        
        // Eventos táctiles
        let touchStartX = 0;
        let touchEndX = 0;
        
        book.addEventListener('touchstart', (e) => {
            if (this.isAnimating) return;
            touchStartX = e.touches[0].clientX;
        });
        
        book.addEventListener('touchend', (e) => {
            if (this.isAnimating) return;
            touchEndX = e.changedTouches[0].clientX;
            const diff = touchEndX - touchStartX;
            if (Math.abs(diff) > 40) {
                if (diff > 0) {
                    this.prevPage();
                } else {
                    this.nextPage();
                }
            }
        });
        
        // Eventos de mouse
        let mouseStartX = 0;
        book.addEventListener('mousedown', (e) => {
            if (this.isAnimating) return;
            mouseStartX = e.clientX;
        });
        
        book.addEventListener('mouseup', (e) => {
            if (this.isAnimating) return;
            const mouseEndX = e.clientX;
            const diff = mouseEndX - mouseStartX;
            if (Math.abs(diff) > 40) {
                if (diff > 0) {
                    this.prevPage();
                } else {
                    this.nextPage();
                }
            }
        });
        
        // Botones
        prevBtn.addEventListener('click', () => {
            this.prevPage();
        });
        
        nextBtn.addEventListener('click', () => {
            this.nextPage();
        });
        
        // Botón de salto (Contraportada/Portada)
        jumpBtn.addEventListener('click', () => {
            if (this.currentIndex === -1) {
                // Ir a contraportada
                this.currentIndex = this.totalPages;
                this.updateView();
                this.addPageAnimation('page-slide-left');
            } else if (this.currentIndex === this.totalPages) {
                // Ir a portada
                this.currentIndex = -1;
                this.updateView();
                this.addPageAnimation('page-slide-right');
            } else {
                // Si está en páginas interiores, ir a contraportada
                this.currentIndex = this.totalPages;
                this.updateView();
                this.addPageAnimation('page-slide-left');
            }
        });
        
        // Clic en portada
        coverPage.addEventListener('click', () => {
            if (this.currentIndex === -1) {
                this.currentIndex = 0;
                this.updateView();
                this.addPageAnimation('page-slide-left');
            }
        });
    }
    
    nextPage() {
        if (this.isAnimating) return;
        
        if (this.currentIndex === -1) {
            // Portada -> primera página interior
            this.currentIndex = 0;
            this.updateView();
            this.addPageAnimation('page-slide-left');
        } else if (this.currentIndex < this.totalPages - 1) {
            // Siguiente página interior
            this.currentIndex++;
            this.updateView();
            this.addPageAnimation('page-slide-left');
        } else if (this.currentIndex === this.totalPages - 1) {
            // Última página interior -> contraportada
            this.currentIndex = this.totalPages;
            this.updateView();
            this.addPageAnimation('page-slide-left');
        }
        // Si está en contraportada, no hace nada
    }
    
    prevPage() {
        if (this.isAnimating) return;
        
        if (this.currentIndex === this.totalPages) {
            // Contraportada -> última página interior
            this.currentIndex = this.totalPages - 1;
            this.updateView();
            this.addPageAnimation('page-slide-right');
        } else if (this.currentIndex > 0) {
            // Página interior anterior
            this.currentIndex--;
            this.updateView();
            this.addPageAnimation('page-slide-right');
        } else if (this.currentIndex === 0) {
            // Primera página interior -> portada
            this.currentIndex = -1;
            this.updateView();
            this.addPageAnimation('page-slide-right');
        }
    }
    
    addPageAnimation(animationClass) {
        const visiblePage = document.querySelector('.page:not([style*="display: none"])');
        if (visiblePage && visiblePage.style.display !== 'none') {
            this.isAnimating = true;
            visiblePage.classList.add(animationClass);
            setTimeout(() => {
                visiblePage.classList.remove(animationClass);
                this.isAnimating = false;
            }, 400);
        } else {
            setTimeout(() => {
                this.isAnimating = false;
            }, 400);
        }
    }
    
    updateView() {
        const coverPage = document.getElementById('coverPage');
        const backCoverPage = document.getElementById('backCoverPage');
        const innerPages = document.querySelectorAll('.inner-page');
        const jumpBtn = document.getElementById('jumpBtn');
        
        coverPage.style.display = 'none';
        backCoverPage.style.display = 'none';
        innerPages.forEach(page => {
            page.style.display = 'none';
        });
        
        if (this.currentIndex === -1) {
            coverPage.style.display = 'flex';
            this.updateIndicator(' Portada');
            jumpBtn.textContent = 'Contraportada';
        } else if (this.currentIndex === this.totalPages) {
            backCoverPage.style.display = 'flex';
            this.updateIndicator(' Contraportada');
            jumpBtn.textContent = 'Portada';
        } else {
            const targetPage = document.getElementById(`page_${this.currentIndex}`);
            if (targetPage) {
                targetPage.style.display = 'flex';
                this.updateIndicator(` Página ${this.currentIndex + 1} de ${this.totalPages}`);
                jumpBtn.textContent = 'Contraportada';
            }
        }
        
        this.updateButtons();
    }
    
    updateIndicator(text) {
        const indicator = document.getElementById('pageIndicator');
        if (indicator) {
            indicator.textContent = text;
        }
    }
    
    updateButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        if (prevBtn && nextBtn) {
            if (this.currentIndex === -1) {
                prevBtn.style.opacity = '0.5';
                nextBtn.style.opacity = '1';
            } else if (this.currentIndex === this.totalPages) {
                prevBtn.style.opacity = '1';
                nextBtn.style.opacity = '0.5';
            } else {
                prevBtn.style.opacity = '1';
                nextBtn.style.opacity = '1';
            }
        }
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    new LibroInteractivo();
});
