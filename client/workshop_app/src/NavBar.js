function NavBar()
{
    const hScroll = () => {
        document.getElementById("registration").scrollIntoView({ behavior: "smooth" });
    }

    return(
        <nav className="navbar">
            <div className="navbar-inner">
                <a href="#" className="navbar-brand">
                    <div className="navbar-logo">AI</div>
                    <span className="navbar-name">Gema<span>Robotics</span></span>
                </a>
                <div className="navbar-links">
                    <a href="#details"> Details </a>
                    <a href="#outcomes"> Learning Outcomes </a>
                    <a href="#faq"> FAQ </a>
                </div>
                <button className="navbar-cta" onClick={ hScroll }>Enroll Now</button>
            </div>
        </nav>
    );
}

export default NavBar;