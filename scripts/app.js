 const projects = [
    {
        idProject: 1,
        imgProject: 'assets/images/Tarjetas.jpg',
        titleProject: 'Gestor de Tareas',
        descriptionProject: 'Una aplicación web simple para gestionar tus tareas diarias. Crea, edita y elimina tareas con facilidad. Desarrollada con HTML, CSS y JavaScript.',
        linkProject:''
    },
    {
        idProject: 2,
        imgProject: 'assets/images/Tarjetas.jpg',
        titleProject: 'Blog Personal',
        descriptionProject: 'Crea y comparte tus ideas en un blog personalizado. Regístrate, inicia sesión y comienza a escribir. Desarrollado con Node.js, Express y MongoDB.',
        linkProject:''
    },
    {
        idProject: 3,
        imgProject: 'assets/images/Tarjetas.jpg',
        titleProject: 'Clima en Tiempo Real',
        descriptionProject: 'Obtén el clima actual y el pronóstico para cualquier ciudad del mundo. Interfaz intuitiva y fácil de usar. Desarrollado con React.js y la API de OpenWeatherMap.',
        linkProject:''
    },
    {
        idProject: 4,
        imgProject: 'assets/images/Tarjetas.jpg',
        titleProject: 'Juego de Adivinanza',
        descriptionProject: 'Pon a prueba tu habilidad con este juego de adivinanza de números! Intenta adivinar el número secreto en el menor número de intentos posible. Desarrollado con HTML, CSS y JavaScript.',
        linkProject:''
        }

]

const references = [
    {
        name: "Jose Rodríguez",
        ocupation: "Developer",
        phone: 3125897461,
        email: "JoseRodriguez323@gmail.com"
        
    },
    {
        name: "Raúl Contreras",
        ocupation: "Analista de Datos",
        phone: 3018578549,
        email: "Raulcontrerasl@hotmail.com"
    },
    {
        name: "Diego Linares",
        ocupation: "Diseñador UX/UI",
        phone: 3152698758,
        email: "Diego-linares23@gmail.com"
    }
]

const experience = [
    {
        languageName:"Java Script",
        percentprogress: 40,
        image: "assets/images/JS.png",
        level: 'Intermedio'
    },
    {
        languageName:"React",
        percentprogress: 50,
        image: "assets/images/React.png",
        level: 'Intermedio'
    },
    {
        languageName:"Mongo",
        percentprogress: 50,
        image: "assets/images/Mongo.png",
        level: 'Intermedio'
    },
    {
        languageName:"Css",
        percentprogress: 70,
        image: "assets/images/Css.jpg",
        level: 'Intermedio'
    }
]

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

loadSectionProjects() 
function loadSectionProjects() {
 projects.forEach( project => createCardsProjetc(project))
}

loadSectionReferences() 
function loadSectionReferences() {
 references.forEach( ref => createCardsReferences(ref))
}

loadSectionExperiences() 
function loadSectionExperiences() {
 experience.forEach( exp => createCardsExperiences(exp))
}

function createCardsProjetc(project) {
    const cardProject = document.createElement('div')
    cardProject.classList.add('card-projects')

    const containerImg = document.createElement('div')
    containerImg.classList.add('container-img-card')

    const imgcard = document.createElement('img')
    imgcard.src = project.imgProject
    imgcard.alt = project.titleProject

    const containerDescription = document.createElement('div')
    containerDescription.classList.add('container-description-card')

    const titleCard = document.createElement('h3')
    titleCard.textContent = project.titleProject

    const descriptionCard = document.createElement('p')
    descriptionCard.textContent = project.descriptionProject

    const goToProject = document.createElement('a')
    goToProject.href = project.linkProject

    goToProject.setAttribute('target','_blank')
    goToProject.textContent = 'Ir a proyecto'

    cardProject.appendChild(containerImg)
    cardProject.appendChild(containerDescription)

    containerImg.appendChild(imgcard)
    containerDescription.appendChild(titleCard)
    containerDescription.appendChild(descriptionCard)
    containerDescription.appendChild(goToProject)

    document.querySelector('.container-cards').appendChild(cardProject)

}

function createCardsReferences(reference) {
    const cardReference = document.createElement('div');
    cardReference.classList.add('card-reference');

    const pName = document.createElement('p');
    pName.textContent = 'Nombre:';
    const spanName = document.createElement('span');
    spanName.textContent = reference.name; 
    pName.appendChild(spanName);

    const pOcupation = document.createElement('p');
    pOcupation.textContent = 'Ocupación:';
    const spanOcupation = document.createElement('span');
    spanOcupation.textContent = reference.ocupation; 
    pOcupation.appendChild(spanOcupation);

    const pPhone = document.createElement('p');
    pPhone.textContent = 'Telefono:';
    const spanPhone = document.createElement('span');
    spanPhone.textContent = reference.phone; 
    pPhone.appendChild(spanPhone);

    const pEmail = document.createElement('p');
    pEmail.textContent = 'Email:';
    const spanEmail = document.createElement('span');
    spanEmail.textContent = reference.email; 
    pEmail.appendChild(spanEmail);

    cardReference.appendChild(pName);
    cardReference.appendChild(pOcupation);
    cardReference.appendChild(pPhone);
    cardReference.appendChild(pEmail);

    document.querySelector('.card-references').appendChild(cardReference);
}

function createCardsExperiences(experience) {
    const cardExperience = document.createElement('div')
    cardExperience.classList.add('card-experience')

    const imgCard = document.createElement('img')
    imgCard.src = experience.image 
    
    const title = document.createElement('h4')
    title.textContent = experience.languageName 
    
    const level = document.createElement('h5')
    level.textContent = experience.level 

    const progress = document.createElement('progress')
    progress.classList.add('progress-bar')
    progress.setAttribute('value', experience.percentprogress)
    progress.setAttribute('max', '100')

    cardExperience.appendChild(imgCard)
    cardExperience.appendChild(title)
    cardExperience.appendChild(progress)
    cardExperience.appendChild(level)
    
    document.querySelector('.container-experience').appendChild(cardExperience)
}

