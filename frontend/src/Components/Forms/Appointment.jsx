import React, { useState } from "react";

function AppointmentForm() {
    const [appointmentData, setAppointmentData] = useState({
        Appt_ID: "",
        Date: "",
        Time: "",
        Doctor_ID: "",
        Patient_ID: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAppointmentData({
            ...appointmentData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8383/appointment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(appointmentData)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Appointment data submitted successfully:", data);
        } catch (error) {
            console.error("Error submitting appointment data:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Appointment ID:</label>
                <input type="number" name="Appt_ID" value={appointmentData.Appt_ID} onChange={handleChange} required />
            </div>
            <div>
                <label>Date:</label>
                <input type="date" name="Date" value={appointmentData.Date} onChange={handleChange} required />
            </div>
            <div>
                <label>Time:</label>
                <input type="time" name="Time" value={appointmentData.Time} onChange={handleChange} required />
            </div>
            <div>
                <label>Doctor ID:</label>
                <input type="number" name="Doctor_ID" value={appointmentData.Doctor_ID} onChange={handleChange} required />
            </div>
            <div>
                <label>Patient ID:</label>
                <input type="number" name="Patient_ID" value={appointmentData.Patient_ID} onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default AppointmentForm;