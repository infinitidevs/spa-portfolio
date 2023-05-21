import './Navbar.css';

export const templateNavbar = () => `
    <a href="#" role="link" aria-label="#" id="home-link" class="ah-logo">
      <h2>> AH _</h2>
    </a>
    <input id="menu-toggle" class="ah-menu-toggle" type="checkbox" />
    <label class='ah-menu-button-container' for="menu-toggle">
      <div class='ah-menu-button'></div>
    </label>
    <nav role="navigation" class="ah-menu">
      <ul>
        <li>
          <a href="#lab" id="lab-link" role="link" aria-label="#">Lab</a>
        </li>
        <li>
          <a href="#career" id="career-link" role="link" aria-label="#">Career Track</a>
        </li>
        <li>
          <a href="#sandbox" id="sandbox-link" role="link" aria-label="#">Sandbox</a>
        </li>
        <li>
          <button id="themeBtn" role="button">☀</button>
        </li>
      </ul>
    </nav>
`;