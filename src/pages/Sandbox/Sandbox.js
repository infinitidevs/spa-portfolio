import "./Sandbox.css";

const Sandbox = () => {
    return `
    <section class="ah-sandbox">
        <article class="ah-hero"> 
            <p class="ah-hero__title">Showcase of interesting forthcoming projects</p>
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

export const printSandbox = () => {
    document.querySelector("main").innerHTML = Sandbox();
};