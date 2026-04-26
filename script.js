// Frases del libro
const frases = [
    "Consejo para la juventud: Que tengan su mente abierta hacer cosas positivas que puedan ser mejor para su propia salud y ser independientes|Eduardo Garcia",
    "Queridos compañeros pensemos que estamos en un convivio que la comida es para todos no nada mas para los primeros por que los últimos no alcanzan|",
    "Es muy importante cuidarse desde niño si no es asi cuando entra a cierta edad es cuando se complica mas cualquiera que se a enfermedad|",
    "La activación física es importante para la salud del cuerpo y mente actívate no dejes de ejercitarte|Eli",
    "Tus citas medicas y tu activación física son importantes no te dejes vencer todo es importante para la salud|Ade",
    "A mi me gusta mucho salir a convivir con mis amigos hacer ejercicio cuidar de mi alimentación para tener mejor calidad de vida|",
    "La vida nos enseña a valerme por mi mismo desde los 12 años|",
    "La vida nos enseño muchas cosas solo que no debe de confiar en nadie, solo en uno mismo|",
    "La vida no hice nada trabajar y luchar, me gustan las plantas|",
    "Trabaja en lo que te gusta y nunca tendrás que trabajar \"El tiempo es breve, aprovéchalo. Que todo lo que hagas no sea por obligación, si no por elección y pasión\"|Ingrid",
    "Si en alguna ocasión sufres una quemadura en alguna parte de tu cuerpo, ya sea con agua o con aceite, aplícate vick vaporru, otra cosa que aprendí a lo largo de mi vida es que nunca se deja de aprender!!|Rosa Elviry N.C",
    "Gracias por tu amistad has ejercicio come bien cuídate mucho y disfruta el dia a dia, gracias por la platica|Ede",
    "Hola soy linda, querer me hace mucho respetarme y valorarme y seguir aprendiendo mas de la vida|",
    "En todos los momentos de la vida, siempre hay algo que puedes aprender, hay que pedir sabiduría para aprender todo lo bueno que la vida nos ofrece y poder envejecer sanos en todos los aspectos de la vida|Gaby M.C.",
    "Vive, nunca te quedes con las ganas de hacer lo que te guste, bailar, rie, canta, pasea, disfruta la naturaleza el hubiera no existe. Vive tan intensamente que cuando llegue el caso tu sonrisa lo diga todo se feliz tanto como puedas, no importa que diga que eres loco y haz feliz a quienes mas amas.|",
    "Activarse en cuerpo y mente… es vida es amor, hay que mantenerse activas|Alicia Galicia",
    "La vida: Ser adulto mayor hay que pasar por muchas pruebas nada es fácil nunca hagas planes, La vida vivela como se presenta nunca digas no puedo siempre intenta todo aunque falles pero lo intentaste, se feliz que la vida es corta \"Sobre todo dale gracias a dios\"|",
    "Me llamo Cecilia Teresa Flores Santos les felicito, por lo que hacen es una motivación para mi, para ver la vida con optimismo gracias y sigan ayudando a mas personas|",
    "Quiéreté mucho por que la vida es muy corta|",
    "Haber formado hijos=personas de bien|Rosi",
    "Para inyectar y que no se tape la ahuja cuando es medicamento de penicilina se le pone un poco de liquido de la misma inyección|Amelia O.R.",
    "No dejar de Tomar Agua y Comer Frutas y Verduras Cuidate Cuerpo y Alma Y Cuidarass A Los demás Con Amor|",
    "Para mi la osiosidad es la madre de todos los vicios porque el que que no tiene buenos principios no saben respetar ni ayudar a los demás|",
    "Caminar sin arrastrar los pies para evitar las caídas es muy importante|LMHG",
    "Tener cuida con su cuerpo y ver el dolor de y hacer mucho cuida para que siga funcionando|G.S.P.",
    "\"Con voluntad todo es posible\"|R.C.H",
    "Para estar sano Fisicamente primero hay que tener sana la mente|",
    "Desarrollo social y humano en nuestras comunidades • Educación • Cultura • Deporte • Recreación • Tecnología|FGM",
    "La escencia de Una persona \"Pase lo que Pase siempre será La misma\" Hay que disfrutar Cada momento!!|",
    "Yo Estela Muñoz les comparto que tuve dos perdidas de dos hijos hasta el dia de hoy sigo trabajando porque quiero que se sientan orullosos de su madre que siempre están en mi casa|A.M.R.M.G.J.R.M.",
    "SEA LO QUE SEA A LO QUE TE DEDIQUES • USA PROTECTOR SOLAR • APRENDE UN OFICIO • NO CONFIES EN TODOS • CUIDA TU ENERGIA Y TU ALMA VIVE TODO LO QUE TE QUIERAS LLEVAR CUANDO SE LLEGUE EL DIA FINAL|ROXANA AQUINO ROBLES @unacitapendiente",
    "Para que tu seas sano o sana lo primero es sanar tu mente y todo se arregla|Ma. Del Carmen RM.",
    "Soy Naras Chavez C- yo lo único que les puedo decir, soy muy feliz con mis 3 hijos y 3 nietos, soy viuda hace 18 años y yendo al ejercicio, muchas gracias por este evento hasta ahorita me ha gustado mucho gracias|",
    "AGM yo quisiera aprender mas sociable con las personas del grupo me gustaría hacer mas actividad|",
    "Un consejo para la juventud: • No se droguen • Hagan deporte • Se cuiden mucho • Que dios los vendiga a todos|Juana Yahuaca Cruz",
    "La bida me a enseñado a quererme a valorarme a mi mismo a pensar primero en mi y luego en los demás y que la bida me ha enseñado quiero seguir bibiendo|",
    "Tener mas paciencia aminar con paso firme para no caernos y tener una fractura y caer en cama|",
    "Mi nombre es teresa lopez pomada de marihuana para la rodilla y te de romero para mitigar el dolor Revisarse constantemente en el doctor, para estar saudables. Yo siempre me he cuidado, no soy enfermiza|",
    "Tener mucha paciencia para cuidar a los adultos mayores X que es muy pesado y triste. Pero tenemos que ser muy pasiente para no aserlos sentir incomodos y sean ellos muy felices x el tiempo que les quede. Y cuando partan se vallan muy felices y tranquilos|",
    "Como salir adelante ante mis compañeros tener aptitud ante ellos y apoyarlos cuando sea necesario|Arturo"
];

