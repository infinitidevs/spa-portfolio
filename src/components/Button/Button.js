import "./Button.css";

export const Button = (url, icon, text, className) => {
    return `
        <a href=${url} class="ah-btn">
            <img src=${icon} alt=${text} class="ah-img-btn"
                icon' target="_blank" rel="noopener"/>
            <h4>${text}</h4>
        </a>
    `
};