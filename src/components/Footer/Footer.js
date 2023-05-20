import './Footer.css';
import { Button } from '../Button/Button';


const template = () => `
    <section class="ah-footer-container" id="ah-footer-container">
        <article>
            <h2>Reach me out</h2>
        </article>
        <article class="ah-social-icons">
            ${Button("https://github.com/infinitidevs", '/icons/github.png', 'GitHub')}
            ${Button("https://www.linkedin.com/in/infinitidevs", '/icons/linkedin.png', 'LinkedIn')}
        </article>
    </section>
`;

export const printTemplate = () => {
    document.querySelector("footer").innerHTML = template();
};