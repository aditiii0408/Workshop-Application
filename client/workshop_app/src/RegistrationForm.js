import { useState } from "react";

function RegistrationForm()
{
    const [name,    setName]    = useState("");
    const [email,   setEmail]   = useState("");
    const [phone,   setPhone]   = useState("");
    const [msg,     setMsg]     = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const hName  = (event) => { setName(event.target.value); }
    const hEmail = (event) => { setEmail(event.target.value); }
    const hPhone = (event) => { setPhone(event.target.value); }

    const hSubmit = async (event) => {
        event.preventDefault();

        if (name === "" || email === "" || phone === "")
        {
            setMsg("All fields are required");
            return;
        }

        if (!email.includes("@"))
        {
            setMsg("Please enter a valid email");
            return;
        }

        if (phone.length < 10)
        {
            setMsg("Please enter a valid phone number");
            return;
        }

        setMsg("");
        setLoading(true);

        try
        {
            const response = await fetch("http://localhost:8000/api/enquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, phone })
            });

            const data = await response.json();

            if (response.ok)
            {
                setSuccess(true);
                setName("");
                setEmail("");
                setPhone("");
                setMsg(data.message);
            }
            else
            {
                setMsg(data.message);
            }
        }
        catch (err)
        {
            setMsg("Something went wrong. Please try again.");
        }

        setLoading(false);
    }

    return(
        <div className="section form-section" id="registration">
            <h2 className="section-title">Register Your Spot</h2>
            <p className="section-sub">Only 20 seats available — secure yours today</p>

            <div className="form-wrapper">
                {
                    success
                    ?
                    <div className="form-success">
                        <div className="success-icon">✅</div>
                        <h3>You're registered!</h3>
                        <p>Thank you, <strong>{ name || "there" }</strong>! We'll send the details to your email shortly.</p>
                        <button className="btn-enroll" onClick={ () => setSuccess(false) }>Register Another</button>
                    </div>
                    :
                    <form onSubmit={ hSubmit }>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                value={ name }
                                onChange={ hName }
                            />
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={ email }
                                onChange={ hEmail }
                            />
                        </div>

                        <div className="form-group">
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                value={ phone }
                                onChange={ hPhone }
                            />
                        </div>

                        { msg !== "" && <p className="form-error">{ msg }</p> }

                        <input
                            type="submit"
                            value={ loading ? "Submitting..." : "Enroll Now" }
                            className="btn-submit"
                            disabled={ loading }
                        />
                    </form>
                }
            </div>
        </div>
    );
}

export default RegistrationForm;