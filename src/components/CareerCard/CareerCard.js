import './CareerCard.css';

export const CareerCard = (careerItem) => `
    <section class="ah-career-card">
        <div>
            <a href=${careerItem.link}>    
                <img src=${careerItem.logoCompany} alt=${careerItem.company}/>
            </a>
            <article class="ah-header">
                <h2>${careerItem.jobTitle}</h2>
                <p>${careerItem.duration}</p>
            </article>
        </div>
        <article class="ah-detail">
            <p>${careerItem.description}</p>
            <p class="ah-roles">${careerItem.responsibilities.join(' <br> ')}</p>
        </article>
    </section>
`;