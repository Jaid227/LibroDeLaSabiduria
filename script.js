// 42 frases - UNA POR PÁGINA
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
        
        // Crear una página por cada frase
        frases.forEach((frase, idx) => {
            const [texto, autor] = frase.split('|');
            const pageDiv = document.createElement('div');
            pageDiv.className = 'page inner-page';
            pageDiv.id = `page_${idx}`;
            pageDiv.style.display = 'none';
            
            const today = new Date();
            const fechaFormateada = today.toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            // Primera página (índice 0) tiene título e información
            let firstPageInfo = '';
            if (idx === 0) {
                firstPageInfo = `
                    <div class="first-page-info">
                        <h1>📖 Libro de Sabiduría</h1>
                        <p>📅 ${fechaFormateada}</p>
                        <p>✨ Consejos y reflexiones para la vida ✨</p>
                    </div>
                `;
            }
            
            pageDiv.innerHTML = `
                ${firstPageInfo}
                <div class="quote-container">
                    <div class="quote-text">${texto.trim()}</div>
                    <div class="quote-separator"></div>
                    ${autor && autor.trim() ? `<div class="quote-author">✍️ ${autor.trim()}</div>` : ''}
                </div>
                <div class="page-number">${idx + 1}</div>
            `;
            
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
            this.updateIndicator('📖 Portada');
            jumpBtn.textContent = 'Contraportada';
        } else if (this.currentIndex === this.totalPages) {
            backCoverPage.style.display = 'flex';
            this.updateIndicator('📕 Contraportada');
            jumpBtn.textContent = 'Portada';
        } else {
            const targetPage = document.getElementById(`page_${this.currentIndex}`);
            if (targetPage) {
                targetPage.style.display = 'flex';
                this.updateIndicator(`📄 Página ${this.currentIndex + 1} de ${this.totalPages}`);
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
