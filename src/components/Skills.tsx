import { mainSkills, handsOnSkills } from '../data/profile'

function Skills() {
    return (
        <section id="skills" className="section">
            <p className="sectionLabel">Skills</p>
            <h2>Technologies</h2>

            <div className="skillsCategory">
                <h3>Main Skills</h3>
                <div className="skillsList">
                    {mainSkills.map((skill) => (
                        <div className="skillRow" key={skill}>
                            <span className="skillTitle">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="skillsCategory">
                <h3>Hands-on Experience</h3>
                <div className="skillsList">
                    {handsOnSkills.map((skill) => (
                        <div className="skillRow" key={skill}>
                            <span className="skillTitle">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills