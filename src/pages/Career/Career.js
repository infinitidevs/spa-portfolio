import './Career.css';
import { careerData } from '../../data/careerData';
import { CareerCard} from '../../components/CareerCard/CareerCard';
import { Divider } from '../../components/Divider/Divider';


export const Career = () => {
    return `
        <section class="ah-track-record">
            <h2>Career Track Record</h2>
            ${Divider()}
            <article class="ah-track-record-container" id="ah-track-record-container">
            </article>
        </section>
    `;
};

export const CareerItems = () => {
    const container = document.querySelector("#ah-track-record-container");
    for (const careerItem of careerData) { 
        const figure = document.createElement("figure");
        figure.innerHTML = CareerCard(careerItem);
        container.appendChild(figure);
    }
};