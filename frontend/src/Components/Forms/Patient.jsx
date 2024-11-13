import React, { useState } from "react";

function PatientForm() {
    const [patientData, setPatientData] = useState({
        Patient_ID: "",
        Patient_Fname: "",
        Patient_Lname: "",
        Blood_type: "",
        Email: "",
        Gender: "",
        Condition: "",
        Admission_Date: "",
        Discharge_Date: "",
        Phone: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatientData({
            ...patientData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8383/patient", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(patientData)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Patient data submitted successfully:", data);
        } catch (error) {
            console.error("Error submitting patient data:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Patient ID:</label>
                <input type="number" name="Patient_ID" value={patientData.Patient_ID} onChange={handleChange} required />
            </div>
            <div>
                <label>First Name:</label>
                <input type="text" name="Patient_Fname" value={patientData.Patient_Fname} onChange={handleChange} required />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" name="Patient_Lname" value={patientData.Patient_Lname} onChange={handleChange} required />
            </div>
            <div>
                <label>Blood Type:</label>
                <input type="text" name="Blood_type" value={patientData.Blood_type} onChange={handleChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="Email" value={patientData.Email} onChange={handleChange} required />
            </div>
            <div>
                <label>Gender:</label>
                <input type="text" name="Gender" value={patientData.Gender} onChange={handleChange} required />
            </div>
            <div>
                <label>Condition:</label>
                <input type="text" name="Condition" value={patientData.Condition} onChange={handleChange} required />
            </div>
            <div>
                <label>Admission Date:</label>
                <input type="date" name="Admission_Date" value={patientData.Admission_Date} onChange={handleChange} required />
            </div>
            <div>
                <label>Discharge Date:</label>
                <input type="date" name="Discharge_Date" value={patientData.Discharge_Date} onChange={handleChange} required />
            </div>
            <div>
                <label>Phone:</label>
                <input type="tel" name="Phone" value={patientData.Phone} onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default PatientForm;