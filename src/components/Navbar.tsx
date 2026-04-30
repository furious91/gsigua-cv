function Navbar() {
    return (
        <nav className="navbar">
            <a href="#top" className="logo homeLogo" aria-label="Home">
                <img
                    src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/house-door-fill.svg"
                    alt="Home"
                />
            </a>

            <div className="navLinks">
                <a href="#experience">Experience</a>
                <a href="#skills">Skills</a>
            </div>
        </nav>
    )
}

export default Navbar