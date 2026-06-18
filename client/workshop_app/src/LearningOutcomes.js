function LearningOutcomes()
{
    const outcomes = [
        { num: "01", title: "Understand AI Fundamentals",   desc: "Learn what AI is, how machine learning works, and explore real-world AI applications used every day." },
        { num: "02", title: "Build & Program Robots",       desc: "Assemble virtual robots and write programs that make them move, sense, and respond to the environment." },
        { num: "03", title: "Solve Real-World Problems",    desc: "Apply design thinking to tackle actual challenges and present solutions just like professional engineers do." },
        { num: "04", title: "Code with Python Basics",      desc: "Write beginner-friendly Python scripts to control AI models and automate simple tasks." },
        { num: "05", title: "Complete a Capstone Project",  desc: "Design and demo a full AI or robotics mini-project to family and peers on the final day." },
        { num: "06", title: "Earn a Completion Certificate", desc: "Receive a certificate of achievement from GEMA recognising your skills and hard work." },
    ];

    return(
        <div className="section outcomes-section">
            <h2 className="section-title">What You Will Learn</h2>
            <p className="section-sub">6 hands-on outcomes across 4 exciting weeks</p>
            <div className="outcomes-grid">
                {
                    outcomes.map((item, index) => (
                        <div className="outcome-card" key={ index }>
                            <div className="outcome-num">{ item.num }</div>
                            <div className="outcome-content">
                                <h3>{ item.title }</h3>
                                <p>{ item.desc }</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default LearningOutcomes;