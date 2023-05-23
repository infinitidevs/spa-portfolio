import "./Sandbox.css";
import { cleanPage } from "../../utils/cleanPage";

const template = () => {
    return `
    <section class="ah-sandbox">
        <article class="ah-hero"> 
            <p class="ah-hero-title">Showcase of interesting forthcoming projects</p>
            <span class="ah-cube"></span>
            <span class="ah-cube"></span>
            <span class="ah-cube"></span>
            <span class="ah-cube"></span>
            <span class="ah-cube"></span>
            <span class="ah-cube"></span>
        </article>
    </section>
    `;
};

export const Sandbox = () => {
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = template();
}; 