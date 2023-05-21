import './Lab.css';
import { projectsData } from '../../data/projectsData';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { Divider } from '../../components/Divider/Divider';
import { cleanPage } from '../../utils/cleanPage';
import { changeLab } from '../../utils/changeTheme';


const template = () => {
    return `
        <section class="ah-projects">
            <h2>Featured Projects</h2>
            ${Divider()}
            <article class="ah-projects-container" id="ah-projects-container">
            </article>
        </section>
    `;
};

const LabItems = () => {
    const container = document.querySelector("#ah-projects-container");
    for (const project of projectsData) {
        const figure = document.createElement("figure");
        figure.innerHTML = ProjectCard(project);
        container.appendChild(figure);
    }
};

export const Lab = () => {
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = template();
    LabItems();
    changeLab();
}; 