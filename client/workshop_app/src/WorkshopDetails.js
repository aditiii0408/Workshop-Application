function WorkshopDetails()
{
    const details = [
        { label: "Age Group",   value: "8 – 14 Years",   icon: "👦" },
        { label: "Duration",    value: "4 Weeks",         icon: "⏱" },
        { label: "Mode",        value: "Online (Live)",   icon: "💻" },
        { label: "Fee",         value: "₹2,999",          icon: "💰" },
        { label: "Start Date",  value: "15 July 2026",    icon: "📅" },
        { label: "Batch Size",  value: "Max 20 Students", icon: "🎓" },
    ];

    return(
        <div className="section workshop-section">
            <h2 className="section-title">Workshop Details</h2>
            <p className="section-sub">Everything you need to know before enrolling</p>
            <div className="details-grid">
                {
                    details.map((item, index) => (
                        <div className="detail-card" key={ index }>
                            <div className="detail-icon">{ item.icon }</div>
                            <div className="detail-label">{ item.label }</div>
                            <div className="detail-value">{ item.value }</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default WorkshopDetails;