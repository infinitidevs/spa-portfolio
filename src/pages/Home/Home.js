import "./Home.css";

const Home = () => {
    return `
    <section class="ah-home">
    <section class="ah-home-container">
        <article class="ah-content">
            <p>Hey, I'm</p>
            <h1>Andrés Higuita</h1>
            <p>I'm a passionate and curious Full-Stack Developer Trainee based in Spain. I produce tailor-made tech solutions. </p>
        </article>
        <article class="ah-picture-wrapper">
            <img src="./images/profile-pic.png" 
                class="ah-picture"
                alt="Profile Picture"/>
        </article>    
    </section>
        <article class="ah-cta">
            <a href="mailto:infinitidevs@gmail.com">Say Hi! →</a>
        </article>
    </section>
    `;
};

export const printHome = () => {
    document.querySelector("main").innerHTML = Home();
};