class LibroInteractivo {
    constructor() {
        this.currentIndex = -1;
        this.pages = [];
        this.totalPages = 0;
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
        
        // Si no cargan las imágenes, mostrar color de fondo
        coverImg.onerror = () => {
            coverImg.style.objectFit = 'cover';
            coverImg.style.backgroundColor = '#667eea';
        };
        
        backCoverImg.onerror = () => {
            backCoverImg.style.objectFit = 'cover';
            backCoverImg.style.backgroundColor = '#764ba2';
        };
    }
    
    createPages() {
        const pagesContainer = document.getElementById('pagesContainer');
        pagesContainer.innerHTML = '';
        
        // Agrupar frases en páginas (3-4 frases por página)
        const frasesPorPagina = 3;
        for (let i = 0; i < frases.length; i += frasesPorPagina) {
            const pageFrases = frases.slice(i, i + frasesPorPagina);
            this.pages.push(pageFrases);
        }
        
        this.totalPages = this.pages.length;
        
        // Crear elementos de página interior
        this.pages.forEach((frasesPagina, idx) => {
            const pageDiv = document.createElement('div');
            pageDiv.className = 'page inner-page';
            pageDiv.id = `page_${idx}`;
            pageDiv.style.display = 'none';
            
            // En la primera página (índice 0) mostrar título y fecha
            let bookInfoHtml = '';
            if (idx === 0) {
                const today = new Date();
                const fechaFormateada = today.toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                bookInfoHtml = `
                    <div class="book-info">
                        <h1 class="book-title">Libro de Sabiduría</h1>
                        <p class="book-date">📅 Fecha de creación: ${fechaFormateada}</p>
                        <p class="book-meta">📖 Consejos y reflexiones para la vida</p>
                    </div>
                `;
            }
            
            pageDiv.innerHTML = `
                ${bookInfoHtml}
                <div class="page-header">
                    <h3>Página ${idx + 1}</h3>
                </div>
                <div class="page-content" id="content_${idx}">
                </div>
                <div class="page-footer">
                    <span>✨ Sabiduría compartida ✨</span>
                </div>
                <div class="page-number">${idx + 1}</div>
            `;
            
            pagesContainer.appendChild(pageDiv);
            
            // Agregar frases al contenido
            const contentDiv = pageDiv.querySelector(`#content_${idx}`);
            frasesPagina.forEach(frase => {
                const partes = frase.split('|');
                const texto = partes[0];
                const autor = partes[1] || '';
                const quoteDiv = document.createElement('div');
                quoteDiv.className = 'quote-item';
                quoteDiv.innerHTML = `
                    <div class="quote-text">💬 ${texto.trim()}</div>
                    ${autor && autor.trim() ? `<div class="quote-author">✍️ ${autor.trim()}</div>` : ''}
                    <div class="separator"></div>
                `;
                contentDiv.appendChild(quoteDiv);
            });
        });
    }
    
