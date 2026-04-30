import { experiences } from '../data/profile'

function Experience() {
    return (
        <section id="experience" className="section">
            <p className="sectionLabel">Experience</p>
            <h2>Work Experience</h2>

            <div className="timeline">
                {experiences.map((item) => (
                    <article className="experienceCard" key={`${item.company}-${item.role}`}>
                        <h3>{item.role}</h3>
                        <p className="company">{item.company}</p>
                        <p className="period">{item.period}</p>

                        <div className="experienceBlock">
                            <h4>Responsibilities</h4>
                            <p>{item.responsibilities}</p>
                        </div>

                        <div className="experienceBlock">
                            <h4>Tech Stack</h4>
                            <p>{item.stack}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Experience