import './ProjectCard.css';

export const ProjectCard = (project) => `
    <section class="ah-project-card">
        <img src=${project.image} alt=${project.title}/>
        <article class="ah-header">
            <h2>${project.title}</h2>
            <div>
                <a href=${project.github}>
                    <img src="/icons/github.png" alt="GitHub Icon" class="ah-icon"/>
                </a>
                <a href=${project.link}>
                    <img src="/icons/link.png" alt="Link icon" class="ah-icon"/>
                </a>
            </div>
        </article>
        <article class="ah-detail">
            <p>${project.description}</p>
            <p class="ah-tech">${project.tech.join(' - ')}</p>
        </article>
    </section>
`;
