function Hero()
{
    const hScroll = () => {
        document.getElementById("registration").scrollIntoView({ behavior: "smooth" });
    }

    return(
        <div className="hero-section">
            <div className="hero-badge">Limited Seats Available</div>
            <h1 className="hero-title">AI & Robotics<br/>Summer Workshop</h1>
            <p className="hero-desc">
                Give your child the skills of tomorrow — today. An immersive 4-week online workshop
                where young minds aged 8–14 explore Artificial Intelligence, build robots, and solve
                real-world problems through hands-on projects.
            </p>
            <div className="hero-meta">
                <span>📅 Starts 15 July 2026</span>
                <span>⏱ 4 Weeks</span>
                <span>💻 Online</span>
                <span>👦 Age 8–14</span>
            </div>
            <button className="btn-enroll" onClick={ hScroll }>Enroll Now →</button>
        </div>
    );
}

export default Hero;