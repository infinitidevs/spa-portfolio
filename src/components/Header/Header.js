import './Header.css';
import { templateNavbar as Navbar } from '../Navbar/Navbar';
import { changeTheme } from '../../utils/changeTheme';

const template = () => `
    <section class="ah-top-nav" id="ah-header-container">
        ${Navbar()}
    </section>
`;

export const printTemplate = () => {
    document.querySelector("header").innerHTML = template();
    changeTheme();
};