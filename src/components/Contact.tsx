import { profile } from '../data/profile'

function Contact() {
    return (
        <section id="contact" className="section contact">
            <p className="sectionLabel">Contact</p>

            <p>
                Email:{' '}
                <a href={`mailto:${profile.email}`}>
                    {profile.email}
                </a>
            </p>

            <p>
                Phone:{' '}
                <a
                    href="https://wa.me/995591122282"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    +995591122282 (WhatsApp)
                </a>
            </p>

            <p>Location: {profile.location}</p>
        </section>
    )
}

export default Contact