import { profile } from '../data/profile'
import profileImage from '../assets/profile.jpeg'

const heroTechLogos = [
    {
        name: 'Java',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    },
    {
        name: 'Spring Boot',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    },
    {
        name: 'Docker',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    },
    {
        name: 'Kubernetes',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    },
    {
        name: 'AWS',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    },
    {
        name: 'Jenkins',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
    },
    {
        name: 'PostgreSQL',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    },
]

function Hero() {
    return (
        <section id="top" className="hero">
            <div className="heroTop">
                <aside className="profileCard">
                    <div className="avatarImageWrapper">
                        <img src={profileImage} alt={profile.name} className="profileImage"/>
                    </div>

                    <h2>{profile.name}</h2>
                    <p className="profileTitle">{profile.title}</p>`
                </aside>

                <div className="heroTextCard contactHeroCard">
                    <div className="heroContactList">
                        <a href={`mailto:${profile.email}`} className="contactItem">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/gmail.svg" alt="Gmail"/>
                            <span>{profile.email}</span>
                        </a>

                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contactItem"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linkedin.svg"
                                alt="LinkedIn"
                            />
                            <span>LinkedIn Profile</span>
                        </a>

                        <a
                            href="https://wa.me/995591122282"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contactItem"
                        >
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/whatsapp.svg" alt="WhatsApp"/>
                            <span>{profile.phone}</span>
                        </a>

                        <div className="contactItem">
                            <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/geo-alt-fill.svg"
                                 alt="Location"/>
                            <span>{profile.location}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="heroSummaryCard">
                <p>
                    Senior Java Developer with strong experience in fintech, payments, backend architecture,
                    enterprise integrations, microservices and cloud-native systems.
                </p>
            </div>

            <div className="heroTechBar">
                {heroTechLogos.map((tech) => (
                    <div className="techLogoItem" key={tech.name} title={tech.name}>
                        <img src={tech.src} alt={tech.name}/>
                        <span>{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Hero