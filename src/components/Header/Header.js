import './Header.css';
import { templateNavbar as Navbar } from '../Navbar/Navbar';
import { changeTheme } from '../../utils/changeTheme';

const template = () => `
    <section class="ah-top-nav" id="ah-header-container">
        ${Navbar()}
    </section>
`;

export const Header = () => {
    const header = document.querySelector("header");
    header.innerHTML = template();
    changeTheme();
}; 