import './Lab.css';
import { projectsData } from '../../data/projectsData';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { Divider } from '../../components/Divider/Divider';


export const Lab = () => {
    return `
        <section class="ah-projects">
            <h2>Featured Projects</h2>
            ${Divider()}
            <article class="ah-projects-container" id="ah-projects-container">
            </article>
        </section>
    `;
};

export const LabItems = () => {
    const container = document.querySelector("#ah-projects-container");
    for (const project of projectsData) {
        const figure = document.createElement("figure");
        figure.innerHTML = ProjectCard(project);
        container.appendChild(figure);
    }
};