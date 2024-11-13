import React, { useState } from "react";

function PrescriptionForm() {
    const [prescriptionData, setPrescriptionData] = useState({
        Prescription_ID: "",
        Patient_ID: "",
        Date: "",
        Dosage: "",
        Doctor_ID: "",
        Medicine_ID: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPrescriptionData({
            ...prescriptionData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8383/prescription", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(prescriptionData)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Prescription data submitted successfully:", data);
        } catch (error) {
            console.error("Error submitting prescription data:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Prescription ID:</label>
                <input type="number" name="Prescription_ID" value={prescriptionData.Prescription_ID} onChange={handleChange} required />
            </div>
            <div>
                <label>Patient ID:</label>
                <input type="number" name="Patient_ID" value={prescriptionData.Patient_ID} onChange={handleChange} required />
            </div>
            <div>
                <label>Date:</label>
                <input type="date" name="Date" value={prescriptionData.Date} onChange={handleChange} required />
            </div>
            <div>
                <label>Dosage:</label>
                <input type="text" name="Dosage" value={prescriptionData.Dosage} onChange={handleChange} required />
            </div>
            <div>
                <label>Doctor ID:</label>
                <input type="number" name="Doctor_ID" value={prescriptionData.Doctor_ID} onChange={handleChange} required />
            </div>
            <div>
                <label>Medicine ID:</label>
                <input type="number" name="Medicine_ID" value={prescriptionData.Medicine_ID} onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default PrescriptionForm;