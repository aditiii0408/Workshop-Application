const express = require("express");
const cors    = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/enquiry", (req, res) => {

    const { name, email, phone } = req.body;

    if (!name || !email || !phone)
    {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    if (!email.includes("@"))
    {
        return res.status(400).json({
            success: false,
            message: "Please enter a valid email"
        });
    }

    if (phone.length < 10)
    {
        return res.status(400).json({
            success: false,
            message: "Please enter a valid phone number"
        });
    }

    console.log("New Enquiry:", { name, email, phone });

    res.status(200).json({
        success: true,
        message: "Registration Successful"
    });

});

app.listen(8000, () => {
    console.log("Server running on port 8000");
});