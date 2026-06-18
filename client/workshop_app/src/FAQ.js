import { useState } from "react";

function FAQ()
{
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            q: "Does my child need any prior coding experience?",
            a: "No prior experience is needed at all! The workshop is designed for complete beginners. Our instructors start from the very basics and build up gradually, making sure every child can follow along comfortably."
        },
        {
            q: "What equipment or software is required?",
            a: "Just a laptop or desktop computer with a stable internet connection. All software tools used in the workshop are free and browser-based — no downloads or installations required before the first class."
        },
        {
            q: "How are the live sessions conducted?",
            a: "All sessions are conducted live over Zoom in small groups of up to 20 students. Each class is 90 minutes long, held on weekdays. Sessions are also recorded and shared so your child never misses anything."
        },
        {
            q: "What is the refund policy?",
            a: "We offer a full refund if you cancel within 48 hours of registration. After that, if you cancel before the first class, you receive a 50% refund. No refunds are issued once the workshop has started."
        },
        {
            q: "Will my child receive a certificate?",
            a: "Yes! Every student who completes the workshop and submits the capstone project will receive an official GEMA Certificate of Achievement that can be shared on school portfolios and resumes."
        },
    ];

    const hToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return(
        <div className="section faq-section">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-sub">Got questions? We have answers.</p>
            <div className="faq-list">
                {
                    faqs.map((item, index) => (
                        <div className={ "faq-item" + (openIndex === index ? " faq-open" : "") } key={ index }>
                            <button className="faq-question" onClick={ () => hToggle(index) }>
                                <span>{ item.q }</span>
                                <span className="faq-icon">{ openIndex === index ? "−" : "+" }</span>
                            </button>
                            {
                                openIndex === index &&
                                <div className="faq-answer">{ item.a }</div>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FAQ;