    attachEventListeners() {
        const book = document.querySelector('.book');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const coverPage = document.getElementById('coverPage');
        
        // Eventos táctiles para deslizar
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
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.prevPage();
                } else {
                    this.nextPage();
                }
            }
        });
        
        // Eventos de mouse para escritorio
        let mouseStartX = 0;
        book.addEventListener('mousedown', (e) => {
            if (this.isAnimating) return;
            mouseStartX = e.clientX;
            e.preventDefault();
        });
        
        book.addEventListener('mouseup', (e) => {
            if (this.isAnimating) return;
            const mouseEndX = e.clientX;
            const diff = mouseEndX - mouseStartX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.prevPage();
                } else {
                    this.nextPage();
                }
            }
        });
        
        // Botones de navegación
        prevBtn.addEventListener('click', () => {
            this.prevPage();
        });
        
        nextBtn.addEventListener('click', () => {
            this.nextPage();
        });
        
        // Clic en portada para abrir el libro
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
            this.currentIndex = 0;
            this.updateView();
            this.addPageAnimation('page-slide-left');
        } else if (this.currentIndex < this.totalPages - 1) {
            this.currentIndex++;
            this.updateView();
            this.addPageAnimation('page-slide-left');
        } else if (this.currentIndex === this.totalPages - 1) {
            this.currentIndex = this.totalPages;
            this.updateView();
            this.addPageAnimation('page-slide-left');
        }
    }
    
    prevPage() {
        if (this.isAnimating) return;
        
        if (this.currentIndex === this.totalPages) {
            this.currentIndex = this.totalPages - 1;
            this.updateView();
            this.addPageAnimation('page-slide-right');
        } else if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateView();
            this.addPageAnimation('page-slide-right');
        } else if (this.currentIndex === 0) {
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
        
        coverPage.style.display = 'none';
        backCoverPage.style.display = 'none';
        innerPages.forEach(page => {
            page.style.display = 'none';
        });
        
        if (this.currentIndex === -1) {
            coverPage.style.display = 'flex';
            this.updateIndicator('📖 Portada');
        } else if (this.currentIndex === this.totalPages) {
            backCoverPage.style.display = 'flex';
            this.updateIndicator('📕 Contraportada');
        } else {
            const targetPage = document.getElementById(`page_${this.currentIndex}`);
            if (targetPage) {
                targetPage.style.display = 'flex';
                this.updateIndicator(`📄 Página ${this.currentIndex + 1} de ${this.totalPages}`);
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
                prevBtn.style.cursor = 'not-allowed';
                nextBtn.style.opacity = '1';
                nextBtn.style.cursor = 'pointer';
            } else if (this.currentIndex === this.totalPages) {
                prevBtn.style.opacity = '1';
                prevBtn.style.cursor = 'pointer';
                nextBtn.style.opacity = '0.5';
                nextBtn.style.cursor = 'not-allowed';
            } else {
                prevBtn.style.opacity = '1';
                prevBtn.style.cursor = 'pointer';
                nextBtn.style.opacity = '1';
                nextBtn.style.cursor = 'pointer';
            }
        }
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new LibroInteractivo();
});