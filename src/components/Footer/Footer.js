import './Footer.css';
import { Button } from '../Button/Button';
import { changeFooter } from '../../utils/changeTheme';

const template = () => {
    return `
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
};

export const Footer = () => {
    const footer = document.querySelector("footer");
    footer.innerHTML = template();
    changeFooter();
}; 